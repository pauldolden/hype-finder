import { sortMoviesByRating } from './../utils/sortMoviesByRating';
import type { Movie, MoviesResponse } from './../interfaces/Movies';
import type { KeywordResponse } from './../interfaces/Keywords';
import type { AxiosError } from 'axios';
import { tmdb } from '../config';
import { movies } from './../stores/writable';
import { dedupe } from '../utils/dedupe';

export interface FetchKeywordsOptions {
	cursor: number;
	params: Record<string, string>;
}

export const fetchKeywords = async ({ cursor, params }: FetchKeywordsOptions) => {
	try {
		const res = await tmdb.get(
			`/search/keyword?query=${encodeURIComponent(params.keyword)}&page=${cursor}`
		);
		if (res.status === 200) {
			return res.data as KeywordResponse;
		}
	} catch (_err) {
		const err = _err as AxiosError;
		console.log(err);
	}
};

export const fetchMoviesByKeywordId = async (keywordId: number) => {
	try {
		const res = await tmdb.get(`/keyword/${keywordId}/movies`);

		if (res.status === 200) {
			const data = res?.data as MoviesResponse;

			movies.update((movies) => {
				return sortMoviesByRating(dedupe<Movie>(movies, data.results));
			});
		}
	} catch (_err) {
		const err = _err as AxiosError;
		console.log(err);
	}
};
