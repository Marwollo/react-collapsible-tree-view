# react-collapsible-tree-view

> Customizable and easy-to-use collapsible tree component for showing data in nested structure where each level can be collapsed.

[![NPM](https://img.shields.io/npm/v/react-collapsible-tree-view.svg)](https://www.npmjs.com/package/react-collapsible-tree-view) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-collapsible-tree-view
```

## Usage

The `CollapsibleTree` component contains a prop called `renderItem`, representing a component being
used for rendering a single tree item. The properties that are passed to it are of type `ITreeRenderItemProps<T>`, where `T` is the type of the value field in the tree object.

```ts
interface ITreeRenderItemProps<T> {
    data: T,
    depth: number,
    toggle: () => void,
    isExpanded?: boolean,
    isLeaf?: boolean
}
```
Field `data` represents the value that a single tree node holds (the value field in the object you pass).

Each tree node, besides the `data`, has the state that can be either `expanded` or `collapsed`. You can toggle that state using the `toggle` function that is passed as a property. To check if the item is expanded, you can access the `isExpanded` property.

When building custom tree node components, you may also want to check if the node is the leaf node, such that it cannot be further expanded since it doesn't have any children. To do that, use the `isLeaf` boolean property.

To access the depth/level of the tree node, use the `depth` property.

For the best example, take a look at the custom tree item example:

```tsx
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { ITreeRenderItemProps } from "react-collapsible-tree-view"

export const CustomTreeItem = (props : ITreeRenderItemProps<string>) => {
    return (
        <div className="custom-tree-item-container">
            <button disabled={props.isLeaf} onClick={props.toggle}>
                <FontAwesomeIcon icon={props.isExpanded ? faChevronUp : faChevronDown} />
            </button>
            
            <span className="custom-tree-item-data">Level {props.depth} - Data: {props.data}</span>
        </div>
    );
}
```

Of course, it is worth mentioning that when you're working in plain JavaScript, you don't need to explicitly import and define property types.

Here's how the final code looks now:
```tsx
import React from 'react'
import { CollapsibleTree } from 'react-collapsible-tree-view'
import { CustomTreeItem } from './CustomTreeItem';

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

  return (
    <div>
      <CollapsibleTree keyExtractor={(item) => item} renderItem={CustomTreeItem} data={tree} />
    </div>
  );
}

export default App;
```

### Properties of the `CollapsibleTree` component
|Property name|Descriptipn|Required|Type|Default value|
|-|-|-|-|-|
|keyExtractor|Which field of the data object to be used as a list key.|Yes|`(item : T) => string`|`undefined`|
|data|The tree object that should be used for rendering the tree. Must has value of the type `T`, and children of tree nodes (`TreeData<T>`)|Yes|`TreeData<T>`|`undefined`|
|renderItem|Component that should be used for rendering a single tree item.|Yes|`(props: ITreeRenderItemProps<T>) => ReactNode`|`undefined`|
|depth|Number representing the starting / current level of the tree node. Should not be altered unless you want to change the beginning depth level of the first node.|No|`number`|`0`|

See examples for more detailed source files.

## License

MIT © [Marwollo](https://github.com/Marwollo)
