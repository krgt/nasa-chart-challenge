import { GetServerSideProps } from 'next'
import DefaultErrorPage from 'next/error'
import ResultsPage from '../../modules/nasaSearch/pages/ResultsPage'
import { getNasaSearch, NasaAsset } from '../../modules/nasaSearch/services/nasaSearchService'

export type NasaSearchResultsProps = {
  nasaAssets?: Array<NasaAsset>
}

const NasaSearchResults: React.FC<NasaSearchResultsProps> = ({ nasaAssets }) => {
  if (nasaAssets) {
    return <ResultsPage nasaAssets={nasaAssets}/>
  } else {
    return <DefaultErrorPage statusCode={500} />
  }
}

export const getServerSideProps: GetServerSideProps = async context => {
  let nasaAssets: Array<NasaAsset> = []
  if (typeof context.query.query === 'string') {
    nasaAssets = await getNasaSearch(context.query.query)
  }

  return {
    props: {
      nasaAssets
    }
  }
}

export default NasaSearchResults