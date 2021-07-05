import Title from '../../shared/components/Title/Title'
import BasicLayout from '../../shared/containers/BasicLayout/BasicLayout'
import NasaSearchChart from '../components/NasaSearchChart/NasaSearchChart'
import { useRouter } from 'next/router'
import { NasaAsset } from '../services/nasaSearchService'
import { formatChartData } from '../utils/chart'

export type ResultsPageProps = {
  nasaAssets: Array<NasaAsset>
}

const ResultsPage: React.FC<ResultsPageProps> = ({ nasaAssets }) => {
  const router = useRouter()

  const chartData = formatChartData(nasaAssets)

  return (
    <BasicLayout>
      <Title>Results for: {router.query.query}</Title>
      <NasaSearchChart data={chartData}/>
    </BasicLayout>
  )
}

export default ResultsPage