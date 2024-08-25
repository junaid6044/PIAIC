from langchain_google_genai import GoogleGenerativeAI # type: ignore
from langchain.prompts import PromptTemplate # type: ignore
from dotenv import load_dotenv # type: ignore
import os

# Load environment variables from a .env file
load_dotenv()


# get google gemini api key from
# https://aistudio.google.com/app/apikey


# Fetch the Google Gemini API key from environment variables
google_api_key = os.getenv("GOOGLE_API_KEY")
if not google_api_key:
    raise ValueError("Google API key not found. Please set it in your .env file.")

# Initialize the GoogleGenerativeAI model with the appropriate API key
llm = GoogleGenerativeAI(model="gemini-1.5-flash", google_api_key=google_api_key)

# Define a prompt template for generating the story
story_template = PromptTemplate(
    template="Create a story about {context}",
    input_variables=["context"]
)

# Chain the prompt template with the LLM to create a response generator
story_generator = story_template | llm

def generate_story():
    """Continuously prompt the user for story contexts and generate stories."""
    while True:
        try:
            user_input = input("Enter your story prompt (or 'exit' to quit): ").strip()
            if user_input.lower() == 'exit':
                print("Exiting the story generator.")
                break

            # Generate the story based on the user's input
            ai_response = story_generator.invoke({"context": user_input})
            print(f"\nStory:\n{ai_response}\n")

        except Exception as e:
            print(f"An error occurred: {e}")
            continue


generate_story()
