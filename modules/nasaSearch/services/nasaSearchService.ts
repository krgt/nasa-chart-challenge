import axios from "axios"
import config from "../../shared/config/config"
import { format, differenceInDays } from 'date-fns'

type NasaSearchResultLinks = {
  render: string
  href: string
}

type NasaSearchResultData = {
  date_created: string
}

type NasaSearchResultItem = {
  data: Array<NasaSearchResultData>
  links: Array<NasaSearchResultLinks>
}

type NasaSearchResultCollection = {
  items: Array<NasaSearchResultItem>
}

type NasaSearchResult = {
  collection: NasaSearchResultCollection
}

export type NasaAsset = {
  date: Date
  href: string
}

export async function getNasaSearch(query: string): Promise<Array<NasaAsset>> {
  const response = await axios.get<NasaSearchResult>(`${config.apiPaths.nasaApi}?media_type=image&q=${query}`)
  const assetsDictionary: {[id: string]: NasaAsset} = {}

  // Use dictionary to guarantee uniqueness
  response.data.collection.items.forEach(item => {
    const date = new Date(item.data[0].date_created)
    const dateString = format(new Date(item.data[0].date_created), 'MM/dd/yyyy')
    assetsDictionary[dateString] = {
      date: date,
      href: item.links[0].href
    }
  })

  // map dictionary to array and sort it
  return Object.keys(assetsDictionary)
    .map(key => assetsDictionary[key])
    .sort((assetA, assetB) => {
      return differenceInDays(assetA.date, assetB.date)
    })
}