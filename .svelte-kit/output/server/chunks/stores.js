import { g as attr_class, j as clsx, k as bind_props, l as getContext } from "./index2.js";
import { U as fallback } from "./utils2.js";
import "clsx";
import "@sveltejs/kit/internal";
import "./exports.js";
import "./utils.js";
import "@sveltejs/kit/internal/server";
import "./state.svelte.js";
function Logo($$renderer, $$props) {
  let className = fallback($$props["className"], "h-12 w-12");
  $$renderer.push(`<div${attr_class(clsx(className))}><svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full"><circle cx="250" cy="250" r="250" fill="white"></circle><path d="M100 180 L440 180 L400 320 L60 320 Z" fill="black" transform="rotate(-5 250 250)"></path><g transform="rotate(-5 250 250)"><text x="50%" y="275" dominant-baseline="middle" text-anchor="middle" fill="white" font-family="sans-serif" font-weight="900" font-size="110" letter-spacing="-2">ELORA</text></g><text x="250" y="390" dominant-baseline="middle" text-anchor="middle" fill="black" font-family="sans-serif" font-weight="bold" font-size="90" letter-spacing="-2">Tech.</text></svg></div>`);
  bind_props($$props, { className });
}
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
export {
  Logo as L,
  page as p
};
