from fastapi import FastAPI
import uvicorn

app = FastAPI()

students = [
  {
    "rollNo": "2342",
    "name": "Muhammad Junaid",
    "age": "16",
    "grade":"10th",
  },
  {
    "rollNo": "9213",
    "name": "Muhammad Ahmad",
    "age": "18",
    "grade":"12th",
  }
]

@app.get("/students")
def get_students():
  return students

@app.post("/students")
def add_student(name: str, rollNo: str, age: str, grade:str):
  global students
  students.append({"name":name, "rollNo":rollNo, "age": age, "grade":grade})
  return students

@app.get("/students/{rollNo}")
def get_student(rollNo: str):
  for student in students:
    if student["rollNo"] == rollNo:
      return student
  return {"error": "Student not found"}


@app.put("/students/{rollNo}")
def update_student(name: str, rollNo: str, age: str, grade:str):
  updated_student = None
  for student in students:
    if student["rollNo"] == rollNo:
      student["name"] = name
      student["age"] = age
      student["grade"] = grade
      updated_student = student
      break
  
  if updated_student is None:
    return {"error": "Student not found"}

  return {"updated_student": updated_student, "students": students}

@app.delete("/students/{rollNo}")
def delete_student(rollNo: str):
  global students
  students = [student for student in students if student["rollNo"] != rollNo]
  return {"message": "Student deleted successfully", "students": students}


def start():
  uvicorn.run("student_app.main:app", host="127.0.0.1", port=8080, reload=True)

