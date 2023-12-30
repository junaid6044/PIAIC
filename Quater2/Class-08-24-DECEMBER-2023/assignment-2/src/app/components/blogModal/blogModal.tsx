"use client"
import { BlogType } from '../../types/commonTypes';
import { BlogModalProps } from '../../types/componentsTypes';
import * as yup from "yup"
import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const BlogModal = ({ isOpen, onClose, onAddBlog, onUpdateBlog, blog }: BlogModalProps) => {

	const blogSchema = yup.object().shape({
		date: yup.string().required(),
		description: yup.string().required(),
		title: yup.string().required(),
		id: yup.string(),
	})

	const [blogDetail, setBlogDetail] = useState<BlogType>({
		id: "",
		title: "",
		description: "",
		date: "",
		image: new File([], 'default_image.jpg')
	})

	useEffect(() => {
		setBlogDetail((blog.id ? blog : { id: "", title: "", description: "", date: "" }) as BlogType);
	}, [blog]);

	const [errors, setError] = useState<string[]>([]);
	const categories = ['Groceries', 'Rent', 'Utilities', 'Entertainment', 'Online Purchases', 'Other'];

	const handleUpdateBlog = async () => {
		try {
			const result = await blogSchema.validate(blogDetail);
			if (!result) {
				return;
			}

			setError([]);
			const updateBlog: BlogType = {
				id: blog.id,
				title: blogDetail.title,
				description: blogDetail.description,
				date: blogDetail.date,
				image: blogDetail.image
			};

			onUpdateBlog(updateBlog);

			setBlogDetail({ id: "", title: "", description: "", date: "", image: new File([], 'default_image.jpg') });
			onClose();
		} catch (err: any) {
			setError(err.errors);
		}
	};

	const handleImageChange = (e:any) => {
		const selectedImage = e.target.files[0];
		setBlogDetail({ ...blogDetail, image: selectedImage });
	};

	const handleAddBlog = async () => {
		try {
			const result = await blogSchema.validate(blogDetail);
			if (!result) {
				return;
			}

			setError([]);
			const newBlog: BlogType = {
				id: `${Date.now()}`,
				title: blogDetail.title,
				description: blogDetail.description,
				date: blogDetail.date,
				image: blogDetail.image
			};

			onAddBlog(newBlog);
			setBlogDetail({ id: "", title: "", description: "", date: "", image: new File([], 'default_image.jpg') });
			onClose();
		} catch (err: any) {
			setError(err.errors);
		}
	};
	const buttonClickHandler = blog.id !== '' ? handleUpdateBlog : handleAddBlog;
	const buttonText = blog.id !== '' ? 'Update Blog' : 'Add Blog';

	return (
		<div className={`modal ${isOpen ? 'block' : 'hidden'}`}>
			<div className="modal-overlay absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-80">
				<div className="modal-container bg-white w-96 mx-auto mt-20 p-6 rounded shadow-lg">
					<div className="mb-4">
						<div className='flex justify-between'>
							<h3 className="text-2xl font-semibold mb-2">Add Blog</h3>
							<button onClick={onClose}>
								<FaTimes className="text-2xl text-red-500 hover:text-teal-700 cursor-pointer" />
							</button>
						</div>

						<label className="block text-gray-600 text-sm mb-2" htmlFor="title">
							Title
						</label>

						<input
							type="text"
							id="title"
							value={blogDetail.title}
							onChange={(e) => setBlogDetail({ ...blogDetail, title: e.target.value })}
							className="w-full border p-2 mb-2 rounded-3xl"
						/>

						<label className="block text-gray-600 text-sm mb-2" htmlFor="image">
							Image
						</label>
						<input
							type="file"
							id="image"
							onChange={(e) => handleImageChange(e)}
							className="mb-2"
						/>

						<label className="block text-gray-600 text-sm mb-2" htmlFor="description">
							Description
						</label>

						<textarea
							id="description"
							value={blogDetail.description}
							onChange={(e) => setBlogDetail({ ...blogDetail, description: e.target.value })}
							className="w-full border p-2 mb-2 rounded-xl"
						/>

						<label className="block text-gray-600 text-sm mb-2" htmlFor="date">
							Date
						</label>

						<input
							type="date"
							id="date"
							value={blogDetail.date}
							onChange={(e) => setBlogDetail({ ...blogDetail, date: e.target.value })}
							className="w-full border p-2 mb-4 rounded-3xl"
						/>
					</div>

					<div>
						{errors.map((item, index) => {
							return (
								<React.Fragment key={index}>
									<div style={{ color: "red" }}>
										<h1>{item}</h1>
									</div>
								</React.Fragment>
							)
						})}
					</div>

					<div className="flex justify-end">
						<button
							onClick={buttonClickHandler}
							className="bg-transparent hover:bg-blue-800 text-blue-800 font-semibold hover:text-white py-2 px-10 border border-blue-800 hover:border-transparent rounded-full"
						>
							{buttonText}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogModal;