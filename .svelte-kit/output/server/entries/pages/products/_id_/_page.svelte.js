import { a as attr, e as ensure_array_like, d as attr_class, c as stringify, s as store_get, u as unsubscribe_stores, g as bind_props } from "../../../../chunks/index2.js";
import "../../../../chunks/cart.js";
import { w as wishlist } from "../../../../chunks/wishlist.js";
import { e as escape_html } from "../../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let product;
    let data = $$props["data"];
    let selectedImageIndex = 0;
    product = data.product;
    $$renderer2.push(`<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><nav class="flex mb-8 text-sm text-gray-400"><a href="/" class="hover:text-white transition-colors">Home</a> <span class="mx-2">/</span> <a href="/catalog" class="hover:text-white transition-colors">Catalog</a> <span class="mx-2">/</span> <span class="text-white">${escape_html(product.name)}</span></nav> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"><div class="space-y-4"><div class="relative aspect-square overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group"><!---->`);
    {
      $$renderer2.push(`<img${attr("src", product.gallery[selectedImageIndex] || product.image)}${attr("alt", product.name)} class="absolute inset-0 w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-105"/>`);
    }
    $$renderer2.push(`<!----></div> <div class="flex gap-4 overflow-x-auto pb-2"><!--[-->`);
    const each_array = ensure_array_like(product.gallery);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let img = each_array[i];
      $$renderer2.push(`<button${attr_class(`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${stringify(selectedImageIndex === i ? "border-primary-500 ring-2 ring-primary-500/50" : "border-white/10 hover:border-white/30")}`)}><img${attr("src", img)} alt="" class="w-full h-full object-cover"/></button>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div class="flex flex-col justify-center"><div class="mb-2"><span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-500/20 text-primary-300 border border-primary-500/30 capitalize">${escape_html(product.category)}</span></div> <h1 class="text-4xl font-bold text-white mb-4 tracking-tight">${escape_html(product.name)}</h1> <div class="flex items-center gap-4 mb-6"><div class="flex items-center text-yellow-400"><span class="text-lg font-bold mr-1">${escape_html(product.rating)}</span> <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.26.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.55-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg> <span class="text-gray-400 text-sm ml-2">(${escape_html(product.reviews.length)} reviews)</span></div></div> <p class="text-gray-300 text-lg leading-relaxed mb-8">${escape_html(product.description)}</p> <div class="space-y-4 mb-8"><!--[-->`);
    const each_array_1 = ensure_array_like(product.features || []);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let feature = each_array_1[$$index_1];
      $$renderer2.push(`<div class="flex items-center text-gray-300"><svg class="w-5 h-5 text-primary-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> ${escape_html(feature)}</div>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="flex items-center gap-6 pt-6 border-t border-white/10"><div class="text-3xl font-bold text-white">Rp ${escape_html(product.price.toLocaleString())}</div> <button class="flex-1 bg-primary-600 hover:bg-primary-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-primary-900/50 flex items-center justify-center gap-2"><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg> Add to Cart</button> <button class="p-4 rounded-xl border border-white/10 hover:bg-white/5 transition-colors group"><span${attr_class(`material-symbols-outlined text-2xl transition-colors ${stringify(store_get($$store_subs ??= {}, "$wishlist", wishlist).includes(product.id) ? "text-red-500 fill-1" : "text-gray-400 group-hover:text-red-400")}`)}>favorite</span></button></div></div></div> <div class="mt-16"><div class="flex border-b border-white/10 mb-8"><button${attr_class(`px-8 py-4 text-lg font-medium transition-colors relative ${stringify("text-white")}`)}>Specifications `);
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500"></div>`);
    }
    $$renderer2.push(`<!--]--></button> <button${attr_class(`px-8 py-4 text-lg font-medium transition-colors relative ${stringify("text-gray-400 hover:text-white")}`)}>Reviews (${escape_html(product.reviews.length)}) `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></button></div> <div class="min-h-[300px]">`);
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="grid grid-cols-1 md:grid-cols-2 gap-4"><!--[-->`);
      const each_array_2 = ensure_array_like(Object.entries(product.specs || {}));
      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
        let [key, value] = each_array_2[$$index_2];
        $$renderer2.push(`<div class="flex justify-between p-4 rounded-lg bg-white/5 border border-white/5"><span class="text-gray-400">${escape_html(key)}</span> <span class="text-white font-medium text-right">${escape_html(value)}</span></div>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
