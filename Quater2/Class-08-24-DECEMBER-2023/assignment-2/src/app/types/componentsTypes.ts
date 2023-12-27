import { BlogType } from "./commonTypes"

export type BlogModalProps = {
    isOpen: boolean,
    onClose: ()=> void,
    blog: BlogType
    onAddBlog: (blog:BlogType)=> void
    onUpdateBlog: (blog:BlogType)=> void
}