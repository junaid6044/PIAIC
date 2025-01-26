from langchain_google_genai import GoogleGenerativeAI # type: ignore
from langchain_core.prompts import PromptTemplate # type: ignore
from dotenv import load_dotenv # type: ignore
import os
import sys
load_dotenv()


llm = GoogleGenerativeAI(
    model="gemini-1.5-flash",
    google_api_key=os.getenv("GOOGLE_API_KEY")
    )

question = input("Enter you prompt: ")

for chunk in llm.stream(question):
    print(chunk)