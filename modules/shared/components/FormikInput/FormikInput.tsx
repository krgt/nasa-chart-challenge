import styled from 'styled-components'
import { useField } from 'formik'

const Input = styled.input`
  color: black;
`

export type FormikInputProps = {
  name: string
}

const FormikInput: React.FC<FormikInputProps> = (props) => {
  const [field, meta] = useField(props.name);
  return (
    <>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
}