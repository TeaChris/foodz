import { Button } from '@/components/ui/button'
import { pizzas } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface pageProps {
  params: { category: string }
}

const page: FC<pageProps> = ({ params }) => {
  return (
    <div className="flex text-orange-500 flex-wrap">
      {pizzas.map((item) => (
        <Link
          className="w-full h-[60vh] border-r-2 border-b-2 border-orange-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group odd:bg-fuchsia-50"
          href={`/products/${item.id}`}
          key={item.id}
        >
          {item.img && (
            <div className="relative h-[80%]">
              <Image src={item.img} alt="" fill className="object-contain" />
            </div>
          )}
          <div className="flex items-center justify-between font-bold">
            <h1 className="text-2xl uppercase p-2">{item.title}</h1>
            <h2 className="group-hover:hidden text-xl">${item.price}</h2>
            <Button className="hidden group-hover:block bg-orange-500 hover:bg-orange-600">
              Add to Bag
            </Button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default page
