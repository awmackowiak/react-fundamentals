// Rendering Lists
// http://localhost:3000/isolated/exercise/07.js

import * as React from 'react'

const allItems = [
  {id: 'apple', value: '🍎 apple'},
  {id: 'orange', value: '🍊 orange'},
  {id: 'grape', value: '🍇 grape'},
  {id: 'pear', value: '🍐 pear'},
]

function App() {
  const [items, setItems] = React.useState(allItems)

  function addItem() {
    const itemIds = items.map(i => i.id)
    setItems([...items, allItems.find(i => !itemIds.includes(i.id))])
  }

  function removeItem(item) {
    setItems(items.filter(i => i.id !== item.id))
  }

  return (
    <div className="keys">
      <button disabled={items.length >= allItems.length} onClick={addItem}>
        add item
      </button>
      <ul>
        {items.map((item, idx) => (
          // 🐨 add a key prop to the <li> below. Set it to item.id
          <li key={idx}>
            <button onClick={() => removeItem(item)}>remove</button>{' '}
            <label htmlFor={`${idx}-input`}>{item.value}</label>{' '}
            <input id={`${idx}-input`} defaultValue={item.value} />
          </li>
        ))}
      </ul>
      <ul>
    </ul>
    </div>
  )
}

export default App
