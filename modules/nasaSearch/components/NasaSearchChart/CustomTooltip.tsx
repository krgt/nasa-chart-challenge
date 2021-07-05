import Image from 'next/image'
import { TooltipProps } from "recharts"

const CustomTooltip: React.FC<TooltipProps<string, string>> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return <Image
      alt='Nasa Image'
      src={payload[0].payload.href}
      width='64'
      height='64'
    />
  }
  return null
}

export default CustomTooltip