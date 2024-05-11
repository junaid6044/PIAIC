"use client"
import { useEffect, useState } from 'react'
import * as yup from "yup"
import DisplayTodo from "../components/displayTodo"
import { User, todoTypes } from '../types/CommonTypes'

export default function Todos() {

  const todoSchema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
  })

  const [todo, setTodo] = useState<todoTypes>({
    title: "",
    description: "",
    is_completed: false,
    user_id: 0
  })

  const [todoList, setTodoList] = useState<todoTypes[]>([])
  const [errors, setError] = useState<string[]>([])
  const [userData, setUserData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch user data from your localhost
    const fetchUserData = async () => {
      try {
        // Fetch users from your localhost
        const response = await fetch('http://localhost:8000/users');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setUserData(data); // Save fetched user data to state
        setLoading(false);
      } catch (error: any) {
        console.error('Error fetching user data:', error.message);
        setLoading(false);
      }
    };

    // Call the fetchUserData function
    fetchUserData();
  }, []);

  useEffect(() => {
    // Function to fetch user data from your localhost
    const fetchTodosData = async () => {
      try {
        // Fetch todos from your localhost
        const response = await fetch('http://localhost:8000/todos');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setTodoList(data);
      } catch (error: any) {
        console.error('Error fetching user data:', error.message);
      }
    };

    // Call the fetchUserData function
    fetchTodosData();
  }, []);

  const addTodo = async () => {
    try {
      const result = await todoSchema.validate(todo)
      if (!result) {
        return
      }

      setError([])
      let newTodoList: todoTypes[] = [...todoList, todo];
      setTodoList(newTodoList);
      const response = await fetch('http://localhost:8000/create_todo', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo)
      });
      setTodo({
        title: "",
        description: "",
        is_completed: false,
        user_id: 0
      })
    }
    catch (err: any) {
      setError(err.errors)
    }
  }

  // const onChange = (e: any) => {

  //   setTodo(
  //     {
  //       ...todo,
  //       [e.target.name]: e.target.value
  //     }
  //   )
  //   console.log(todo)
  // }
  const onChange = (e: any) => {
    // console.log("e", typeof e.target.value);
    // console.log("type", e.target.type);
    // console.log("check type", e.type == 'change');
    if (e.target.type === 'checkbox') {
      setTodo({
        ...todo,
        [e.target.name]: e.target.checked
      });
    } else {
      setTodo({
        ...todo,
        [e.target.name]: e.target.type == 'select-one' ? parseInt(e.target.value) : e.target.value
      });
    }
    console.log(todo);
  };
  return (
    <div className=" text-3xl">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 
					mx-auto flex flex-wrap items-center">

          <div className="mb-5 rounded-lg p-8 flex flex-col 
						md:ml-auto w-full mt-10 md:mt-0 bg-slate-100 ">
            <h2 className="text-gray-900 text-lg 
							font-medium title-font mb-5">
              Add a Todo
            </h2>
            <div className="relative mb-4">
              <label htmlFor="title"
                className="leading-7 text-sm 
									text-gray-600">
                Title
              </label>
              <input onChange={onChange} value={todo.title}
                type="text" id="title" name="title"
                className="w-full bg-white rounded border border-gray-300
								focus:border-green-800 focus:ring-2 
								focus:ring-green-200 text-base outline-none
								text-gray-700 py-1 px-3
							  leading-8 transition-colors duration-200 ease-in-out"
                autoComplete='false' />
            </div>
            <div className="relative mb-4">
              <label htmlFor="description" className="leading-7 text-sm text-gray-600">
              Description</label>
              <input onChange={onChange} value={todo.description}
                type="text" id="description" name="description"
                className="w-full bg-white rounded border 
								border-gray-300 focus:border-green-800
							focus:ring-2 focus:ring-green-200 text-base 
							outline-none text-gray-700 py-1 px-3
							leading-8 transition-colors duration-200 ease-in-out" autoComplete='false' />
            </div>
            <div className="relative mb-4">
              <label htmlFor="is_completed" className="mr-2 mb-2 text-sm font-medium text-gray-900 dark:text-white">Completed</label>
              <input
                onChange={onChange}
                checked={todo.is_completed}
                type="checkbox"
                id="is_completed"
                name="is_completed"
                className="mr-2"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="user_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
              <select
                id="user_id"
                name="user_id"
                value={loading ? "" : todo.user_id}
                onChange={onChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                disabled={loading} // Disable select while loading
              >
                <option disabled value="">Please Select a User</option>
                {userData.map((user) => (
                  <option key={user.id} value={user.id}>{user.name}</option>
                ))}
              </select>
            </div>

            <button onClick={addTodo} className="text-white 
						bg-green-800 border-0 py-2 px-8
						focus:outline-none w-fit hover:bg-green-600
						rounded text-lg">Add Todo</button>

          </div>
          <DisplayTodo todoData={todoList} />
        </div>
      </section>
    </div>
  )
}
