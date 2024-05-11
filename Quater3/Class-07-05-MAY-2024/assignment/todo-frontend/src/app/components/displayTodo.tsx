import React, { useState, useEffect } from 'react';
import { todoTypes } from '../types/CommonTypes';

export default function DisplayTodo(props: { todoData: todoTypes[] }) {
  const [userNames, setUserNames] = useState<any>({});

  useEffect(() => {
    // Function to fetch user names
    const fetchUserNames = async () => {
      const userIds = props.todoData.map(item => item.user_id);
      const userNamesData = await Promise.all(
        userIds.map(async userId => {
          const response = await fetch(`http://localhost:8000/get_user/${userId}`);
          const userData = await response.json();
          return { [userId]: userData.name }; // Assuming the response has a 'name' field for user name
        })
      );
      const userNamesObject = Object.assign({}, ...userNamesData);
      setUserNames(userNamesObject);
    };

    fetchUserNames();
  }, [props.todoData]);

  const handleDeleteTodo = async (todoId: any) => {
    console.log("todoId",todoId)
    try {
      const response = await fetch(`http://localhost:8000/delete_todo/${todoId}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        // Remove the deleted todo from the UI
        // props.setTodoData(prevTodoData => prevTodoData.filter(todo => todo.id !== todoId));
      } else {
        // Handle error response
        console.error('Failed to delete todo');
      }
    } catch (error) {
      console.error('Failed to delete todo:', error);
    }
  };

  return (
    <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden mb-8">
      <table className="min-w-full leading-normal">
        <thead>
          <tr className="bg-gray-300">
            <th className="px-5 py-6 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Title
            </th>
            <th className="px-5 py-6 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Description
            </th>
            <th className="px-5 py-6 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              is completed
            </th>
            <th className="px-5 py-6 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              User
            </th>
            <th className="px-5 py-6 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {props.todoData.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <tr className={"bg-gray-100"}>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{item.title}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{item.description}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{item.is_completed ? "True" : "False"}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{userNames[item.user_id]}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm">
                    <button onClick={() => handleDeleteTodo(item.id)} className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>Delete</button>
                  </td>
                </tr>
              </React.Fragment>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
