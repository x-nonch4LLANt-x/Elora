import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.rv8I4cRI.js","_app/immutable/chunks/cO8HySHN.js","_app/immutable/chunks/C1idHNw3.js","_app/immutable/chunks/D3t8wLcA.js","_app/immutable/chunks/C9fbpDiD.js","_app/immutable/chunks/pNYLpbqL.js","_app/immutable/chunks/CljNcLvA.js","_app/immutable/chunks/Ch5oqbB-.js","_app/immutable/chunks/ubpBsaLu.js","_app/immutable/chunks/CrtVcNaX.js","_app/immutable/chunks/SPHUI4jo.js","_app/immutable/chunks/C5dHBkwX.js","_app/immutable/chunks/hrNWNbyE.js","_app/immutable/chunks/C3NHDcnv.js","_app/immutable/chunks/B17Q6ahh.js","_app/immutable/chunks/COV5WMI3.js","_app/immutable/chunks/CG5hcr9a.js"];
export const stylesheets = [];
export const fonts = [];
