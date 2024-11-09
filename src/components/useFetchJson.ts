import { useState, useEffect } from "react";

interface FetchState<T> {
	data: T | null;
	loading: boolean;
	error: string | null;
}

export function useFetchJson<T>(url: string): FetchState<T> {
	const [state, setState] = useState<FetchState<T>>({
		data: null,
		loading: true,
		error: null,
	});

	useEffect(() => {
		const abortController = new AbortController();

		const fetchData = async (): Promise<void> => {
			try {
				const response = await fetch(url, {
					signal: abortController.signal,
				});
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const jsonData: T = await response.json();
				setState({ data: jsonData, loading: false, error: null });
			} catch (error) {
				if (error instanceof Error && error.name === "AbortError") {
					console.log("Fetch aborted");
				} else {
					setState({
						data: null,
						loading: false,
						error: error instanceof Error ? error.message : "An error occurred",
					});
				}
			}
		};

		fetchData();

		return () => {
			abortController.abort();
		};
	}, [url]);

	return state;
}
