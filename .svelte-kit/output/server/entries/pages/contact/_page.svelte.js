import { a as attr, g as bind_props, d as attr_class, c as stringify } from "../../../chunks/index2.js";
import { F as FloatingLabelInput } from "../../../chunks/FloatingLabelInput.js";
import { U as fallback } from "../../../chunks/utils2.js";
import "../../../chunks/toast.js";
import { e as escape_html } from "../../../chunks/context.js";
function Map($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let query = fallback($$props["query"], "New York, NY");
    let iframeSrc = "";
    $$renderer2.push(`<div class="w-full h-full rounded-2xl overflow-hidden glass shadow-inner relative bg-slate-100 dark:bg-slate-800"><iframe title="Location Map" width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"${attr("src", iframeSrc)} class="w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0 invert dark:invert-0 dark:contrast-125 contrast-75" style="border: 0"></iframe> <div class="absolute inset-0 pointer-events-none border-4 border-white/20 dark:border-slate-800/20 rounded-2xl"></div></div>`);
    bind_props($$props, { query });
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let formData = { name: "", email: "", subject: "", message: "" };
    let isSubmitting = false;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="min-h-screen bg-background-light dark:bg-background-dark py-12 px-4 sm:px-6 lg:px-8"><div class="max-w-6xl mx-auto"><div class="grid grid-cols-1 lg:grid-cols-2 gap-12"><div class="glass p-8 rounded-2xl"><div class="text-center mb-8"><h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-2">Get in Touch</h1> <p class="text-slate-500">We'd love to hear from you. Fill out the form below.</p></div> <form class="space-y-6"><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="space-y-2">`);
      FloatingLabelInput($$renderer3, {
        label: "Your Name",
        required: true,
        get value() {
          return formData.name;
        },
        set value($$value) {
          formData.name = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div> <div class="space-y-2">`);
      FloatingLabelInput($$renderer3, {
        label: "Email Address",
        type: "email",
        required: true,
        get value() {
          return formData.email;
        },
        set value($$value) {
          formData.email = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></div> <div class="space-y-2">`);
      FloatingLabelInput($$renderer3, {
        label: "Subject",
        required: true,
        get value() {
          return formData.subject;
        },
        set value($$value) {
          formData.subject = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div> <div class="space-y-2"><div class="relative pt-2"><div class="relative"><textarea required rows="5" class="peer w-full px-4 py-3 rounded-lg border bg-white dark:bg-slate-900 text-slate-900 dark:text-white outline-none transition-all placeholder-transparent border-slate-300 dark:border-slate-600 focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="Your Message" id="message">`);
      const $$body = escape_html(formData.message);
      if ($$body) {
        $$renderer3.push(`${$$body}`);
      }
      $$renderer3.push(`</textarea> <label for="message"${attr_class(`absolute left-4 transition-all duration-200 pointer-events-none ${stringify("top-3.5 text-base text-slate-500 dark:text-slate-400")}`)}>Your Message <span class="text-red-500 ml-0.5">*</span></label></div></div></div> <button type="submit"${attr("disabled", isSubmitting, true)} class="w-full py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2">`);
      {
        $$renderer3.push("<!--[!-->");
        $$renderer3.push(`Send Message`);
      }
      $$renderer3.push(`<!--]--></button></form></div> <div class="space-y-8"><div class="h-[400px] w-full">`);
      Map($$renderer3, {});
      $$renderer3.push(`<!----></div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-6"><div class="glass-card p-6 rounded-xl"><span class="material-symbols-outlined text-3xl text-primary mb-3">location_on</span> <h3 class="font-bold text-lg mb-1">Visit Us</h3> <p class="text-sm text-slate-500">123 Tech Avenue<br/>Innovation District, NY 10001</p></div> <div class="glass-card p-6 rounded-xl"><span class="material-symbols-outlined text-3xl text-primary mb-3">support_agent</span> <h3 class="font-bold text-lg mb-1">Support</h3> <p class="text-sm text-slate-500">support@eloratech.com<br/>+1 (555) 123-4567</p></div></div></div></div></div></div>`);
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
