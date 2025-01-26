FROM python:3.12

# Maintainer
LABEL maintainer="dev-mian-haroon"
# Set working Drectory in Container
WORKDIR /code

# Install Systeem Dependancies reqiured for Python Packeges or protobuf compiler is also added
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    protobuf-compiler \                            
    && rm -rf /var/lib/apt/lists/*

# Insatll Poetry 
RUN pip install poetry 


# Copy the current directory contents into the container at /code
COPY . /code/

# Configuration to avoid creating virtual environments inside the Docker container
RUN poetry config virtualenvs.create false

# Install project dependencies
RUN poetry install --no-dev

# Make port 8000 available to the world outside this container
EXPOSE 8000

# Run app
CMD [ "poetry","run","dev" ]