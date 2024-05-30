declare const hiprint: Hiprint
declare const defaultElementTypeProvider: () => Provider
type Hiprint = import('./hiprint-types.ts').Hiprint
type Provider = import('./hiprint-types.ts').Provider
export { hiprint, defaultElementTypeProvider }
