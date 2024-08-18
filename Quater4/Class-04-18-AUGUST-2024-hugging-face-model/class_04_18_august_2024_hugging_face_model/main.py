from langchain_huggingface import HuggingFaceEndpoint, ChatHuggingFace # type: ignore
from langchain_core.prompts import PromptTemplate # type: ignore
from langchain_core.chains import SimpleSequentialChain, LLMChain # type: ignore
from dotenv import load_dotenv # type: ignore
import os

load_dotenv()

llm = HuggingFaceEndpoint(
  repo_id = "HuggingFaceH4/zephyr-7b-beta",
  huggingfacehub_api_token = os.getenv("HUGGINGFACE_KEY")
)

prompt = "please give me the receipe of tea"
result = llm.invoke(prompt)
print(result)