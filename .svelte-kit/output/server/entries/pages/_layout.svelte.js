import "clsx";
import { e as ensure_array_like, s as store_get, a as attr, b as attr_style, c as stringify, u as unsubscribe_stores, d as attr_class, f as clsx, g as bind_props } from "../../chunks/index2.js";
import { l as language } from "../../chunks/i18n.js";
import { f as flyingItems, c as cartCount } from "../../chunks/cart.js";
import { U as fallback } from "../../chunks/utils2.js";
import { p as products } from "../../chunks/products.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import { e as escape_html } from "../../chunks/context.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/state.svelte.js";
import { t as toast } from "../../chunks/toast.js";
function CartFlyAnimation($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    $$renderer2.push(`<div class="fixed inset-0 pointer-events-none z-[100]"><!--[-->`);
    const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$flyingItems", flyingItems));
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$renderer2.push(`<img${attr("src", item.src)} alt="flying product" class="absolute w-24 h-24 object-cover rounded-xl shadow-2xl border-2 border-white"${attr_style(`left: ${stringify(item.startRect.left)}px; top: ${stringify(item.startRect.top)}px;`)} onload="this.__e=event" onerror="this.__e=event"/>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Logo($$renderer, $$props) {
  let className = fallback($$props["className"], "h-12 w-12");
  $$renderer.push(`<div${attr_class(clsx(className))}><svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full"><circle cx="250" cy="250" r="250" fill="white"></circle><path d="M100 180 L440 180 L400 320 L60 320 Z" fill="black" transform="rotate(-5 250 250)"></path><g transform="rotate(-5 250 250)"><text x="50%" y="275" dominant-baseline="middle" text-anchor="middle" fill="white" font-family="sans-serif" font-weight="900" font-size="110" letter-spacing="-2">ELORA</text></g><text x="250" y="390" dominant-baseline="middle" text-anchor="middle" fill="black" font-family="sans-serif" font-weight="bold" font-size="90" letter-spacing="-2">Tech.</text></svg></div>`);
  bind_props($$props, { className });
}
function Search($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let query = "";
    query.length > 1 ? store_get($$store_subs ??= {}, "$products", products).filter((p) => p.name.toLowerCase().includes(query.toLowerCase())).slice(0, 5) : [];
    $$renderer2.push(`<div class="relative w-full max-w-md"><div class="relative group"><input type="text" placeholder="Search products..."${attr("value", query)} class="w-full pl-10 pr-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-slate-900 transition-all text-sm"/> <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span> `);
    if (query.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<button class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-[18px]">close</button>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Layout$2($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { children } = $$props;
    CartFlyAnimation($$renderer2);
    $$renderer2.push(`<!----> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark"><nav class="sticky top-0 z-50 flex items-center justify-between bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-sm p-4 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300"><div class="flex items-center gap-2">`);
    Logo($$renderer2, { className: "h-10 w-10" });
    $$renderer2.push(`<!----> <h1 class="text-xl font-bold tracking-tight text-slate-900 dark:text-white">ELORA Tech</h1></div> <div class="flex items-center gap-4"><button class="text-slate-900 dark:text-white hover:text-primary transition-colors"><span class="material-symbols-outlined">search</span></button> <button class="text-xs font-bold text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded px-2 py-1">${escape_html(store_get($$store_subs ??= {}, "$language", language).toUpperCase())}</button> <a href="/cart" id="cart-icon" class="relative text-slate-900 dark:text-white hover:text-primary transition-colors"><span class="material-symbols-outlined">shopping_cart</span> `);
    if (store_get($$store_subs ??= {}, "$cartCount", cartCount) > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<span class="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white scale-in-center">${escape_html(store_get($$store_subs ??= {}, "$cartCount", cartCount))}</span>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></a> <button class="text-slate-900 dark:text-white hover:text-primary transition-colors"><span class="material-symbols-outlined">menu</span></button></div></nav> <main class="flex-1 pb-20">`);
    children($$renderer2);
    $$renderer2.push(`<!----></main> <div class="fixed bottom-0 flex w-full items-center justify-around border-t border-slate-200 bg-surface-light p-3 dark:border-slate-800 dark:bg-surface-dark pb-safe"><button class="flex flex-col items-center gap-1 text-primary"><span class="material-symbols-outlined fill-1">home</span> <span class="text-[10px] font-medium">Home</span></button> <button class="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"><span class="material-symbols-outlined">category</span> <span class="text-[10px] font-medium">Catalog</span></button> <button class="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"><span class="material-symbols-outlined">favorite</span> <span class="text-[10px] font-medium">Saved</span></button> <button class="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"><span class="material-symbols-outlined">person</span> <span class="text-[10px] font-medium">Profile</span></button></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Layout$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { children } = $$props;
    $$renderer2.push(`<div class="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark"><nav class="sticky top-0 z-50 flex items-center justify-between bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-sm p-4 border-b border-slate-100 dark:border-slate-800"><div class="flex items-center gap-4"><button class="text-slate-900 dark:text-white hover:text-primary"><span class="material-symbols-outlined">menu</span></button> <div class="flex items-center gap-2">`);
    Logo($$renderer2, { className: "h-8 w-8" });
    $$renderer2.push(`<!----> <h1 class="text-xl font-bold tracking-tight text-slate-900 dark:text-white">ELORA Tech</h1></div></div> <div class="flex items-center gap-4"><button class="text-slate-900 dark:text-white hover:text-primary transition-colors"><span class="material-symbols-outlined">search</span></button> <button class="text-xs font-bold text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded px-2 py-1">${escape_html(store_get($$store_subs ??= {}, "$language", language).toUpperCase())}</button> <button class="relative text-slate-900 dark:text-white hover:text-primary transition-colors"><span class="material-symbols-outlined">shopping_cart</span> <span class="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">2</span></button></div></nav> <main class="flex-1 px-6 py-6">`);
    children($$renderer2);
    $$renderer2.push(`<!----></main> <footer class="bg-surface-light dark:bg-surface-dark border-t border-slate-200 dark:border-slate-800 p-6 flex flex-col items-center gap-4"><p class="text-sm text-slate-500">© 2026 ELORA Tech.</p></footer></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { children } = $$props;
    CartFlyAnimation($$renderer2);
    $$renderer2.push(`<!----> <div class="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark"><header class="sticky top-0 z-50 w-full bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800 transition-colors duration-300"><div class="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between"><div class="flex items-center gap-8"><div class="flex items-center gap-3">`);
    Logo($$renderer2, { className: "h-10 w-10" });
    $$renderer2.push(`<!----> <h1 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">ELORA Tech</h1></div> <nav class="hidden md:flex gap-6"><a href="/" class="text-sm font-medium text-slate-900 dark:text-white hover:text-primary transition-colors">Home</a> <a href="/catalog" class="text-sm font-medium text-slate-500 hover:text-primary transition-colors">Projectors</a> <a href="/accessories" class="text-sm font-medium text-slate-500 hover:text-primary transition-colors">Accessories</a> <a href="/about" class="text-sm font-medium text-slate-500 hover:text-primary transition-colors">About Us</a></nav></div> <div class="flex items-center gap-4">`);
    Search($$renderer2);
    $$renderer2.push(`<!----> <button class="relative text-slate-900 dark:text-white hover:text-primary transition-colors p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"><span class="material-symbols-outlined">favorite</span></button> <a href="/cart" id="cart-icon" class="relative text-slate-900 dark:text-white hover:text-primary transition-colors p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"><span class="material-symbols-outlined">shopping_cart</span> `);
    if (store_get($$store_subs ??= {}, "$cartCount", cartCount) > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<span class="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white scale-in-center">${escape_html(store_get($$store_subs ??= {}, "$cartCount", cartCount))}</span>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></a> <div class="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div> <button class="text-sm font-bold text-slate-900 dark:text-white hover:text-primary transition-colors">${escape_html(store_get($$store_subs ??= {}, "$language", language).toUpperCase())}</button> <button class="text-sm font-medium text-primary hover:text-blue-600">Login</button></div></div></header> <main class="flex-1 w-full max-w-7xl mx-auto px-4 py-8">`);
    children($$renderer2);
    $$renderer2.push(`<!----></main> <footer class="bg-surface-light dark:bg-surface-dark border-t border-slate-200 dark:border-slate-800 mt-auto"><div class="max-w-7xl mx-auto px-4 py-12 grid grid-cols-4 gap-8"><div class="col-span-1"><h1 class="text-xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">ELORA Tech</h1> <p class="text-sm text-slate-500 mb-4">Experience big screen magic at home with our award-winning
                    smart projectors.</p> <div class="flex gap-4"><div class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800"></div> <div class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800"></div></div></div> <div><h4 class="font-bold text-slate-900 dark:text-white mb-4">Shop</h4> <ul class="space-y-2 text-sm text-slate-500"><li><a href="/catalog?category=mini" class="hover:text-primary">Mini Projectors</a></li> <li><a href="/catalog?category=smart" class="hover:text-primary">Smart Projectors</a></li> <li><a href="/catalog?category=outdoor" class="hover:text-primary">Outdoor</a></li> <li><a href="/accessories" class="hover:text-primary">Accessories</a></li></ul></div> <div><h4 class="font-bold text-slate-900 dark:text-white mb-4">Company</h4> <ul class="space-y-2 text-sm text-slate-500"><li><a href="/about" class="hover:text-primary">About Us</a></li> <li><a href="/contact" class="hover:text-primary">Contact</a></li> <li><a href="/blog" class="hover:text-primary">Blog</a></li></ul></div> <div><h4 class="font-bold text-slate-900 dark:text-white mb-4">Contact</h4> <ul class="space-y-2 text-sm text-slate-500"><li class="flex items-center gap-2"><span class="material-symbols-outlined text-[18px]">call</span> 0759 360 423</li> <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[18px]">location_on</span> Superior Centre, Shop F20</li></ul></div></div> <div class="border-t border-slate-200 dark:border-slate-800 py-6 text-center text-sm text-slate-500">© 2026 ELORA Tech. All rights reserved.</div></footer></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Toast($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    $$renderer2.push(`<div class="fixed top-24 right-4 z-[100] flex flex-col gap-2 pointer-events-none"><!--[-->`);
    const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$toast", toast));
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let t = each_array[$$index];
      $$renderer2.push(`<div${attr_class(`pointer-events-auto min-w-[300px] max-w-sm rounded-xl shadow-lg border p-4 flex items-start gap-3 bg-white dark:bg-surface-dark backdrop-blur-md ${stringify(t.type === "success" ? "border-green-200 dark:border-green-800/30" : t.type === "error" ? "border-red-200 dark:border-red-800/30" : "border-blue-200 dark:border-blue-800/30")}`)}><div${attr_class(`shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${stringify(t.type === "success" ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400" : t.type === "error" ? "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400" : "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400")}`)}><span class="material-symbols-outlined text-[16px]">${escape_html(t.type === "success" ? "check" : t.type === "error" ? "error" : "info")}</span></div> <div class="flex-1 pt-0.5"><p class="text-sm font-medium text-slate-800 dark:text-slate-100">${escape_html(t.message)}</p></div> <button class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors" aria-label="Close"><span class="material-symbols-outlined text-[18px]">close</span></button></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data, children } = $$props;
    const Layouts = {
      mobile: Layout$2,
      tablet: Layout$1,
      desktop: Layout
    };
    const CurrentLayout = Layouts[data.deviceType];
    function layoutContent($$renderer3) {
      children($$renderer3);
      $$renderer3.push(`<!---->`);
    }
    $$renderer2.push(`<!---->`);
    CurrentLayout($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->`);
        {
          $$renderer3.push(`<div>`);
          layoutContent($$renderer3);
          $$renderer3.push(`<!----></div>`);
        }
        $$renderer3.push(`<!----> `);
        Toast($$renderer3);
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!---->`);
  });
}
export {
  _layout as default
};
