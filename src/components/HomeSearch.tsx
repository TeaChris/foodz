import Image from 'next/image'
import { FC } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

interface HomeSearchProps {}

const HomeSearch: FC<HomeSearchProps> = ({}) => {
  return (
    <section className="w-full h-28 grid place-items-center mt-20 bg-orange-400">
      <div className="w-[60%] mx-auto flex items-center gap-4">
        <h5 className="text-white text-bold text-lg">Search by Restaurant</h5>
        <Image
          src="/icons/resturant.svg"
          alt="restaurant"
          width={20}
          height={20}
        />
        <div className="w-[30rem]">
          <Input
            type="search"
            placeholder="Enter item or restaurant you are looking for"
          />
        </div>
        <Button>Get Started</Button>
      </div>
    </section>
  )
}

export default HomeSearch
