import axios from "axios";
const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "539e3b86b7915079c78d245a456d8e1e";

export const fetchWeather = async (query) => {
	const { data } = await axios.get(URL, {
		params: {
			q: query,
			units: "metric",
			APPID: API_KEY,
		},
	});
	return data;
};
