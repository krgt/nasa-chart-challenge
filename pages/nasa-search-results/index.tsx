import { GetServerSideProps } from 'next'
import ResultsPage from '../../modules/nasaSearch/pages/ResultsPage'
import axios from 'axios'

export type NasaSearchResultsProps = {
}

const NasaSearchResults: React.FC<NasaSearchResultsProps> = () => {
  return (
    <ResultsPage/>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const response = await axios.get(`https://images-api.nasa.gov/search?&media_type=image&q=${context.query.query}`)
  console.log(response.data)
  return {
    props: {
    }
  }
}

export default NasaSearchResults