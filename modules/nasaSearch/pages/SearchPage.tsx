import Title from '../../shared/components/Title/Title'
import BasicLayout from '../../shared/containers/BasicLayout/BasicLayout'
import NasaSearchForm from '../components/NasaSearchForm/NasaSearchForm'

export default function SearchPage() {
  return (
    <BasicLayout>
      <Title>NASA Search</Title>
      <NasaSearchForm/>
    </BasicLayout>
  )
}
