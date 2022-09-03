export interface KeywordResponse {
	page: number;
	results: Keyword[];
	total_pages: number;
	total_Keywords: number;
}

export interface Keyword {
	name: string;
	id: number;
}
