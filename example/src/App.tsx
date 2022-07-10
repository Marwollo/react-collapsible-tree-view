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

export default App
