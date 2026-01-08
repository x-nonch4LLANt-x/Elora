import { f as escape_html, a as store_get, e as ensure_array_like, d as attr, g as attr_class, c as stringify, u as unsubscribe_stores } from "./index2.js";
import { f as filteredProducts, a as activeCategory, b as sortBy } from "./products.js";
import { t } from "./i18n.js";
import "./cart.js";
import { w as wishlist } from "./wishlist.js";
import "./toast.js";
function CatalogPage$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    $$renderer2.push(`<div class="flex flex-col min-h-screen bg-background-light dark:bg-background-dark pb-24"><div class="sticky top-16 z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm px-4 py-3 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between"><h1 class="text-lg font-bold text-slate-900 dark:text-white">${escape_html(store_get($$store_subs ??= {}, "$t", t)("nav.catalog"))} <span class="text-slate-400 text-sm font-normal">(${escape_html(store_get($$store_subs ??= {}, "$filteredProducts", filteredProducts).length)})</span></h1> <button class="flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full"><span class="material-symbols-outlined text-[18px]">filter_list</span> Filter</button></div> <div class="grid grid-cols-1 gap-5 px-4 py-4 pb-6"><!--[-->`);
    const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$filteredProducts", filteredProducts));
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let product = each_array[$$index];
      $$renderer2.push(`<div class="flex gap-4 p-4 bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 relative"><a${attr("href", `/products/${stringify(product.id)}`)} class="absolute inset-0 z-0 rounded-2xl"${attr("aria-label", `View ${stringify(product.name)}`)}></a> <button class="absolute top-3 right-3 z-20 w-9 h-9 bg-white/90 dark:bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-slate-900 dark:text-white shadow-sm active:scale-90 transition-all"><span class="material-symbols-outlined text-[20px]">visibility</span></button> <div class="w-36 h-36 shrink-0 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden relative z-10 pointer-events-none"><img${attr("src", product.image)}${attr("alt", product.name)} class="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal"/></div> <div class="flex flex-col justify-between py-2 flex-1 z-10 pointer-events-none min-w-0"><div class="space-y-2"><div class="flex justify-between items-start gap-2"><h3 class="font-bold text-base text-slate-900 dark:text-white line-clamp-2 leading-tight">${escape_html(product.name)}</h3> <button class="text-slate-400 hover:text-red-500 transition-colors pointer-events-auto shrink-0"><span${attr_class(`material-symbols-outlined text-[22px] ${stringify(store_get($$store_subs ??= {}, "$wishlist", wishlist).includes(product.id) ? "text-red-500 fill-1" : "")}`)}>favorite</span></button></div> <p class="text-xs text-slate-500 line-clamp-2 leading-relaxed">${escape_html(product.description)}</p></div> <div class="flex items-center justify-between mt-4 pt-2"><span class="font-bold text-lg text-primary">${escape_html(store_get($$store_subs ??= {}, "$t", t)("currency"))}
                            ${escape_html(product.price.toLocaleString())}</span> <button class="bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg p-2.5 flex items-center justify-center active:scale-95 transition-transform pointer-events-auto shrink-0"><span class="material-symbols-outlined text-[22px]">add_shopping_cart</span></button></div></div></div>`);
    }
    $$renderer2.push(`<!--]--></div> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function CatalogPage($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    $$renderer2.push(`<div class="flex gap-8 py-8"><aside class="w-64 shrink-0 flex flex-col gap-8 sticky top-24 h-fit"><div><h3 class="font-bold text-lg text-slate-900 dark:text-white mb-4">Categories</h3> <div class="flex flex-col gap-2"><!--[-->`);
    const each_array = ensure_array_like(["all", "mini", "smart", "outdoor", "accessories"]);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let cat = each_array[$$index];
      $$renderer2.push(`<button${attr_class(`text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-between group ${stringify(store_get($$store_subs ??= {}, "$activeCategory", activeCategory) === cat ? "bg-primary/10 text-primary" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800")}`)}>${escape_html(cat.charAt(0).toUpperCase() + cat.slice(1))} <span class="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span></button>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div><h3 class="font-bold text-lg text-slate-900 dark:text-white mb-4">Price Range</h3> <div class="h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-sm text-slate-400">Slider Component</div></div></aside> <div class="flex-1"><div class="flex items-center justify-between mb-6"><h1 class="text-2xl font-bold text-slate-900 dark:text-white">All Products</h1> <div class="flex items-center gap-2"><span class="text-sm text-slate-500">Sort by:</span> `);
    $$renderer2.select(
      {
        value: store_get($$store_subs ??= {}, "$sortBy", sortBy),
        class: "bg-transparent text-sm font-bold text-slate-900 dark:text-white border-none focus:ring-0 cursor-pointer"
      },
      ($$renderer3) => {
        $$renderer3.option({ value: "rating" }, ($$renderer4) => {
          $$renderer4.push(`Recommended`);
        });
        $$renderer3.option({ value: "price-asc" }, ($$renderer4) => {
          $$renderer4.push(`Price: Low to High`);
        });
        $$renderer3.option({ value: "price-desc" }, ($$renderer4) => {
          $$renderer4.push(`Price: High to Low`);
        });
      }
    );
    $$renderer2.push(`</div></div> <div class="grid grid-cols-3 gap-6"><!--[-->`);
    const each_array_1 = ensure_array_like(store_get($$store_subs ??= {}, "$filteredProducts", filteredProducts));
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let product = each_array_1[$$index_1];
      $$renderer2.push(`<div class="group bg-white dark:bg-surface-dark rounded-2xl p-4 border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all hover:-translate-y-1"><a${attr("href", `/products/${stringify(product.id)}`)} class="block"><div class="aspect-square bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden relative mb-4"><img${attr("src", product.image)}${attr("alt", product.name)} class="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal transition-transform duration-700 group-hover:scale-110"/> <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2"><button class="bg-white text-slate-900 h-10 w-10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors" title="Add to Cart"><span class="material-symbols-outlined">add_shopping_cart</span></button> <button class="bg-white text-slate-900 h-10 w-10 rounded-full flex items-center justify-center hover:text-primary transition-colors" title="Quick View"><span class="material-symbols-outlined">visibility</span></button> <button class="bg-white text-slate-900 h-10 w-10 rounded-full flex items-center justify-center hover:text-red-500 transition-colors" title="Add to Wishlist"><span${attr_class(`material-symbols-outlined fill-1 ${stringify(store_get($$store_subs ??= {}, "$wishlist", wishlist).includes(product.id) ? "text-red-500" : "text-slate-400")}`)}>favorite</span></button></div></div></a> <div><div class="flex justify-between items-start mb-1"><h3 class="font-bold text-lg text-slate-900 dark:text-white">${escape_html(product.name)}</h3> <div class="flex items-center gap-1 text-amber-400"><span class="material-symbols-outlined text-[16px] fill-1">star</span> <span class="text-xs font-bold text-slate-600 dark:text-slate-400">${escape_html(product.rating)}</span></div></div> <p class="text-sm text-slate-500 line-clamp-2 h-10 mb-3">${escape_html(product.description)}</p> <p class="text-lg font-bold text-primary">${escape_html(store_get($$store_subs ??= {}, "$t", t)("currency"))}
                            ${escape_html(product.price.toLocaleString())}</p></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  CatalogPage as C,
  CatalogPage$1 as a
};
