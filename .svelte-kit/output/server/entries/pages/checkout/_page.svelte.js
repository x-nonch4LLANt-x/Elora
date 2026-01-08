import { e as ensure_array_like, d as attr_class } from "../../../chunks/index2.js";
import "../../../chunks/cart.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import { e as escape_html } from "../../../chunks/context.js";
import "clsx";
import "@sveltejs/kit/internal/server";
import "../../../chunks/state.svelte.js";
import { F as FloatingLabelInput } from "../../../chunks/FloatingLabelInput.js";
import "../../../chunks/toast.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let step = "shipping";
    let shippingInfo = { name: "", email: "", address: "", city: "", phone: "" };
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="min-h-screen bg-background-light dark:bg-background-dark py-12 px-4 sm:px-6 lg:px-8"><div class="max-w-3xl mx-auto"><div class="mb-8"><div class="flex items-center justify-between relative"><div class="absolute left-0 top-1/2 w-full h-1 bg-slate-200 dark:bg-slate-700 -z-10"></div> <!--[-->`);
      const each_array = ensure_array_like(["shipping", "payment", "confirmation"]);
      for (let i = 0, $$length = each_array.length; i < $$length; i++) {
        let s = each_array[i];
        $$renderer3.push(`<div class="flex flex-col items-center bg-background-light dark:bg-background-dark px-2"><div${attr_class(`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-colors duration-300 ${step === s || step === "payment" || step === "confirmation" ? "border-primary bg-primary text-white" : "border-slate-300 text-slate-500 dark:border-slate-600"}`)}>${escape_html(i + 1)}</div> <span class="mt-2 text-xs font-medium uppercase text-slate-500 dark:text-slate-400">${escape_html(s)}</span></div>`);
      }
      $$renderer3.push(`<!--]--></div></div> `);
      {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div class="bg-surface-light dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800"><h2 class="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Shipping Details</h2> <form class="space-y-6"><div class="grid grid-cols-1 md:grid-cols-2 gap-6">`);
        FloatingLabelInput($$renderer3, {
          label: "Full Name",
          required: true,
          get value() {
            return shippingInfo.name;
          },
          set value($$value) {
            shippingInfo.name = $$value;
            $$settled = false;
          }
        });
        $$renderer3.push(`<!----> `);
        FloatingLabelInput($$renderer3, {
          label: "Email Address",
          type: "email",
          required: true,
          get value() {
            return shippingInfo.email;
          },
          set value($$value) {
            shippingInfo.email = $$value;
            $$settled = false;
          }
        });
        $$renderer3.push(`<!----> `);
        FloatingLabelInput($$renderer3, {
          label: "Phone Number",
          type: "tel",
          required: true,
          get value() {
            return shippingInfo.phone;
          },
          set value($$value) {
            shippingInfo.phone = $$value;
            $$settled = false;
          }
        });
        $$renderer3.push(`<!----> `);
        FloatingLabelInput($$renderer3, {
          label: "City",
          required: true,
          get value() {
            return shippingInfo.city;
          },
          set value($$value) {
            shippingInfo.city = $$value;
            $$settled = false;
          }
        });
        $$renderer3.push(`<!----> <div class="col-span-1 md:col-span-2 space-y-2"><label class="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">Address</label> <textarea required rows="3" class="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Street name, Apartment, etc.">`);
        const $$body = escape_html(shippingInfo.address);
        if ($$body) {
          $$renderer3.push(`${$$body}`);
        }
        $$renderer3.push(`</textarea></div></div> <div class="flex justify-between items-center pt-4"><a href="/cart" class="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-medium transition-colors">Return to Cart</a> <button type="submit" class="px-8 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all active:scale-95">Continue to Payment</button></div></form></div>`);
      }
      $$renderer3.push(`<!--]--></div></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
export {
  _page as default
};
