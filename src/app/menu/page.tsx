import { Button } from '@/components/ui/button'
import { menu } from '@/data'
import Link from 'next/link'
import { FC } from 'react'

interface MenuPageProps {}

const MenuPage: FC<MenuPageProps> = ({}) => {
  return (
    <main className="w-full h-fit py-8">
      <div className="container mx-auto h-fit lg:h-full grid place-items-center">
        <div className="w-fit h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-4 lg:gap-0 lg:space-y-1">
          {menu.map((category) => (
            <Link
              href={`/menu/${category.slug}`}
              key={category.id}
              className="w-96 p-8 h-72 rounded-sm bg-cover"
              style={{ backgroundImage: `url(${category.img})` }}
            >
              <div className={`text-${category.color} w-[80%]`}>
                <h1 className="uppercase font-bold text-3xl">
                  {category.title}
                </h1>
                <p className="text-sm my-8 font-extrabold">{category.desc}</p>
                <Button
                  className={`hidden 2xl:block bg-${category.color} text-${
                    category.color === 'black' ? 'white' : 'orange-500'
                  }`}
                >
                  Explore
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

export default MenuPage
