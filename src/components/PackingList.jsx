import { useState } from "react";
import Item from './Item.jsx'

export default function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
  const [sort, setSort] = useState('input');
  let sordetItems;
  switch (sort) {
    case 'input':
      sordetItems = items;
      break;
    case 'description':
      sordetItems = [...items].sort((a, b) => a.description.localeCompare(b.description));
      break;
    case 'packed':
      sordetItems = [...items].sort((a, b) => Number(a.packed) - Number(b.packed));
      break;
    default:
      sordetItems = items;
      break;
  }
  return (
    <div className="list">
      <ul>
        {sordetItems.map((item, i) => (
          <Item item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} key={i} />
        ))}
      </ul>
      <div className="actions">
        <select value={sort} onChange={event => setSort(event.target.value)}>
          <option value="input">Sort by order of input</option>
          <option value="description">Sort by name</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}
