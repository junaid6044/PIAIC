# from langchain.agents import AgentExecutor # type: ignore
# from langchain.agents import create_tool_calling_agent # type: ignore
# from langchain_google_genai import ChatGoogleGenerativeAI, GoogleGenerativeAIEmbeddings # type: ignore
# from langchain.tools.retriever import create_retriever_tool # type: ignore
# from langchain_core.runnables.history import RunnableWithMessageHistory # type: ignore
# from langchain import hub # type: ignore
# from langchain.tools import tool # type: ignore
# from dotenv import load_dotenv # type: ignore
# from fastapi import APIRouter, Depends, HTTPException # type: ignore
from contextlib import asynccontextmanager # type: ignore
from fastapi import FastAPI # type: ignore
from .routes.routes import router
from .db.database import init_db



@asynccontextmanager
async def lifespan(app: FastAPI):
  await init_db()
  print("Starting up")
  yield

app = FastAPI(title="Expense Tracker", lifespan=lifespan)

@app.get("/")
async def read_root():
  return {"Hello": "World"}


app.include_router(router, prefix="/api", tags=["Expense Tracker App"])
