"use client"
import React, { useState } from 'react';
import { BlogType } from '../../types/commonTypes';
import BlogModal from '../blogModal/blogModal';
import Card from '../card/card';

const BlogList = () => {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [blog, setBlog] = useState<BlogType>({
    id: '',
    title: '',
    description: '',
    date: '',
    image: new File([], 'default_image.jpg')
  });

  const onOpen = () => {
    setIsOpen(true);
  }
  const onClose = () => {
    setIsOpen(false);
    setBlog({
      id: '',
      title: '',
      description: '',
      date: '',
      image: new File([], 'default_image.jpg')
    })
  }

  const onAddBlog = (blog: BlogType) => {
    setBlogs([...blogs, blog]);
  }

  const onUpdateBlog = (blogRecord: BlogType) => {
    setBlogs(blogs.map((e) => (e.id === blogRecord.id ? blogRecord : e)));
    setBlog({
      id: '',
      title: '',
      description: '',
      date: '',
      image: new File([], 'default_image.jpg')
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

      {
        blogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-11/12 mx-auto">
            {blogs.map((blog) => (
              <Card
                key={blog.id}
                data={{
                  ...blog,
                  blogs_arr: blogs,
                  edit: () => onEditHandler(blog),
                  delete: () => onDeleteHandler(blog),
                }}
              />
            ))}
          </div>
        ) : (
          <div>
            <p>No Blog Available!</p>
          </div>
        )
      }
    </div>
  );
};

export default BlogList;

