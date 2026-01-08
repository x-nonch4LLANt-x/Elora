import { d as derived, w as writable } from "./index.js";
const cart = writable([]);
const cartCount = derived(
  cart,
  ($cart) => $cart.reduce((total, item) => total + item.quantity, 0)
);
const cartTotal = derived(
  cart,
  ($cart) => $cart.reduce((total, item) => total + item.price * item.quantity, 0)
);
const flyingItems = writable([]);
export {
  cart as a,
  cartTotal as b,
  cartCount as c,
  flyingItems as f
};
