import { Formik, Form, FormikProps } from "formik";
import FormikInput from "../../../shared/components/FormikInput/FormikInput"
import { useRouter } from 'next/router'
import config from "../../../shared/config/config";

const { routePaths } = config

const NasaSearchForm: React.FC = () => {
  const router = useRouter()

  return (
    <Formik
      initialValues={{
        query: ''
      }}
      onSubmit={(values) => {
        router.push(`${routePaths.nasaSearchResults}?query=${values.query}`)
      }}
    >
      {() => (
        <Form>
          <FormikInput name='query' label='Query Text'/>
        </Form>
      )}
    </Formik>
  )
}

export default NasaSearchForm