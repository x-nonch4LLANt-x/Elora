import { w as writable } from "./index.js";
const initialWishlist = [];
const wishlist = writable(initialWishlist);
export {
  wishlist as w
};
