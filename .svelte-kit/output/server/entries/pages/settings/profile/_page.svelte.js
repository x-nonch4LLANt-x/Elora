import { h as head, f as escape_html, g as attr_class, d as attr, c as stringify } from "../../../../chunks/index2.js";
import { F as FloatingLabelInput } from "../../../../chunks/FloatingLabelInput.js";
import "../../../../chunks/toast.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let userData = {
      name: "Elora Tech",
      email: "allan.doe@eloratech.com",
      phone: "+254 759 360 423",
      address: "Superior House, First Floor, Shop F20, Nairobi",
      bio: ""
    };
    let isSaving = false;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      head("xebt6w", $$renderer3, ($$renderer4) => {
        $$renderer4.title(($$renderer5) => {
          $$renderer5.push(`<title>Profile Details | Elora Tech</title>`);
        });
      });
      $$renderer3.push(`<div class="min-h-screen bg-background-light dark:bg-background-dark pb-24"><div class="sticky top-0 z-40 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800 px-4 py-3 flex items-center gap-3"><a href="/settings" class="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white active:scale-90 transition-all"><span class="material-symbols-outlined text-[20px]">arrow_back</span></a> <h1 class="text-xl font-bold text-slate-900 dark:text-white">Profile Details</h1></div> <div class="p-4 max-w-2xl mx-auto space-y-6"><div class="bg-white dark:bg-surface-dark rounded-2xl border border-slate-100 dark:border-slate-800 p-6"><div class="flex flex-col items-center gap-4"><div class="w-32 h-32 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden border-4 border-white dark:border-slate-700 shadow-xl"><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU2DYwp5YFA7yBXyWGZlrWehmFEzVn8-3izSaANqc--HquHgTpSBaXTxS4JzAfO5uBj85ENMS64siSSMsp1orgF40S_xqJYXYvTB1SgUXEaeEKb2ctTGtWgtSHN0b-aICLaFa71oV28SHL6Tsp8eFaPm17Po09QtDQxw4tjQEy8mHNBuNcZeRLy111UtQ7SRGxxYio_ogQLNk6Fy3qL3x7WhSXhXrsUP_Ap-0SUJVf_jYfkKa5nhZPCicdD9o2Y6ikPLY-Q5wxlGc" alt="Profile" class="w-full h-full object-cover"/></div> <button class="text-sm text-primary font-bold hover:underline flex items-center gap-1"><span class="material-symbols-outlined text-[18px]">photo_camera</span> Change Photo</button></div></div> <form class="bg-white dark:bg-surface-dark rounded-2xl border border-slate-100 dark:border-slate-800 p-6 space-y-6"><h2 class="font-bold text-lg text-slate-900 dark:text-white">Personal Information</h2> <div class="space-y-5">`);
      FloatingLabelInput($$renderer3, {
        label: "Full Name",
        required: true,
        get value() {
          return userData.name;
        },
        set value($$value) {
          userData.name = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      FloatingLabelInput($$renderer3, {
        label: "Email Address",
        type: "email",
        required: true,
        get value() {
          return userData.email;
        },
        set value($$value) {
          userData.email = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      FloatingLabelInput($$renderer3, {
        label: "Phone Number",
        type: "tel",
        required: true,
        get value() {
          return userData.phone;
        },
        set value($$value) {
          userData.phone = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      FloatingLabelInput($$renderer3, {
        label: "Shipping Address",
        get value() {
          return userData.address;
        },
        set value($$value) {
          userData.address = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <div class="relative pt-2"><div class="relative"><textarea rows="4" class="peer w-full px-4 py-3 rounded-lg border bg-white dark:bg-slate-900 text-slate-900 dark:text-white outline-none transition-all placeholder-transparent border-slate-300 dark:border-slate-600 focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="Bio" id="bio">`);
      const $$body = escape_html(userData.bio);
      if ($$body) {
        $$renderer3.push(`${$$body}`);
      }
      $$renderer3.push(`</textarea> <label for="bio"${attr_class(`absolute left-4 transition-all duration-200 pointer-events-none ${stringify("top-3.5 text-base text-slate-500 dark:text-slate-400")}`)}>Bio (Optional)</label></div> <p class="text-xs text-slate-500 mt-2">Tell us a bit about yourself</p></div></div> <div class="flex gap-3 pt-4"><button type="submit"${attr("disabled", isSaving, true)} class="flex-1 px-8 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2">`);
      {
        $$renderer3.push("<!--[!-->");
        $$renderer3.push(`<span class="material-symbols-outlined text-[20px]">save</span> Save Changes`);
      }
      $$renderer3.push(`<!--]--></button></div></form> <div class="bg-red-50 dark:bg-red-900/10 rounded-2xl border border-red-200 dark:border-red-800 p-6"><h2 class="font-bold text-lg text-red-600 dark:text-red-400 mb-2">Danger Zone</h2> <p class="text-sm text-slate-600 dark:text-slate-400 mb-4">Once you delete your account, there is no going back. Please be
                certain.</p> <button class="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all active:scale-95">Delete Account</button></div></div></div>`);
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
