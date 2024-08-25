from langchain_community.document_loaders import TextLoader # type: ignore
from langchain.indexes import VectorstoreIndexCreator # type: ignore
from langchain.text_splitter import CharacterTextSplitter # type: ignore
from langchain_google_genai import GoogleGenerativeAI, GoogleGenerativeAIEmbeddings # type: ignore
from dotenv import load_dotenv # type: ignore
import os
load_dotenv()

# learn more about RAG from here
# https://python.langchain.com/v0.2/docs/tutorials/rag/

google_api_key = os.getenv("GOOGLE_API_KEY")

# Initialize the GoogleGenerativeAI language model
llm = GoogleGenerativeAI(model="gemini-1.5-flash", google_api_key=google_api_key)

if not google_api_key:
  raise ValueError("Google API key not found. Please ensure it is set in your .env file.")

def load_document(file_path: str):
  """Load the document from the specified file path using TextLoader."""
  try:
    return TextLoader(file_path)
  except Exception as e:
    raise FileNotFoundError(f"Error while loading file '{file_path}': {e}")


def create_text_splitter(chunk_size: int = 500, chunk_overlap: int = 100):
  """Create a text splitter with the specified chunk size and overlap."""
  return CharacterTextSplitter(chunk_size=chunk_size, chunk_overlap=chunk_overlap)

def create_embeddings():
  """Create embeddings using the GoogleGenerativeAIEmbeddings model."""
  return GoogleGenerativeAIEmbeddings(model="models/embedding-001")

def create_index(loader, embedding, text_splitter):
  """Create a vector store index with the specified loader, embedding model, and text splitter."""
  index_creator = VectorstoreIndexCreator(embedding=embedding, text_splitter=text_splitter)
  return index_creator.from_loaders([loader])

def query_index(index, llm):
  """Continuously query the index with user input, using the specified LLM."""
  while True:
    try:
      user_input = input("How can I help you today? ").strip()
      if user_input.lower() == 'exit':
        print("Exiting the query session.")
        break

      response = index.query(user_input, llm=llm)
      print(f"\nResponse:\n{response}\n")

    except Exception as e:
      print(f"An error occurred while querying the index: {e}")
      continue


# Step 1 Load the document
loader = load_document("data.txt")

# Step 2 Text splitters (break large Documents into smaller chunk)
text_splitter = create_text_splitter()

# Step 3 Embeddings (convert text into numerical vectors)
embedding = create_embeddings()

# Step 4 Create the vector store index
index = create_index(loader, embedding, text_splitter)

# Start querying the index
query_index(index, llm)