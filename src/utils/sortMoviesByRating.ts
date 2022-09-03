import type { Movie } from './../interfaces/Movies';

export const sortMoviesByRating = (arr: Movie[]) => {
	return arr.sort((a, b) => {
		return b.vote_average - a.vote_average;
	});
};
