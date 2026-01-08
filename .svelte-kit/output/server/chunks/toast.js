import { w as writable } from "./index.js";
function createToastStore() {
  const { subscribe, update } = writable([]);
  return {
    subscribe,
    add: (message, type = "info", duration = 3e3) => {
      const id = Date.now();
      update((toasts) => [...toasts, { id, message, type, duration }]);
      setTimeout(() => {
        update((toasts) => toasts.filter((t) => t.id !== id));
      }, duration);
    },
    remove: (id) => {
      update((toasts) => toasts.filter((t) => t.id !== id));
    }
  };
}
const toast = createToastStore();
export {
  toast as t
};
