import { f as escape_html, d as attr, e as ensure_array_like, g as attr_class, a as store_get, c as stringify, u as unsubscribe_stores, h as head } from "../../../../chunks/index2.js";
import { d as device } from "../../../../chunks/device.js";
import "../../../../chunks/cart.js";
import { w as wishlist } from "../../../../chunks/wishlist.js";
import "../../../../chunks/toast.js";
import { o as onDestroy } from "../../../../chunks/index-server.js";
import "@sveltejs/kit/internal";
import "../../../../chunks/exports.js";
import "../../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../../chunks/state.svelte.js";
function ProductDetailPage$2($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { product } = $$props;
    let selectedImageIndex = 0;
    onDestroy(() => {
    });
    function formatMoney(amount) {
      return new Intl.NumberFormat("en-KE", { style: "currency", currency: "KES" }).format(amount);
    }
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="flex flex-col min-h-screen bg-background-light dark:bg-background-dark pb-32"><div class="sticky top-0 z-40 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800 px-4 py-3 flex items-center gap-3"><a href="/catalog" class="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white active:scale-90 transition-all"><span class="material-symbols-outlined text-[20px]">arrow_back</span></a> <h1 class="text-base font-bold text-slate-900 dark:text-white line-clamp-1">${escape_html(product.name)}</h1></div> <div class="relative group cursor-zoom-in" aria-label="View image in full screen" role="button" tabindex="0"><!---->`);
    {
      $$renderer2.push(`<div class="w-full aspect-square bg-white dark:bg-slate-900 relative"><img${attr("src", product.gallery[selectedImageIndex] || product.image)}${attr("alt", product.name)} class="w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-105"/> <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"><span class="bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-md">Tap to Zoom</span></div></div>`);
    }
    $$renderer2.push(`<!----> `);
    if (product.gallery.length > 1) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="absolute bottom-4 left-0 right-0 flex justify-center gap-2"><!--[-->`);
      const each_array = ensure_array_like(product.gallery);
      for (let i = 0, $$length = each_array.length; i < $$length; i++) {
        each_array[i];
        $$renderer2.push(`<button${attr_class(`w-2 h-2 rounded-full transition-all ${stringify(selectedImageIndex === i ? "bg-primary w-6" : "bg-slate-300 dark:bg-slate-600")}`)}${attr("aria-label", `View image ${stringify(i + 1)}`)}></button>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <button class="absolute top-4 right-4 w-11 h-11 bg-white/90 dark:bg-black/50 backdrop-blur rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-all"${attr("aria-label", store_get($$store_subs ??= {}, "$wishlist", wishlist).includes(product.id) ? "Remove from wishlist" : "Add to wishlist")}><span${attr_class(`material-symbols-outlined text-[24px] ${stringify(store_get($$store_subs ??= {}, "$wishlist", wishlist).includes(product.id) ? "text-red-500 fill-1" : "text-slate-700 dark:text-slate-300")}`)}>favorite</span></button></div> <div class="flex flex-col gap-6 p-4"><div><span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 capitalize">${escape_html(product.category)}</span></div> <div><h1 class="text-2xl font-bold text-slate-900 dark:text-white mb-3">${escape_html(product.name)}</h1> <div class="flex items-center gap-3"><div class="flex text-yellow-400"><!--[-->`);
    const each_array_1 = ensure_array_like(Array(5));
    for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
      each_array_1[i];
      $$renderer2.push(`<svg${attr_class(`w-4 h-4 ${stringify(i < Math.floor(product.rating) ? "fill-current" : "text-slate-300 dark:text-slate-700 fill-current")}`)} viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.26.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.55-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>`);
    }
    $$renderer2.push(`<!--]--></div> <span class="text-sm font-medium text-slate-900 dark:text-white">${escape_html(product.rating)}</span> <span class="text-sm text-slate-500">(${escape_html(product.reviews.length)} reviews)</span></div></div> <div class="flex items-baseline gap-2"><span class="text-3xl font-bold text-primary">${escape_html(formatMoney(product.price))}</span></div> <div><h2 class="font-bold text-slate-900 dark:text-white mb-2">Description</h2> <p class="text-slate-600 dark:text-slate-400 leading-relaxed">${escape_html(product.description)}</p></div> `);
    if (product.features && product.features.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div><h2 class="font-bold text-slate-900 dark:text-white mb-3">Key Features</h2> <div class="space-y-2"><!--[-->`);
      const each_array_2 = ensure_array_like(product.features);
      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
        let feature = each_array_2[$$index_2];
        $$renderer2.push(`<div class="flex items-start gap-2"><span class="material-symbols-outlined text-primary text-[20px] mt-0.5">check_circle</span> <span class="text-sm text-slate-700 dark:text-slate-300">${escape_html(feature)}</span></div>`);
      }
      $$renderer2.push(`<!--]--></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <button class="w-full flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-700 transition-all active:scale-98"><span class="font-bold text-slate-900 dark:text-white">Specifications</span> <span${attr_class(`material-symbols-outlined transition-transform ${stringify("")}`)}>expand_more</span></button> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <a${attr("href", `/reviews/${stringify(product.id)}`)} class="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-700 transition-all active:scale-98"><div class="flex items-center gap-3"><span class="material-symbols-outlined text-primary">rate_review</span> <div><div class="font-bold text-slate-900 dark:text-white">Customer Reviews</div> <div class="text-xs text-slate-500">${escape_html(product.reviews.length)} review${escape_html(product.reviews.length !== 1 ? "s" : "")}</div></div></div> <span class="material-symbols-outlined text-slate-400">chevron_right</span></a></div> <div class="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-surface-dark border-t border-slate-200 dark:border-slate-700 z-50 safe-area-bottom"><button class="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all active:scale-95 flex items-center justify-center gap-2"><span class="material-symbols-outlined text-[24px]">shopping_cart</span> <span>Add to Cart</span></button></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function ProductDetailPage$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { product } = $$props;
    let selectedImageIndex = 0;
    function formatMoney(amount) {
      return new Intl.NumberFormat("en-KE", { style: "currency", currency: "KES" }).format(amount);
    }
    $$renderer2.push(`<div class="min-h-screen bg-background-light dark:bg-background-dark py-8 px-6 lg:px-8"><div class="max-w-7xl mx-auto"><nav class="flex mb-8 text-sm text-slate-500"><a href="/" class="hover:text-primary transition-colors">Home</a> <span class="mx-2">/</span> <a href="/catalog" class="hover:text-primary transition-colors">Catalog</a> <span class="mx-2">/</span> <span class="text-slate-900 dark:text-white">${escape_html(product.name)}</span></nav> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"><div class="space-y-4"><div class="relative aspect-square overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800"><!---->`);
    {
      $$renderer2.push(`<img${attr("src", product.gallery[selectedImageIndex] || product.image)}${attr("alt", product.name)} class="w-full h-full object-contain p-12 transition-all duration-300"/>`);
    }
    $$renderer2.push(`<!----></div> <div class="flex gap-3"><!--[-->`);
    const each_array = ensure_array_like(product.gallery);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let img = each_array[i];
      $$renderer2.push(`<button${attr_class(`relative w-24 h-24 rounded-lg overflow-hidden border-2 transition-all duration-200 ${stringify(selectedImageIndex === i ? "border-primary ring-2 ring-primary/30" : "border-slate-200 dark:border-slate-700 hover:border-slate-300")}`)}><img${attr("src", img)} alt="" class="w-full h-full object-cover"/></button>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div class="flex flex-col"><div class="mb-4"><span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 capitalize">${escape_html(product.category)}</span></div> <h1 class="text-4xl font-bold text-slate-900 dark:text-white mb-4">${escape_html(product.name)}</h1> <div class="flex items-center gap-4 mb-6"><div class="flex text-yellow-400"><!--[-->`);
    const each_array_1 = ensure_array_like(Array(5));
    for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
      each_array_1[i];
      $$renderer2.push(`<svg${attr_class(`w-5 h-5 ${stringify(i < Math.floor(product.rating) ? "fill-current" : "text-slate-300 dark:text-slate-700 fill-current")}`)} viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.26.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.55-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>`);
    }
    $$renderer2.push(`<!--]--></div> <span class="text-lg font-medium text-slate-900 dark:text-white">${escape_html(product.rating)}</span> <a${attr("href", `/reviews/${stringify(product.id)}`)} class="text-sm text-primary hover:underline">(${escape_html(product.reviews.length)} reviews)</a></div> <p class="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">${escape_html(product.description)}</p> <div class="mb-8"><h3 class="font-bold text-slate-900 dark:text-white mb-3">Key Features</h3> <div class="space-y-2"><!--[-->`);
    const each_array_2 = ensure_array_like(product.features || []);
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let feature = each_array_2[$$index_2];
      $$renderer2.push(`<div class="flex items-start gap-2"><span class="material-symbols-outlined text-primary text-[20px] mt-0.5">check_circle</span> <span class="text-slate-700 dark:text-slate-300">${escape_html(feature)}</span></div>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div class="flex items-baseline gap-4 mb-8 pt-6 border-t border-slate-200 dark:border-slate-700"><span class="text-4xl font-bold text-primary">${escape_html(formatMoney(product.price))}</span></div> <div class="flex gap-4"><button class="flex-1 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-primary/25 flex items-center justify-center gap-2"><span class="material-symbols-outlined text-[24px]">shopping_cart</span> <span>Add to Cart</span></button> <button${attr_class(`px-6 py-4 rounded-xl border-2 transition-all ${stringify(store_get($$store_subs ??= {}, "$wishlist", wishlist).includes(product.id) ? "border-red-500 bg-red-50 dark:bg-red-900/20" : "border-slate-200 dark:border-slate-700 hover:border-slate-300")}`)}><span${attr_class(`material-symbols-outlined text-2xl ${stringify(store_get($$store_subs ??= {}, "$wishlist", wishlist).includes(product.id) ? "text-red-500 fill-1" : "text-slate-700 dark:text-slate-300")}`)}>favorite</span></button></div></div></div> <div class="mt-16"><div class="flex border-b border-slate-200 dark:border-slate-700 mb-8"><button${attr_class(`px-8 py-4 text-lg font-medium transition-colors relative ${stringify(
      "text-primary"
    )}`)}>Specifications `);
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></div>`);
    }
    $$renderer2.push(`<!--]--></button> <a${attr("href", `/reviews/${stringify(product.id)}`)} class="px-8 py-4 text-lg font-medium transition-colors text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center gap-2">Reviews <span class="text-sm">(${escape_html(product.reviews.length)})</span></a></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"><!--[-->`);
    const each_array_3 = ensure_array_like(Object.entries(product.specs || {}));
    for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
      let [key, value] = each_array_3[$$index_3];
      $$renderer2.push(`<div class="flex justify-between p-4 rounded-lg bg-white dark:bg-surface-dark border border-slate-100 dark:border-slate-800"><span class="text-slate-600 dark:text-slate-400">${escape_html(key)}</span> <span class="font-medium text-slate-900 dark:text-white text-right">${escape_html(value)}</span></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function ProductDetailPage($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { product } = $$props;
    let selectedImageIndex = 0;
    function formatMoney(amount) {
      return new Intl.NumberFormat("en-KE", { style: "currency", currency: "KES" }).format(amount);
    }
    $$renderer2.push(`<div class="min-h-screen bg-background-light dark:bg-background-dark py-8 px-6 lg:px-8"><div class="max-w-7xl mx-auto"><nav class="flex mb-8 text-sm text-slate-500"><a href="/" class="hover:text-primary transition-colors">Home</a> <span class="mx-2">/</span> <a href="/catalog" class="hover:text-primary transition-colors">Catalog</a> <span class="mx-2">/</span> <span class="text-slate-900 dark:text-white">${escape_html(product.name)}</span></nav> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"><div class="space-y-4"><div class="relative aspect-square overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800"><!---->`);
    {
      $$renderer2.push(`<img${attr("src", product.gallery[selectedImageIndex] || product.image)}${attr("alt", product.name)} class="w-full h-full object-contain p-12 transition-all duration-300"/>`);
    }
    $$renderer2.push(`<!----></div> <div class="flex gap-3"><!--[-->`);
    const each_array = ensure_array_like(product.gallery);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let img = each_array[i];
      $$renderer2.push(`<button${attr_class(`relative w-24 h-24 rounded-lg overflow-hidden border-2 transition-all duration-200 ${stringify(selectedImageIndex === i ? "border-primary ring-2 ring-primary/30" : "border-slate-200 dark:border-slate-700 hover:border-slate-300")}`)}><img${attr("src", img)} alt="" class="w-full h-full object-cover"/></button>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div class="flex flex-col"><div class="mb-4"><span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 capitalize">${escape_html(product.category)}</span></div> <h1 class="text-4xl font-bold text-slate-900 dark:text-white mb-4">${escape_html(product.name)}</h1> <div class="flex items-center gap-4 mb-6"><div class="flex text-yellow-400"><!--[-->`);
    const each_array_1 = ensure_array_like(Array(5));
    for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
      each_array_1[i];
      $$renderer2.push(`<svg${attr_class(`w-5 h-5 ${stringify(i < Math.floor(product.rating) ? "fill-current" : "text-slate-300 dark:text-slate-700 fill-current")}`)} viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.26.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.55-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>`);
    }
    $$renderer2.push(`<!--]--></div> <span class="text-lg font-medium text-slate-900 dark:text-white">${escape_html(product.rating)}</span> <a${attr("href", `/reviews/${stringify(product.id)}`)} class="text-sm text-primary hover:underline">(${escape_html(product.reviews.length)} reviews)</a></div> <p class="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">${escape_html(product.description)}</p> <div class="mb-8"><h3 class="font-bold text-slate-900 dark:text-white mb-3">Key Features</h3> <div class="space-y-2"><!--[-->`);
    const each_array_2 = ensure_array_like(product.features || []);
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let feature = each_array_2[$$index_2];
      $$renderer2.push(`<div class="flex items-start gap-2"><span class="material-symbols-outlined text-primary text-[20px] mt-0.5">check_circle</span> <span class="text-slate-700 dark:text-slate-300">${escape_html(feature)}</span></div>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div class="flex items-baseline gap-4 mb-8 pt-6 border-t border-slate-200 dark:border-slate-700"><span class="text-4xl font-bold text-primary">${escape_html(formatMoney(product.price))}</span></div> <div class="flex gap-4"><button class="flex-1 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-primary/25 flex items-center justify-center gap-2"><span class="material-symbols-outlined text-[24px]">shopping_cart</span> <span>Add to Cart</span></button> <button${attr_class(`px-6 py-4 rounded-xl border-2 transition-all ${stringify(store_get($$store_subs ??= {}, "$wishlist", wishlist).includes(product.id) ? "border-red-500 bg-red-50 dark:bg-red-900/20" : "border-slate-200 dark:border-slate-700 hover:border-slate-300")}`)}><span${attr_class(`material-symbols-outlined text-2xl ${stringify(store_get($$store_subs ??= {}, "$wishlist", wishlist).includes(product.id) ? "text-red-500 fill-1" : "text-slate-700 dark:text-slate-300")}`)}>favorite</span></button></div></div></div> <div class="mt-16"><div class="flex border-b border-slate-200 dark:border-slate-700 mb-8"><button${attr_class(`px-8 py-4 text-lg font-medium transition-colors relative ${stringify(
      "text-primary"
    )}`)}>Specifications `);
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></div>`);
    }
    $$renderer2.push(`<!--]--></button> <a${attr("href", `/reviews/${stringify(product.id)}`)} class="px-8 py-4 text-lg font-medium transition-colors text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center gap-2">Reviews <span class="text-sm">(${escape_html(product.reviews.length)})</span></a></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"><!--[-->`);
    const each_array_3 = ensure_array_like(Object.entries(product.specs || {}));
    for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
      let [key, value] = each_array_3[$$index_3];
      $$renderer2.push(`<div class="flex justify-between p-4 rounded-lg bg-white dark:bg-surface-dark border border-slate-100 dark:border-slate-800"><span class="text-slate-600 dark:text-slate-400">${escape_html(key)}</span> <span class="font-medium text-slate-900 dark:text-white text-right">${escape_html(value)}</span></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { data } = $$props;
    const components = {
      mobile: ProductDetailPage$2,
      tablet: ProductDetailPage$1,
      desktop: ProductDetailPage
    };
    const CurrentComponent = components[store_get($$store_subs ??= {}, "$device", device)];
    head("9lltit", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(data.product.name)} | Elora Tech</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", data.product.description)}/>`);
    });
    $$renderer2.push(`<!---->`);
    CurrentComponent($$renderer2, { product: data.product });
    $$renderer2.push(`<!---->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
