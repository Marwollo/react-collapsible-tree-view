import React, { ReactNode } from "react";
import { useState } from "react"

interface TreeData<T> {
    value: T,
    children: TreeData<T>[]
}

interface IProps<T> {
    data: TreeData<T>,
    keyExtractor: (item: T) => string,
    renderItem: (props: IRenderItemProps<T>) => ReactNode
}

export interface IRenderItemProps<T> {
    data: T,
    toggle: () => void,
    isExpanded?: boolean,
    isLeaf?: boolean
}

type Visibility = "expanded" | "collapsed";

type VisibilityTypes = {
    expanded: Visibility,
    collapsed: Visibility
}

const visibilityTypes : VisibilityTypes = {
    expanded: "expanded",
    collapsed: "collapsed"
}

export const CollapsibleTree = <T extends unknown>(props: IProps<T>) => {
    let [visibility, setVisibility] = useState<Visibility>(visibilityTypes.collapsed);
    
    const toggleVisibility = () => {
        console.log(props.keyExtractor(props.data.value), visibility);

        if (visibility === visibilityTypes.collapsed) {
            return setVisibility(visibilityTypes.expanded);
        }

        return setVisibility(visibilityTypes.collapsed);
    };

    const isExpanded = visibility == visibilityTypes.expanded;

    const renderItemProps : IRenderItemProps<T> = {
        data: props.data.value,
        toggle: toggleVisibility,
        isExpanded: isExpanded,
        isLeaf: props.data.children.length === 0
    }

    return (
        <div key={props.keyExtractor(props.data.value)}>
            {props.renderItem(renderItemProps)}
            {isExpanded && props.data.children.map(
                (child : TreeData<T>) => 
                    <CollapsibleTree
                        keyExtractor={props.keyExtractor}
                        renderItem={props.renderItem} 
                        data={child} 
                    />
            )}
        </div>
    );
}