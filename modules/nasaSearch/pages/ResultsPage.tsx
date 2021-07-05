import Title from '../../shared/components/Title/Title'
import BasicLayout from '../../shared/containers/BasicLayout/BasicLayout'
import { useRouter } from 'next/router'

export type ResultsPageProps = {
}

const ResultsPage: React.FC<ResultsPageProps> = () => {
  const router = useRouter()

  return (
    <BasicLayout>
      <Title>Results for: {router.query.query}</Title>
    </BasicLayout>
  )
}

export default ResultsPage