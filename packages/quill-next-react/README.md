
# Quill Next React

A simple and flexible React component wrapper for the Quill Next.

## Installation

You can install the package using npm or yarn:

```bash
npm install quill-next-react
# or
yarn add quill-next-react
#or
pnpm add quill-next-react
```

**Note**: This package assumes that `quill-next`, `react` and `react-dom` are already installed. It also requires Quill as a peer dependency. You might need to install it separately if you haven't already:


```bash
npm install quill-next
# or
yarn add quill-next
#or
pnpm add quill-next
```

## Usage

Import the QuillEditor component and use it in your React application.

```tsx
import { Delta } from 'quill-next';
import QuillEditor from 'quill-next-react';

function App() {
  return (
    <QuillEditor
      defaultValue={new Delta().insert('Hello World!')}
      onTextChange={() => {
        // Handle text change
      }}
      onReady={() => {
        // Handle editor ready
      }}
      config={{ // Pass Quill options here
        theme: 'snow',
        modules: {
          toolbar: [
              [{ 'header': [1, 2, false] }],
              ['bold', 'italic', 'underline'],
              ['image', 'code-block']
          ],
        },
      }}
    />
  );
}

```

### Use custom styles without a theme

Pass `theme: null` to use Quill's core theme without loading the Snow, Bubble,
or Next theme stylesheet. This is useful when the application provides all
editor styles itself.

```tsx
import QuillEditor from 'quill-next-react';
import 'quill-next/dist/quill.core.css';
import './editor.scss';

function App() {
  return (
    <QuillEditor
      config={{ theme: null }}
    />
  );
}
```

The core stylesheet is optional if the application supplies equivalent styles.

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.