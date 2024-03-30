# FastAPI Student Management App

## Overview
This repository contains a FastAPI application for managing a global list of students in memory. The objective of this assignment is to create a RESTful API using FastAPI to perform CRUD operations on student data.

## Functionality
- Create a global list of students stored in memory.
- Implement CRUD operations (Create, Read, Update, Delete) for students:
    - `GET /`: Retrieve Owner Detail.
    - `GET /students`: Retrieve all students.
    - `GET /students/{student_id}`: Retrieve specific student details.
    - `POST /students`: Add a new student.
    - `PUT /students/{student_id}`: Update a student's details.
    - `DELETE /students/{student_id}`: Delete a student.

## Technology Stack
- Python
- FastAPI

## Student Data Schema
Each student object should have the following attributes:
- Student ID (unique)
- Name
- Age
- Grade/Class

## Setup Instructions

### Prerequisites
- Python 3.7 or higher
- Poetry package manager

### Steps

1. **Install project dependencies using Poetry:**
    ```bash
    poetry install
    ```

2. **Run the FastAPI application:**
    ```bash
    poetry run dev
    ```

3. **Access the API documentation:**
    Once the application is running, you can access the API documentation by visiting [http://localhost:8080/docs](http://localhost:8080/docs) in your web browser. This interactive documentation is generated automatically by FastAPI and provides details about the available endpoints, request/response schemas, and allows you to test the API endpoints directly from the browser.
