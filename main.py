import requests

def get_weather(api_key, city_name):
    base_url = "http://api.openweathermap.org/data/2.5/weather?"
    complete_url = f"{base_url}q={city_name}&appid={api_key}&units=metric"
    response = requests.get(complete_url)
    weather_data = response.json()
    if weather_data['cod'] == 200:
        temperature = weather_data['main']['temp']
        feels_like = weather_data['main']['feels_like']
        description = weather_data['weather'][0]['description']
        print(f"Weather in：{city_name}")
        print(f"Temperature：{temperature}°C")
        print(f"Description：{description}")
    else:
        print("数据获取失败，请检查城市名称和API密钥。")

# 使用示例
api_key = "289b28e82f28e4cb4e5f40a79d147e45"
city_name = "Boston"
get_weather(api_key, city_name)



