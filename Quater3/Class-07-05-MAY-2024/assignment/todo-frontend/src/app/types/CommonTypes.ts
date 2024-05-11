export type InputProps = {
  inputType: string,
  placeholder: string,
  name: string,
  id: string,
  value: any,
  autoComplete?: string,
  required?: boolean,
  fun: (e:any) => void
}

export type userTypes = {
  name: string,
  email: string,
  phone: number
}


export type todoTypes = {
  id?: any,
  title: string,
  description: string,
  is_completed: boolean,
  user_id: number
}


export type User = {
  id: number,
  name: string,
  email: string,
  phone: string,
  created_at: string
}