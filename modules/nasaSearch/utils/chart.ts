import { NasaAsset } from "../services/nasaSearchService";
import { format, differenceInDays } from 'date-fns'

export function formatChartData(assets: Array<NasaAsset>) {
  return assets.map(asset => ({
    ...asset,
    date: format(new Date(asset.date), 'MM/dd/yyyy'),
    numberOfImages: asset.href === '' ? 0 : 1
  }))
}