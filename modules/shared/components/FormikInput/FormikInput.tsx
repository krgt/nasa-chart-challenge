import styled from 'styled-components'
import { useField } from 'formik'

const Input = styled.input`
  color: black;
`

export type FormikInputProps = {
  name: string
  label: string
}

const FormikInput: React.FC<FormikInputProps> = (props) => {
  const [field, meta] = useField(props.name);
  return (
    <>
      <Input
        type='text'
        aria-label={props.label}
        {...field}
        {...props}
       />
      {meta.touched && meta.error
        ? (<div className="error">{meta.error}</div>)
        : null
      }
    </>
  )
}

export default FormikInput