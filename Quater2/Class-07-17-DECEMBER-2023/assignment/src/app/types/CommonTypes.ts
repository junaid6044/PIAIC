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
  fatherName: string,
  education: string,
  email: string,
  age: number,
  phone: number,
  cnic: string,
  country: string,
  address: string,
  message: string,
  createdOn: Date
}
