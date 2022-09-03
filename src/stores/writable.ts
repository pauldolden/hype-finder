import type { Movie } from './../interfaces/Movies';
import { writable } from 'svelte/store';

export const movies = writable([] as Movie[]);
