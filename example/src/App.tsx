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

  return <CollapsibleTree keyExtractor={(item) => item} renderItem={treeItem} data={tree} />
}

export default App
