import { useState } from "react";

import Logo from "./Logo.jsx";
import Form from "./Form.jsx";
import PackingList from "./PackingList.jsx";
import Stats from "./Stats.jsx";


export default function App() {
  const [items, setItems] = useState([]);
  

  function handleAddItems(item) {
    setItems(arr => [...arr, item])
  }

  function handleDeleteItem(id) {
    setItems(arr =>
      arr.filter(item =>
        item.id !== id))
  }

  function handleToggleItem(id) {
    setItems(arr =>
      arr.map(item =>
        item.id === id ? {...item, packed: !item.packed} : item))
  }

  function handleClearList() {
    const confirmed = window.confirm('Really?');
    if(confirmed) setItems([]);
    
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem}  onClearList={handleClearList}/>
      <Stats items={items}/>
    </div>
  );
}

