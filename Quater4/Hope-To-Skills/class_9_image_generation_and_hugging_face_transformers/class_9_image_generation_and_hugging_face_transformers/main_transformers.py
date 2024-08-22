import transformers # type: ignore
from transformers import pipeline


pipe = pipeline("text-classification")
pipe("The sky is blue which looks absolutely magical")
