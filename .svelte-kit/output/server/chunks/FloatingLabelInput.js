import { h as attributes, d as attr_class, g as bind_props, c as stringify } from "./index2.js";
import { e as escape_html } from "./context.js";
function FloatingLabelInput($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      value = "",
      label,
      type = "text",
      error = "",
      required = false,
      $$slots,
      $$events,
      ...rest
    } = $$props;
    $$renderer2.push(`<div class="relative pt-2"><div class="relative"><input${attributes(
      {
        type,
        value,
        required,
        ...rest,
        class: `peer w-full px-4 py-3 rounded-lg border bg-white dark:bg-slate-900 text-slate-900 dark:text-white outline-none transition-all placeholder-transparent ${stringify(error ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20" : "border-slate-300 dark:border-slate-600 focus:border-primary focus:ring-2 focus:ring-primary/20")}`,
        placeholder: label
      },
      void 0,
      void 0,
      void 0,
      4
    )}/> <label${attr_class(`absolute left-4 transition-all duration-200 pointer-events-none ${stringify(value ? "-top-2.5 text-xs bg-white dark:bg-slate-900 px-1" : "top-3.5 text-base")} ${stringify(error ? "text-red-500" : "text-slate-500 dark:text-slate-400")}`)}>${escape_html(label)} `);
    if (required) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<span class="text-red-500 ml-0.5">*</span>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></label></div> `);
    if (error) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="text-xs text-red-500 mt-1 ml-1 flex items-center gap-1"><span class="material-symbols-outlined text-[12px]">error</span> ${escape_html(error)}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { value });
  });
}
export {
  FloatingLabelInput as F
};
