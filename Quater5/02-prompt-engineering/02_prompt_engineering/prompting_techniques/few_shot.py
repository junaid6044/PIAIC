from langchain_google_genai import GoogleGenerativeAI
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# Initialize the LLM
llm = GoogleGenerativeAI(
    model="gemini-1.5-flash",
    google_api_key=os.getenv("GOOGLE_API_KEY")
)

user_input = input("Enter the customer support message: ")

# Define the few-shot prompt for ticket urgency classification
few_shot_prompt = f"""
Classify the urgency of the following customer support messages into "urgent", "non-urgent", or "low-priority".

Example 1:
Message: "The system is completely down, and none of our employees can access it!"
Urgency: urgent

Example 2:
Message: "I have a question about the billing cycle for next month."
Urgency: non-urgent

Example 3:
Message: "I noticed a typo in the email notification, but everything else looks fine."
Urgency: low-priority

Now, classify this message:
Message: {user_input}
Urgency:"""

# Invoke the LLM with the few-shot prompt
result = llm.invoke(few_shot_prompt)

# Print the result
print(result)
