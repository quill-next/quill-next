import Quill, { Parchment, Range } from './core/quill.js';
import type {
  Bounds,
  DebugLevel,
  EmitterSource,
  ExpandedQuillOptions,
  QuillOptions,
} from './core/quill.js';

import Block, { BlockEmbed } from './blots/block.js';
import Break from './blots/break.js';
import Container from './blots/container.js';
import Cursor from './blots/cursor.js';
import Embed from './blots/embed.js';
import Inline from './blots/inline.js';
import Scroll from './blots/scroll.js';
import TextBlot from './blots/text.js';
import SoftBreak from './blots/soft-break.js';

import Clipboard from './modules/clipboard.js';
import History from './modules/history.js';
import Keyboard from './modules/keyboard.js';
import Uploader from './modules/uploader.js';
import Delta, { Op, OpIterator, AttributeMap } from '@quill-next/delta-es';
import Input from './modules/input.js';
import UINode from './modules/uiNode.js';

export { default as Module } from './core/module.js';
export { Delta, Op, OpIterator, AttributeMap, Parchment, Range };
export type {
  Bounds,
  DebugLevel,
  EmitterSource,
  ExpandedQuillOptions,
  QuillOptions,
};
export { default as Theme } from './core/theme.js';

Quill.register({
  'blots/block': Block,
  'blots/block/embed': BlockEmbed,
  'blots/break': Break,
  'blots/soft-break': SoftBreak,
  'blots/container': Container,
  'blots/cursor': Cursor,
  'blots/embed': Embed,
  'blots/inline': Inline,
  'blots/scroll': Scroll,
  'blots/text': TextBlot,

  'modules/clipboard': Clipboard,
  'modules/history': History,
  'modules/keyboard': Keyboard,
  'modules/uploader': Uploader,
  'modules/input': Input,
  'modules/uiNode': UINode,
});

export default Quill;
