import { h as head, f as escape_html, g as attr_class, d as attr, c as stringify } from "../../../chunks/index2.js";
import { F as FloatingLabelInput } from "../../../chunks/FloatingLabelInput.js";
import { o as onDestroy } from "../../../chunks/index-server.js";
import "clsx";
import "../../../chunks/toast.js";
function Map($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    onDestroy(() => {
    });
    head("mreby4", $$renderer2, ($$renderer3) => {
      $$renderer3.push(`<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin=""/>`);
    });
    $$renderer2.push(`<div class="w-full h-full relative group"><div class="w-full h-full z-0"></div> <div class="absolute bottom-6 right-6 flex flex-col gap-2 z-[400]"><button class="w-10 h-10 bg-white dark:bg-slate-800 rounded-lg shadow-lg flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white transition-colors" aria-label="Zoom in"><span class="material-symbols-outlined">add</span></button> <button class="w-10 h-10 bg-white dark:bg-slate-800 rounded-lg shadow-lg flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white transition-colors" aria-label="Zoom out"><span class="material-symbols-outlined">remove</span></button></div></div>`);
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
      $$renderer3.push(`<!--]--></button></form></div> <div class="space-y-8"><div class="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800">`);
      Map($$renderer3);
      $$renderer3.push(`<!----> <div class="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 flex items-start gap-4"><div class="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 flex items-center justify-center shrink-0"><span class="material-symbols-outlined text-[24px]">storefront</span></div> <div><h3 class="font-bold text-slate-900 dark:text-white">Elora Tech</h3> <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">Superior House, First Floor<br/> Shop F20, Nairobi</p> <a href="https://maps.app.goo.gl/r4yuR87uF8oeobGy9" target="_blank" class="inline-flex items-center gap-1 text-primary text-xs font-bold mt-2 hover:underline"><span>Open in Google Maps</span> <span class="material-symbols-outlined text-[14px]">open_in_new</span></a></div></div></div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-6"><a href="tel:0759360423" class="glass-card p-6 rounded-xl hover:scale-[1.02] transition-transform group"><div class="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center mb-4 group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors"><span class="material-symbols-outlined text-3xl">call</span></div> <h3 class="font-bold text-lg mb-1 text-slate-900 dark:text-white">Phone</h3> <p class="text-sm text-slate-500 font-mono">0759360423</p></a> <a href="https://wa.me/254759360423" target="_blank" class="glass-card p-6 rounded-xl hover:scale-[1.02] transition-transform group"><div class="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center mb-4 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-900/50 transition-colors"><i class="fa-brands fa-whatsapp text-3xl"></i> <span class="material-symbols-outlined text-3xl">chat</span></div> <h3 class="font-bold text-lg mb-1 text-slate-900 dark:text-white">WhatsApp</h3> <p class="text-sm text-slate-500 font-mono">0759360423</p></a> <a href="https://www.tiktok.com/@eloratechke" target="_blank" class="glass-card p-6 rounded-xl hover:scale-[1.02] transition-transform group sm:col-span-2 flex items-center gap-6"><div class="w-12 h-12 rounded-full bg-black/5 dark:bg-white/10 text-black dark:text-white flex items-center justify-center group-hover:bg-black/10 dark:group-hover:bg-white/20 transition-colors"><span class="material-symbols-outlined text-3xl">music_note</span></div> <div><h3 class="font-bold text-lg text-slate-900 dark:text-white">TikTok</h3> <p class="text-sm text-slate-500">@eloratechke</p> <p class="text-xs text-primary mt-1">Follow for latest updates &amp; demos</p></div></a></div></div></div></div></div>`);
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
