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