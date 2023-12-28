"use client"
import React, { useState } from 'react';
import { CiEdit } from "react-icons/ci";
import Link from 'next/link'
import { MdDeleteOutline } from "react-icons/md";
import { BlogType } from '../../types/commonTypes';
import BlogModal from '../blogModal/blogModal';

const BlogList = () => {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [blog, setBlog] = useState<BlogType>({
    id: '',
    amount: 0,
    category: '',
    note: '',
    date: ''
  });

  const onOpen = () => {
    setIsOpen(true);
  }
  const onClose = () => {
    setIsOpen(false);
    setBlog({
      id: '',
      amount: 0,
      category: '',
      note: '',
      date: ''
    })
  }

  const onAddBlog = (blog: BlogType) => {
    setBlogs([...blogs, blog]);
  }

  const onUpdateBlog = (blogRecord: BlogType) => {
    setBlogs(blogs.map((e) => (e.id === blogRecord.id ? blogRecord : e)));
    setBlog({
      id: '',
      amount: 0,
      category: '',
      note: '',
      date: ''
    })
  }

  const onDeleteHandler = (blog: BlogType) => {
    setBlogs(blogs.filter((e) => e.id !== blog.id));
  }

  const onEditHandler = (blog: BlogType) => {
    setBlog(blog)
    setIsOpen(true);
  }
  return (
    <div className="mt-8">
      <div className='flex justify-between items-center'>
        <h2 className="text-2xl font-semibold my-4">Blog List</h2>
        <button onClick={onOpen} className="bg-transparent hover:bg-teal-800 text-teal-800 font-semibold hover:text-white py-2 px-10 border border-teal-800 hover:border-transparent rounded-full">Add Blog</button>
      </div>
      <BlogModal blog={blog} isOpen={isOpen} onClose={onClose} onAddBlog={onAddBlog} onUpdateBlog={onUpdateBlog} />
      <table className="min-w-full bg-white border border-gray-300 text-center">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Amount</th>
            <th className="py-2 px-4 border-b">Category</th>
            <th className="py-2 px-4 border-b">Note</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            blogs.length > 0 ?
              blogs.map((blog) => (
                <tr key={blog.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{blog.id}</td>
                  <td className="py-2 px-4 border-b">PKR {blog.amount.toFixed(2)}</td>
                  <td className="py-2 px-4 border-b">{blog.category}</td>
                  <td className="py-2 px-4 border-b">{blog.note}</td>
                  <td className="py-2 px-4 border-b">{blog.date && new Date(blog.date).toLocaleDateString()}</td>
                  <td className="py-2 px-4 border-b flex justify-center">
                    <button onClick={() => onEditHandler(blog)} className="flex items-center gap-2 mr-2 bg-transparent hover:bg-blue-800 text-blue-800 font-semibold hover:text-white py-2 px-10 border border-blue-800 hover:border-transparent rounded-full">
                      <CiEdit /> Edit
                    </button>
                    <button onClick={() => onDeleteHandler(blog)} className="flex items-center gap-2 bg-transparent hover:bg-red-800 text-red-800 font-semibold hover:text-white py-2 px-10 border border-red-800 hover:border-transparent rounded-full">
                      <MdDeleteOutline /> Delete
                    </button>
                    <Link href={blog.category}>Blog</Link>
                  </td>
                </tr>
              ))
              :
              <tr>
                <td colSpan={6}>No Blog Available!</td>
              </tr>
            }
        </tbody>
      </table>
    </div>
  );
};

export default BlogList;
