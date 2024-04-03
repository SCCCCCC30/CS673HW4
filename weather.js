function fetchWeather() {
    const apiKey = '289b28e82f28e4cb4e5f40a79d147e45';
    const cityName = document.getElementById('cityName').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=zh_cn`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('网络响应错误');
            }
            return response.json();
        })
        .then(data => displayWeather(data))
        .catch(error => console.error('获取天气信息失败:', error));
}

function displayWeather(data) {
    const { name, main, weather } = data;
    const weatherDiv = document.getElementById('weatherResult');
    weatherDiv.innerHTML = `
        <h2>天气情况：${name}</h2>
        <p>温度：${main.temp}°C</p>
        <p>天气：${weather[0].description}</p>
        <p>最高温度：${main.temp_max}°C</p>
        <p>最低温度：${main.temp_min}°C</p>
    `;
}
