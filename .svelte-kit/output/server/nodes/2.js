import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.tWtJLe6M.js","_app/immutable/chunks/p3BVkhEL.js","_app/immutable/chunks/D97IuHMQ.js","_app/immutable/chunks/C8Gg-cER.js","_app/immutable/chunks/CPfwhYki.js","_app/immutable/chunks/B3VlpfkE.js","_app/immutable/chunks/UExRh7po.js","_app/immutable/chunks/CD2Y0r4l.js","_app/immutable/chunks/CLyLYJAi.js","_app/immutable/chunks/S2KFCXxO.js","_app/immutable/chunks/CJwBexch.js","_app/immutable/chunks/Oh7xaASr.js","_app/immutable/chunks/B17Q6ahh.js","_app/immutable/chunks/DdaHFDoq.js"];
export const stylesheets = [];
export const fonts = [];
