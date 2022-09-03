export const dedupe = <T extends { id: number }>(arr: T[], newArr: T[]) => {
	const newItems = newArr.filter((newItem) => {
		return arr.every((oldItem) => oldItem.id !== newItem.id);
	});
	return [...arr, ...newItems];
};
