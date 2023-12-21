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


export type contactTypes = {
  firstName: string,
  lastName: string,
  email: string,
  age: number,
  phone: number | null,
  message: string,
  createdOn: string
}