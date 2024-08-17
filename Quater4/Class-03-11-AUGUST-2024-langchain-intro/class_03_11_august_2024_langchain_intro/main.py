from langchain_openai import OpenAI # type: ignore
from dotenv import load_dotenv # type: ignore
import os
load_dotenv()

llm = OpenAI(openai_api_key=os.getenv("OPENAI_API_KEY"))

prompt = "Hello how are you? please translate into french"
response = llm.invoke(prompt)
print(response)
