import { useState } from "react";

// TICKET — Shopping cart
// Expected: the +/− buttons change an item's quantity and the Total updates.
// Actual:   clicking them does nothing on screen.
// Fix this component so it behaves as expected. Edit only this file.

type Item = { id: string; name: string; price: number; qty: number };

const INITIAL: Item[] = [
  { id: "a", name: "Coffee", price: 3, qty: 1 },
  { id: "b", name: "Bagel", price: 2, qty: 2 },
];

export default function Challenge1() {
  const [items, setItems] = useState<Item[]>(INITIAL);

  const changeQty = (id: string, delta: number) => {
    const item = items.find((i) => i.id === id)!;
    item.qty = Math.max(0, item.qty + delta);
    setItems(items);
  };

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div>
      {items.map((i) => (
        <div className="row" key={i.id}>
          <span style={{ width: 80 }}>{i.name}</span>
          <button onClick={() => changeQty(i.id, -1)}>−</button>
          <span style={{ width: 20, textAlign: "center" }}>{i.qty}</span>
          <button onClick={() => changeQty(i.id, +1)}>+</button>
        </div>
      ))}
      <p>
        Total: <strong>${total}</strong>
      </p>
    </div>
  );
}
