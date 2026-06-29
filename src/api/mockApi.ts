// A fake "network" layer. No real server — just promises with realistic,
// VARIABLE latency. The variable latency is deliberate: it makes the
// search race condition actually reproducible during the interview.

import { PRODUCTS, OPTIONS } from './data';

const wait = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));
const rand = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min);

// Returns the products for a category after a network-like delay.
export async function getProducts(category: string) {
  await wait(rand(300, 700));
  return PRODUCTS.filter((p) => p.category === category).map((p) => ({ ...p }));
}

// Adds an item to the cart. Randomly FAILS ~30% of the time so that missing
// error handling / optimistic-update logic is visible in the UI.
export async function addToCart(product: any) {
  await wait(rand(200, 500));
  if (Math.random() < 0.3) {
    throw new Error('Network error while adding to cart');
  }
  return { ok: true, id: product.id };
}

// Search with intentionally variable latency (150–900ms) so that responses
// for "re" / "rea" / "react" can arrive OUT OF ORDER → the classic race.
export async function search(query: string) {
  await wait(rand(150, 900));
  if (!query.trim()) return [];
  return OPTIONS.filter((o) =>
    o.label.toLowerCase().includes(query.toLowerCase())
  ).map((o) => ({ ...o }));
}
