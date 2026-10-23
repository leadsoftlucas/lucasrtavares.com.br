import { pt } from './pt';
import { en } from './en';

export type Lang = 'pt' | 'en';
export type Dict = typeof pt;

export const dictionaries: Record<Lang, Dict> = { pt, en };

/** Rota da home em cada idioma (cada idioma tem URL propria). */
export const homePath: Record<Lang, string> = { pt: '/', en: '/en/' };

export const htmlLang: Record<Lang, string> = { pt: 'pt-BR', en: 'en' };
