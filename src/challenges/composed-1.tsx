import { createContext, useContext, useState } from 'react';
import { RenderBadge } from './_shared';

// TICKET — Store page (multi-component)
// Expected: typing in the search box should NOT re-render the Catalog.
//           (Watch each component's "renders" badge.)
// Actual:   every keystroke in Search also re-renders Catalog.
// The bug is not necessarily in the component that misbehaves. Edit only this file.

type Store = {
  search: string;
  setSearch: (v: string) => void;
  cart: string[];
  add: (item: string) => void;
};

const StoreCtx = createContext<Store>(null as any);

function StoreProvider({ children }: { children: React.ReactNode }) {
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState<string[]>([]);
  const add = (item: string) => setCart((c) => [...c, item]);

  const value = { search, setSearch, cart, add };

  return <StoreCtx.Provider value={value}>{children}</StoreCtx.Provider>;
}

function SearchBar() {
  const { search, setSearch } = useContext(StoreCtx);
  return (
    <div>
      <RenderBadge name="SearchBar" />
      <div><input value={search} placeholder="search…" onChange={(e) => setSearch(e.target.value)} /></div>
    </div>
  );
}

function Catalog() {
  const { cart, add } = useContext(StoreCtx);
  return (
    <div>
      <RenderBadge name="Catalog (should be quiet)" />
      <div className="row">
        {['Coffee', 'Bagel', 'Muffin'].map((p) => (
          <button key={p} onClick={() => add(p)}>{p}</button>
        ))}
      </div>
      <p>In cart: {cart.length}</p>
    </div>
  );
}

export default function Composed1() {
  return (
    <StoreProvider>
      <SearchBar />
      <Catalog />
    </StoreProvider>
  );
}
