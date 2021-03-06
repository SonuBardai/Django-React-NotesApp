import { useEffect, useState } from "react";

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);


	useEffect(() => {
		fetch(url)
			.then((res) => {
				if (!res.ok) {
					throw Error("Cannot Load Resource");
				}
				return res.json();
			})
			.then((data) => {
				setData(data);
				setIsLoading(false);
				setError(null);
			})
			.catch((err) => {
				setError(err.message);
				setIsLoading(false);
			});
	}, [url]);

	return { data, error, isLoading };
};

export default useFetch;