from langchain.agents import initialize_agent, AgentType # type: ignore
from langchain_google_genai import GoogleGenerativeAI # type: ignore
from langchain_core.tools import tool # type: ignore
from dotenv import load_dotenv # type: ignore
import os
import requests # type: ignore
load_dotenv()

google_api_key = os.getenv("GOOGLE_API_KEY")

# Initialize the GoogleGenerativeAI language model
llm = GoogleGenerativeAI(model="gemini-1.5-flash", google_api_key=google_api_key)


open_weather_api_key = os.getenv("OPEN_WEATHER_API_KEY")

# get api keys from here
# https://home.openweathermap.org/api_keys

# @tool
# def get_weather_tool(city: str) -> str:
#   """Get the weather of a city"""
#   # https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={open_weather_api_key}
#   # http://api.openweathermap.org/geo/1.0/direct?q={city}&appid={open_weather_api_key}
#   print("get_weather_tool input_data", city)
#   response = requests.get(
#     f"http://api.openweathermap.org/geo/1.0/direct?q={city}&appid={open_weather_api_key}"
#   )
#   return response.text


@tool
def get_weather_tool(city: str) -> str:
  """Get the weather of a city by name."""

  # Get latitude and longitude of the city
  geo_response = requests.get(
    f"http://api.openweathermap.org/geo/1.0/direct?q={city}&appid={open_weather_api_key}"
  )

  if geo_response.status_code != 200 or not geo_response.json():
    return f"Error fetching geo data for {city}: {geo_response.status_code}"

  geo_data = geo_response.json()[0]
  name = geo_data["name"]
  lat = geo_data["lat"]
  lon = geo_data["lon"]

  # Now get the current weather using lat and lon
  weather_response = requests.get(
    f"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={open_weather_api_key}&units=metric"
  )

  if weather_response.status_code != 200:
    return f"Error fetching weather data for {name}: {weather_response.status_code}"

  weather_data = weather_response.json()
  weather_description = weather_data["weather"][0]["description"]
  temp = weather_data["main"]["temp"]

  weather_message = f"The current weather in {name} (Lat: {lat}, Lon: {lon}) is {weather_description} with a temperature of {temp}°C."

  return weather_message



@tool
def add_numbers_tool (input_data: str) -> str:
  """addition of two numbers."""
  try:
    numbers = input_data.split(',')
  except Exception as e:
    return input_data
  
  num1, num2 = int(numbers[0]), int(numbers[1])
  result = num1 + num2
  return f"The Sum of {num1} and {num2} is {result}"

agent = initialize_agent(
  tools= [get_weather_tool, add_numbers_tool],
  agent = AgentType.ZERO_SHOT_REACT_DESCRIPTION,
  llm=llm,
  verbose=True,
  max_iterations=1,
)

result = agent.run("what is the current weather of Faisalabad")
# result = agent.run("first number is 5 and second number is double of first number")
# result = agent.run("what is the current USA President")
# result = agent.run("Please explain Aerodynamics in Physics")
# result = agent.run("Please explain cube")
print(result)
