export async function fetchCar( model?: string ) {
    const headers = {
        'X-RapidAPI-Key': 'a737f95e4cmsh6c029d0154c912ep10cd8fjsnf1adc2174971',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model}`, {headers});
    const result = await response.json();
    return result
}