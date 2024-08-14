# Use an official Python runtime as a parent image
FROM python:3.12

LABEL maintainer="muhammadjunaid7015140@gmail.com"
# Set the working directory in the container
WORKDIR /code
# Install system dependencies required for potential Python packages
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Install Poetry
RUN pip install poetry

# Copy the pyproject.toml and poetry.lock files first for dependency installation
COPY pyproject.toml poetry.lock /code/

# Configuration to avoid creating virtual environments inside the Docker container
RUN poetry config virtualenvs.create false

# Install dependencies including development ones
RUN poetry install

# Copy the rest of the code
COPY . /code/

# Make port 8000 available to the world outside this container
EXPOSE 8000

# Run the app. CMD can be overridden when starting the container
CMD ["poetry", "run", "uvicorn", "app.main:app", "--host", "0.0.0.0", "--reload"]
