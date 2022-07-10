# react-collapsible-tree-view

> Customizable and easy-to-use collapsible tree component for showing data in nested structure where each level can be collapsed.

[![NPM](https://img.shields.io/npm/v/react-collapsible-tree-view.svg)](https://www.npmjs.com/package/react-collapsible-tree-view) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-collapsible-tree-view
```

## Usage

```tsx
import React from 'react'
import { CollapsibleTree } from 'react-collapsible-tree-view'
import { IRenderItemProps } from '../../dist/components/CollapsibleTree';

const App = () => {
  const tree = {
    value: "Hello",
    children: [
      {
        value: "I am child",
        children: [
          {
            value: "Another child",
            children: []
          }
        ]
      },
      {
        value: "I am another child",
        children: []
      }
    ]
  };

  const treeItem = ({ data, toggle, isExpanded, isLeaf } : IRenderItemProps<string>) => {

    const toggleButtonLabel = isExpanded ? "Collapse" : "Expand";

    return <div>
      {!isLeaf && <button onClick={toggle}>{toggleButtonLabel}</button>}
      <p>{data}</p>
    </div>;
  }

  return <CollapsibleTree 
          keyExtractor={(item) => item} 
          renderItem={treeItem} 
          data={tree} />
}

export default App
```

See examples for more detailed source files.

## License

MIT © [Marwollo](https://github.com/Marwollo)
