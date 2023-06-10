import React from "react";
import { IList } from "../../../types/interfaces.ts";
import ListItem from "./ListItem.tsx";
import {LIST_STYLES} from "./styles.ts";

const List: React.FC<IList> = ({ list }) => (
  <div className={LIST_STYLES.LIST_WRAPPER}>
    {list.map((item, index: number) => (
      <ListItem
        key={index}
        _id={item._id}
        name={item.name}
        photo={item.photo}
        prompt={item.prompt}
      />
    ))}
  </div>
)

export default List
