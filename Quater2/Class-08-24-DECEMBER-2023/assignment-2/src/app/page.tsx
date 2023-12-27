import BlogList from "./components/blogList/blogList"

export default function Home() {
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-2xl font-semibold my-4 text-center">Blog App</h1>
      <BlogList />
    </div>
  )
}
