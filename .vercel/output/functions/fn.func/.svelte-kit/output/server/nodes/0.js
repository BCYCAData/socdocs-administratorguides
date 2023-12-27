import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.MGs8SvUt.js","_app/immutable/chunks/contexts.iEqIYaMh.js","_app/immutable/chunks/index.rBajJ9mv.js","_app/immutable/chunks/scheduler.Q2oRtGFl.js","_app/immutable/chunks/paths.5YfVIQAG.js","_app/immutable/chunks/stores.L71aH1wm.js","_app/immutable/chunks/singletons._KQknXao.js","_app/immutable/chunks/kit-docs.LA6sFptC.js"];
export const stylesheets = ["_app/immutable/assets/0.5nkt_NPr.css"];
export const fonts = ["_app/immutable/assets/Inter-VF.roman-latin.r-rvtcCH.woff2","_app/immutable/assets/Inter-VF.italic-latin.CMhJtbL9.woff2","_app/immutable/assets/FiraCode-VF.NdT2gfpk.woff2","_app/immutable/assets/FiraCode-VF.S9RXSyIe.woff"];
