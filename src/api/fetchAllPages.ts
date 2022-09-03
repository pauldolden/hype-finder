import type { AxiosError } from 'axios';
import type { Response } from '../interfaces/Response';

export const fetchAllPages = async <
	T,
	S extends { cursor: number; params: Record<string, string> }
>(
	apiRequest: (options: S) => Response<T>,
	options: S
) => {
	const data: T[] = [];
	// Make the first request and capture the number of pages
	try {
		const res = await apiRequest(options);
		const TOTAL_PAGES = res.total_pages;
		// increment the cursor to 2 just in case we need it
		options.cursor = 2;
		// If there is results add them to the data array
		if (res.results.length > 0) {
			res.results.forEach((result) => {
				data.push(result);
			});
		}
		// Immediately return the data if there is only one page
		if (res.total_pages === 1) return data;

		// Loop over the number of pages fetching and adding the results to the data array
		for (let index = options.cursor; index <= TOTAL_PAGES; index++) {
			const res = await apiRequest(options);

			if (res.results.length > 0) {
				res.results.forEach((result) => {
					data.push(result);
				});
			}
			// Increment the page number
			options.cursor += 1;
		}
	} catch (_err) {
		const err = _err as AxiosError;
		console.log(err);
	}

	console.log(data);
};
