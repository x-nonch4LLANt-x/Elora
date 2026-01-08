import { s as store_get, e as ensure_array_like, a as attr, u as unsubscribe_stores } from "../../../chunks/index2.js";
import { a as cart, b as cartTotal } from "../../../chunks/cart.js";
import { e as escape_html } from "../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    function formatMoney(amount) {
      return new Intl.NumberFormat("en-KE", { style: "currency", currency: "KES" }).format(amount);
    }
    $$renderer2.push(`<div class="container mx-auto px-4 py-8 max-w-4xl"><h1 class="text-3xl font-bold mb-8 text-slate-900 dark:text-white">Shopping Cart</h1> `);
    if (store_get($$store_subs ??= {}, "$cart", cart).length === 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="text-center py-20 bg-surface-light dark:bg-surface-dark rounded-2xl border border-slate-100 dark:border-slate-800"><span class="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-600 mb-4">shopping_cart_off</span> <p class="text-xl text-slate-500 mb-6">Your cart is empty</p> <a href="/catalog" class="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors">Start Shopping</a></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="grid grid-cols-1 lg:grid-cols-3 gap-8"><div class="lg:col-span-2 space-y-4"><!--[-->`);
      const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$cart", cart));
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let item = each_array[$$index];
        $$renderer2.push(`<div class="flex gap-4 p-4 bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm"><div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800"><img${attr("src", item.image)}${attr("alt", item.name)} class="h-full w-full object-cover object-center"/></div> <div class="flex flex-1 flex-col justify-between"><div class="flex justify-between"><div><h3 class="font-semibold text-slate-900 dark:text-white">${escape_html(item.name)}</h3> <p class="text-sm text-slate-500">${escape_html(item.category)}</p></div> <p class="font-bold text-slate-900 dark:text-white">${escape_html(formatMoney(item.price * item.quantity))}</p></div> <div class="flex items-center justify-between mt-4"><div class="flex items-center gap-3 bg-slate-100 dark:bg-slate-800 rounded-lg p-1"><button class="w-8 h-8 flex items-center justify-center rounded-md bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors shadow-sm disabled:opacity-50"${attr("disabled", item.quantity <= 1, true)}><span class="material-symbols-outlined text-[16px]">remove</span></button> <span class="text-sm font-semibold w-6 text-center text-slate-900 dark:text-white">${escape_html(item.quantity)}</span> <button class="w-8 h-8 flex items-center justify-center rounded-md bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors shadow-sm"><span class="material-symbols-outlined text-[16px]">add</span></button></div> <button class="text-red-500 hover:text-red-600 transition-colors p-2" aria-label="Remove item"><span class="material-symbols-outlined">delete</span></button></div></div></div>`);
      }
      $$renderer2.push(`<!--]--></div> <div class="lg:col-span-1"><div class="sticky top-24 bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-100 dark:border-slate-800 p-6 shadow-sm"><h2 class="text-lg font-bold text-slate-900 dark:text-white mb-6">Order Summary</h2> <div class="space-y-4 mb-6"><div class="flex justify-between text-slate-600 dark:text-slate-400"><span>Subtotal</span> <span class="font-medium text-slate-900 dark:text-white">${escape_html(formatMoney(store_get($$store_subs ??= {}, "$cartTotal", cartTotal)))}</span></div> <div class="flex justify-between text-slate-600 dark:text-slate-400"><span>Shipping</span> <span class="font-medium text-slate-900 dark:text-white">Free</span></div> <div class="border-t border-slate-200 dark:border-slate-700 pt-4"><div class="flex justify-between items-center"><span class="text-lg font-bold text-slate-900 dark:text-white">Total</span> <span class="text-xl font-bold text-primary">${escape_html(formatMoney(store_get($$store_subs ??= {}, "$cartTotal", cartTotal)))}</span></div> <p class="text-xs text-slate-500 mt-1">Including VAT</p></div></div> <button class="w-full py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/25 transition-all active:scale-95">Checkout Now</button> <div class="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400"><span class="material-symbols-outlined text-[16px]">lock</span> Secure Checkout</div></div></div></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
