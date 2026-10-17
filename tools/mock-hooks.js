import { pathToFileURL } from 'node:url';
import path from 'node:path';
const wrapper = pathToFileURL(path.resolve(import.meta.dirname, 'three-wrapper.js')).href;
export async function resolve(specifier, context, next) {
  if (specifier === 'three' && !(context.parentURL || '').endsWith('three-wrapper.js')) return { url: wrapper, shortCircuit: true };
  return next(specifier, context);
}
