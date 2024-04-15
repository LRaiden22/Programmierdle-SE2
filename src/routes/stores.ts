import {derived, writable} from 'svelte/store';
type lang = {
    id: number;
    name: string;
    picture: string;
    paradigm: string;
    platform: string;
    typesystem: string;
    purpose: string;
    easyness: string;
    releaseyear: number;
}
export const langs = writable(<lang[]>[])
export const langNames = derived(langs, $langs => $langs.map(lang => lang.name));
export const loggedIn = writable(false);