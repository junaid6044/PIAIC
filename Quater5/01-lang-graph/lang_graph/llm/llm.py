from langchain.agents import AgentExecutor # type: ignore
from langchain.agents import create_tool_calling_agent # type: ignore
from langchain_google_genai import ChatGoogleGenerativeAI, GoogleGenerativeAIEmbeddings # type: ignore
from langchain.tools.retriever import create_retriever_tool # type: ignore
from langchain_core.runnables.history import RunnableWithMessageHistory # type: ignore
from langchain import hub # type: ignore
from langchain.tools import tool # type: ignore
from dotenv import load_dotenv # type: ignore


import os
load_dotenv()

google_api_key = os.getenv("GOOGLE_API_KEY")

# Initialize the ChatGoogleGenerativeAI language model
llm = ChatGoogleGenerativeAI(model="gemini-1.5-flash", google_api_key=google_api_key)
