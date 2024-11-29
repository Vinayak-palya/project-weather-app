const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'c64ab119d3mshe7df00f27d6ffc3p15c1d6jsn5c4569ecc312',
		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


const fetchWeather = async () => {
	try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
};

fetchWeather(); // Call the async function
