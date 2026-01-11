<template>
  <div ref="quill-container"></div>
</template>

<script setup lang="ts">
import { BlotConstructor } from 'parchment'
import { useTemplateRef, watch, watchEffect, onUnmounted } from 'vue'
import { Delta, EmitterSource, QuillOptions, Range } from 'quill-next'
import Quill from 'quill-next'
import { useQuill } from '../composables/use-quill'
import { deltasAreEqual } from '../delta-helpers'

export interface QuillEditorProps {
  readOnly?: boolean
  config?: QuillOptions
  onReady?: (quill: Quill) => void
  blots?: BlotConstructor[]
}

interface Emits {
  (
    event: 'text-change',
    delta: Delta,
    oldContent: Delta,
    source: EmitterSource
  ): void
  (
    event: 'selection-change',
    range: Range,
    oldRange: Range,
    source: EmitterSource
  ): void
  (event: 'ready', quill: Quill)
}

const model = defineModel<Delta>('modelValue', {
  default: () => new Delta(),
  required: false,
})

const props = defineProps<QuillEditorProps>()
const emits = defineEmits<Emits>()

let initialized = false
const containerRef = useTemplateRef<HTMLDivElement>('quill-container')

const { quill } = useQuill(containerRef, props.config, props.blots)

defineExpose({
  quill,
})

watchEffect(() => {
  if (quill.value && !initialized) {
    initQuill()
  }
})

watch(
  model,
  (newValue) => {
    if (!deltasAreEqual(newValue, quill.value?.getContents())) {
      quill.value?.setContents(newValue, 'user')
    }
  },
  {
    deep: true,
    immediate: true,
  }
)

function onReady(): void {
  emits('ready', quill.value)

  if (model.value) {
    quill.value.setContents(model.value)
  }
}

function onTextChange(delta: Delta, oldContent: Delta, source: EmitterSource): void {
  model.value = quill.value.getContents()
  emits('text-change', delta, oldContent, source)
}

function onSelectionChange(range: Range, oldRange: Range, source: EmitterSource): void {
  emits('selection-change', range, oldRange, source)
}

function initQuill() {
  initialized = true

  quill.value.on('ready', onReady)
  quill.value.on('text-change', onTextChange)
  quill.value.on('selection-change', onSelectionChange)
}

onUnmounted(() => {
  if (quill.value) {
    quill.value.off('ready', onReady)
    quill.value.off('text-change', onTextChange)
    quill.value.off('selection-change', onSelectionChange)
    quill.value.destroy();
  }
})
</script>
