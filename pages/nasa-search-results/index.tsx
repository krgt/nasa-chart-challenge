import { GetServerSideProps } from 'next'
import DefaultErrorPage from 'next/error'
import ResultsPage from '../../modules/nasaSearch/pages/ResultsPage'
import { getNasaSearch, NasaAsset } from '../../modules/nasaSearch/services/nasaSearchService'

export type NasaSearchResultsProps = {
  nasaAssets: Array<NasaAsset>
  error?: string
}

const NasaSearchResults: React.FC<NasaSearchResultsProps> = ({ nasaAssets, error }) => {
  if (nasaAssets && !error) {
    return <ResultsPage nasaAssets={nasaAssets}/>
  } else {
    return <DefaultErrorPage statusCode={500} />
  }
}

export const getServerSideProps: GetServerSideProps = async context => {
  let nasaAssets: Array<NasaAsset> = []
  let error: string | null = null

  try {
    if (typeof context.query.query === 'string') {
      nasaAssets = await getNasaSearch(context.query.query)
    }

  } catch (err) {
    console.error(err)
    error = 'Internal server error'
  }

  return {
    props: {
      nasaAssets,
      error
    }
  }
}

export default NasaSearchResults