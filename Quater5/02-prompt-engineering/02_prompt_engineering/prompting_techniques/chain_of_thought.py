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

# Define the Chain-of-Thought prompt
cot_prompt = """
Solve the following real-world project management problem step by step:

Problem: A development team is tasked with building a mobile app. The app has three main features:
1. User authentication: Estimated to take 10 hours.
2. Profile management: Estimated to take 15 hours.
3. Notifications: Estimated to take 5 hours.

The team consists of 3 developers who work 8 hours per day. How many days will it take to complete the project?

Step 1: Calculate the total estimated time for all features.
- User authentication: 10 hours
- Profile management: 15 hours
- Notifications: 5 hours
- Total estimated time = 10 + 15 + 5 = 30 hours

Step 2: Calculate the total hours available per day for the team.
- Number of developers: 3
- Hours worked per day by each developer: 8
- Total hours available per day = 3 * 8 = 24 hours

Step 3: Calculate the number of days required to complete the project.
- Total estimated time: 30 hours
- Total hours available per day: 24 hours
- Days required = Total estimated time / Total hours available per day
- Days required = 30 / 24 ≈ 1.25 days

Final Answer: The team will need approximately 1.25 days to complete the project.
"""

# Invoke the LLM with the Chain-of-Thought prompt
result = llm.invoke(cot_prompt)

# Print the result
print(result)
