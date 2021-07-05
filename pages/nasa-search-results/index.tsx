import { GetServerSideProps } from 'next'
import ResultsPage from '../../modules/nasaSearch/pages/ResultsPage'
import { getNasaSearch } from '../../modules/nasaSearch/services/nasaSearchService'

export type NasaSearchResultsProps = {
}

const NasaSearchResults: React.FC<NasaSearchResultsProps> = () => {
  return (
    <ResultsPage/>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  if (typeof context.query.query === 'string') {
    const nasaAssets = await getNasaSearch(context.query.query)
    console.log(nasaAssets)
  }
  return {
    props: {
    }
  }
}

export default NasaSearchResults