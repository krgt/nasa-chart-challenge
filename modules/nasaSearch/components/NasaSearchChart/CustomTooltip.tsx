import Image from 'next/image'
import { TooltipProps } from "recharts"

const CustomTooltip: React.FC<TooltipProps<string, string>> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return <Image
      alt='Nasa Image'
      src={payload[0].payload.href}
      width='128'
      height='128'
      placeholder='blur'
      blurDataURL='/shimmer.svg'
    />
  }
  return null
}

export default CustomTooltip