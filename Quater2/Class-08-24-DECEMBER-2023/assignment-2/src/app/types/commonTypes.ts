export type BlogType = {
    id: string,
    title: string,
    image: File,
    description: string,
    date: string
}

export type BlogTypeWithAction = {
    id: string,
    title: string,
    description: string,
    blogs_arr: any,
    date: string,
    image: File,
    edit: ()=> void,
    delete: ()=> void
}
