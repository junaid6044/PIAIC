from langchain_google_genai import GoogleGenerativeAI # type: ignore
from langchain.prompts import PromptTemplate # type: ignore
from langchain_core.tools import tool # type: ignore
from langchain_core.runnables import RunnableSequence # type: ignore

from dotenv import load_dotenv # type: ignore
import os
load_dotenv()

google_api_key = os.getenv("GOOGLE_API_KEY")

# Initialize the GoogleGenerativeAI language model
llm = GoogleGenerativeAI(model="gemini-1.5-flash", google_api_key=google_api_key)

prompt_template = PromptTemplate (
  input_variables=["input"],
  template="You are a tool caller. you have to call the tool named add_numbers_tool in case if there is any addition required, please don't send any explaination while calling the function, just send the two numbers what users provided e.g 5,2 even though user give the sentance you have to find two numbers and pass to the functions, user input is: {input}\n"
)

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


chain = RunnableSequence (
  prompt_template,
  llm,
  add_numbers_tool,
)

output = chain.invoke("first number is 5 and second number is double of first number")
print("output", output)
