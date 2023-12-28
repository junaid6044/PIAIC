"use client"
import { BlogType } from '../../types/commonTypes';
import { BlogModalProps } from '../../types/componentsTypes';
import * as yup from "yup"
import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const BlogModal = ({ isOpen, onClose, onAddBlog, onUpdateBlog, blog }: BlogModalProps) => {

	const blogSchema = yup.object().shape({
		date: yup.string().required(),
		note: yup.string().required(),
		category: yup.string().required(),
		amount: yup.number().required().positive().integer(),
		id: yup.string(),
	})

	const [blogDetail, setBlogDetail] = useState<BlogType>({
		id: "",
		amount: 0,
		category: "",
		note: "",
		date: "",
	})

	useEffect(() => {
    setBlogDetail(blog.id ? blog : { id: "", amount: 0, category: "", note: "", date: "" });
  }, [blog]);

	const [amount, setAmount] = useState<number>(0);
	const [category, setCategory] = useState<string>('');
	const [note, setNote] = useState<string>('');
	const [date, setDate] = useState<string>('');
	const [errors, setError] = useState<string[]>([]);

	const categories = ['Groceries', 'Rent', 'Utilities', 'Entertainment', 'Online Purchases', 'Other'];

	{/* class code start */}
	// const handleUpdateBlog = () => {
	// 	const updateBlog: BlogType = {
	// 		id: blog.id,
	// 		amount: amount || blog.amount,
	// 		category: category || blog.category,
	// 		note: note || blog.note,
	// 		date: date || blog.date,
	// 	};

	// 	onUpdateBlog(updateBlog);
	// 	setAmount(0);
	// 	setCategory('');
	// 	setDate('');
	// 	setNote('');
	// 	onClose();
	// }
	{/* class code end */}
	const handleUpdateBlog = async () => {
		try {
			const result = await blogSchema.validate(blogDetail);
			if (!result) {
				return;
			}
	
			setError([]);
			const updateBlog: BlogType = {
				id: blog.id,
				amount: blogDetail.amount,
				category: blogDetail.category,
				note: blogDetail.note,
				date: blogDetail.date,
			};
	
			onUpdateBlog(updateBlog);

			setBlogDetail({ id: "", amount: 0, category: "", note: "", date: "" });
			onClose();
		} catch (err: any) {
			setError(err.errors);
		}
	};

	{/* class code start */}
	// const handleAddBlog = async () => {
	// 	// const newBlog: BlogType = {
	// 	// 	id: `${Date.now()}`,
	// 	// 	amount: amount,
	// 	// 	category,
	// 	// 	note,
	// 	// 	date,
	// 	// };

	// 	// onAddBlog(newBlog);
	// 	// setAmount(0);
	// 	// setCategory('');
	// 	// setDate('');
	// 	// setNote('');
	// 	// onClose();

	// 	try {
	// 		const result = await blogSchema.validate(blogDetail)
	// 		if (!result) {
	// 			return
	// 		}

	// 		setError([])
	// 		const newBlog: BlogType = {
	// 			id: `${Date.now()}`,
	// 			amount: amount,
	// 			category,
	// 			note,
	// 			date,
	// 		};

	// 		onAddBlog(newBlog);
	// 		setAmount(0);
	// 		setCategory('');
	// 		setDate('');
	// 		setNote('');
	// 		onClose();
	// 	}
	// 	catch (err: any) {
	// 		setError(err.errors)
	// 		console.log("Errors are",err.errors)
	// 	}
	// };
	{/* class code end */}

	const handleAddBlog = async () => {
		try {
			const result = await blogSchema.validate(blogDetail);
			if (!result) {
				return;
			}
	
			setError([]);
			const newBlog: BlogType = {
				id: `${Date.now()}`,
				amount: blogDetail.amount,
				category: blogDetail.category,
				note: blogDetail.note,
				date: blogDetail.date,
			};
	
			onAddBlog(newBlog);
      setBlogDetail({ id: "", amount: 0, category: "", note: "", date: "" });
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


						<label className="block text-gray-600 text-sm mb-2" htmlFor="amount">
							Amount
						</label>
						{/* class code start */}
						{/* <input
							type="number"
							id="amount"
							value={amount || blog.amount}
							onChange={(e) => setAmount(parseFloat(e.target.value))}
							className="w-full border p-2 mb-2 rounded-3xl"
						/> */}
						{/* class code end */}
						<input
							type="number"
							id="amount"
							value={blogDetail.amount}
							onChange={(e) => setBlogDetail({ ...blogDetail, amount: parseFloat(e.target.value) })}
							className="w-full border p-2 mb-2 rounded-3xl"
						/>

						<label className="block text-gray-600 text-sm mb-2" htmlFor="category">
							Category
						</label>

						{/* class code start */}
						{/* <select
							id="category"
							value={category || blog.category}
							onChange={(e) => setCategory(e.target.value)}
							className="w-full border p-2 mb-2 rounded-3xl"
						>
							<option value="" disabled>Select a category</option>
							{categories.map((cat) => (
								<option key={cat} value={cat}>
									{cat}
								</option>
							))}
						</select> */}
						{/* class code end */}

						<select
							id="category"
							value={blogDetail.category}
							onChange={(e) => setBlogDetail({ ...blogDetail, category: e.target.value })}
							className="w-full border p-2 mb-2 rounded-3xl"
						>
							<option value="" disabled>Select a category</option>
							{categories.map((cat) => (
								<option key={cat} value={cat}>
									{cat}
								</option>
							))}
						</select>

						<label className="block text-gray-600 text-sm mb-2" htmlFor="note">
							Note
						</label>
						{/* class code start */}
						{/* <textarea
							id="note"
							value={note || blog.note}
							onChange={(e) => setNote(e.target.value)}
							className="w-full border p-2 mb-2 rounded-xl"
						/> */}
						{/* class code end */}

						<textarea
							id="note"
							value={blogDetail.note}
							onChange={(e) => setBlogDetail({ ...blogDetail, note: e.target.value })}
							className="w-full border p-2 mb-2 rounded-xl"
						/>

						<label className="block text-gray-600 text-sm mb-2" htmlFor="date">
							Date
						</label>
						{/* class code start */}
						{/* <input
							type="date"
							id="date"
							value={date || blog.date}
							onChange={(e) => setDate(e.target.value)}
							className="w-full border p-2 mb-4 rounded-3xl"
						/> */}
						{/* class code end */}

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