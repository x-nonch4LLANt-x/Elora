import { a as store_get, f as escape_html, e as ensure_array_like, d as attr, c as stringify, u as unsubscribe_stores } from "../../../chunks/index2.js";
import { w as wishlist } from "../../../chunks/wishlist.js";
import { p as products } from "../../../chunks/products.js";
import "../../../chunks/cart.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let wishlistItems = store_get($$store_subs ??= {}, "$products", products).filter((p) => store_get($$store_subs ??= {}, "$wishlist", wishlist).includes(p.id));
    $$renderer2.push(`<div class="min-h-screen bg-background-light dark:bg-background-dark pb-24"><div class="sticky top-0 z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm px-4 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-4"><a href="/" class="p-2 -ml-2 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"><span class="material-symbols-outlined">arrow_back</span></a> <h1 class="text-xl font-bold text-slate-900 dark:text-white">My Wishlist</h1> <span class="ml-auto text-sm font-medium text-slate-500">${escape_html(wishlistItems.length)} items</span></div> <div class="p-4 max-w-7xl mx-auto">`);
    if (wishlistItems.length === 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="flex flex-col items-center justify-center min-h-[50vh] text-center p-8"><div class="w-20 h-20 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-6"><span class="material-symbols-outlined text-4xl text-slate-400">favorite</span></div> <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-2">Your wishlist is empty</h2> <p class="text-slate-500 mb-8 max-w-sm">Tap the heart icon on any product to save it here for later.</p> <a href="/catalog" class="btn-primary px-8 py-3 rounded-full font-bold">Start Shopping</a></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"><!--[-->`);
      const each_array = ensure_array_like(wishlistItems);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let product = each_array[$$index];
        $$renderer2.push(`<div class="flex gap-4 p-4 bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 relative group"><a${attr("href", `/products/${stringify(product.id)}`)} class="absolute inset-0 z-0 rounded-2xl"${attr("aria-label", `View ${stringify(product.name)}`)}></a> <div class="w-24 h-24 shrink-0 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden relative z-10"><img${attr("src", product.image)}${attr("alt", product.name)} class="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal"/></div> <div class="flex flex-col justify-between flex-1 z-10 pointer-events-none"><div class="flex justify-between items-start"><h3 class="font-bold text-slate-900 dark:text-white line-clamp-2 text-sm">${escape_html(product.name)}</h3> <button class="text-red-500 hover:text-red-600 transition-colors pointer-events-auto p-1 -mt-1 -mr-1"><span class="material-symbols-outlined text-[20px] fill-1">favorite</span></button></div> <div class="flex items-center justify-between mt-2"><span class="font-bold text-primary">Rp ${escape_html(product.price.toLocaleString())}</span> <button class="bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg p-2 flex items-center justify-center active:scale-95 transition-transform pointer-events-auto shadow-lg"><span class="material-symbols-outlined text-[20px]">add_shopping_cart</span></button></div></div></div>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
