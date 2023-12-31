export type InputProps = {
  inputType: string,
  placeholder: string,
  name: string,
  id: string,
  autoComplete?: string,
  required?: boolean,
  fun: (e:any) => void
}


export type contactTypes = {
  name: string,
  email: string,
  phone: number | null,
  message: string

}