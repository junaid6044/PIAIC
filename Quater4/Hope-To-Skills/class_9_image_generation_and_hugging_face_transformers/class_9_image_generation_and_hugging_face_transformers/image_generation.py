import io
import openai # type: ignore
import requests # type: ignore
import PIL
from PIL import Image

openai.api_key = 'key'

def generate_image(text):
  # Generate the image using OpenAI's DALL-E model
  response = openai.Image.create (
  prompt = text,
  n=1,
  size = "512x512"
  )
  # Get the image URL from the response
  image_url = response.data[0]["url"]
  # Download the image and convert it to a PIL image
  image_content = requests.get(image_url).content
  image = Image.open(io.BytesIO(image_content))
  image.show()


generate_image("pink elephant on the road")