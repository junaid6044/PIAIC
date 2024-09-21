from langchain.agents import initialize_agent, AgentType # type: ignore
from langchain_google_genai import GoogleGenerativeAI # type: ignore
from langchain_core.tools import tool # type: ignore

from dotenv import load_dotenv # type: ignore
import os
load_dotenv()

google_api_key = os.getenv("GOOGLE_API_KEY")

# Initialize the GoogleGenerativeAI language model
llm = GoogleGenerativeAI(model="gemini-1.5-flash", google_api_key=google_api_key)


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
  tools= [add_numbers_tool],
  agent = AgentType.ZERO_SHOT_REACT_DESCRIPTION,
  llm=llm,
  verbose=True,
  max_iterations=1,
)

agent.run("2,3")
