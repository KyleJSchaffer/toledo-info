//Matches the three digit weather code with the correct weather icon
export const getWeatherIconPath = (code) => {
    if (code >= 200 && code < 300) {
        return 'thunerstorm_icon.jpg';
    } else if (code >= 300 && code < 400) {
        return 'drizzle_icon.jpg';
    } else if (code >= 500 && code < 600) {
        return 'rain_icon.jpg';
    } else if (code >= 600 && code < 700) {
        return 'snow_icon.jpg';
    } else if (code >= 700 && code < 800) {
        return 'atmosphere_icon.jpg';
    } else if (code === 800) {
        return 'clear_icon.jpg';
    } else if (code >= 801 && code < 900) {
        return 'clouds_icon.jpg';
    } else {
        return 'error_icon.jpg';
    }
}