import Image from 'next/image'
import Balancer from 'react-wrap-balancer'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Recommended from '@/components/Recommended'
import HomeSearch from '@/components/HomeSearch'
import { mind } from '@/data'
import Personalised from '@/components/Personalised'

export default function Home() {
  return (
    <main className="w-full h-full">
      <header className="w-full h-fit lg:h-[40rem] py-2 pl-28 bg-transparent">
        <div className="w-ful h-full flex flex-col lg:flex-row items-center gap-4 lg:gap-0 lg:justify-between relative">
          {/* left */}
          <div className="w-full lg:w-[50%] h-fit flex flex-col items-start gap-8 z-50 bg-transparent">
            <div className="w-full flex flex-col items-start gap-4">
              <h2 className="text-3xl lg:text-6xl font-bold tracking-widest">
                Premium <span className="text-orange-500">Quality</span>
              </h2>
              <div className="w-full flex items-center gap-1">
                <h2 className="text-3xl lg:text-5xl font-bold">
                  Food for your
                </h2>
                <Image
                  src="/icons/banana.svg"
                  alt="banana"
                  width={80}
                  height={40}
                />
                <h2 className="text-orange-500 text-3xl lg:text-6xl font-bold">
                  healthy
                </h2>
              </div>
              <div className="w-full flex items-start gap-2">
                <Image
                  src="/icons/apple.svg"
                  alt="banana"
                  width={80}
                  height={40}
                />
                <h2 className="text-orange-500 text-6xl lg:text-5xl font-bold">
                  & daily life
                </h2>
              </div>
            </div>

            <p>
              <Balancer>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Mollitia natus adipisci minus fuga praesentium alias,
                consequuntur, deserunt iure quibusdam deleniti quod veniam qui
                aliquid! Repellat officia tempore quis veritatis modi
                laudantium.
              </Balancer>
            </p>
            <div className="w-full items-center flex justify-between">
              <div className="w-4/5">
                <Input
                  disabled
                  type="text"
                  placeholder="Enter your delivery location"
                />
              </div>

              <Link
                href="/"
                className={cn(
                  buttonVariants({ variant: 'default' }),
                  'self-start'
                )}
              >
                Get started
              </Link>
            </div>

            <div className="w-full flex flex-col items-start gap-8">
              <h5 className="text-2xl font-bold">Popular cities in Nigeria</h5>
              <div className="w-full flex items-center gap-8">
                <span className="text-lg font-bold odd:text-black even:text-orange-500">
                  Ikeja
                </span>
                <span className="text-lg font-bold odd:text-black even:text-orange-500">
                  Iwo-road
                </span>
                <span className="text-lg font-bold odd:text-black even:text-orange-500">
                  Abeokuta
                </span>
                <span className="text-lg font-bold odd:text-black even:text-orange-500">
                  Wuse
                </span>
                <span className="text-lg font-bold odd:text-black even:text-orange-500">
                  Onitsha
                </span>
                <span className="text-lg font-bold odd:text-black even:text-orange-500">
                  Sango
                </span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[45%] h-full grid place-items-start items-center">
            <div className="w-fit flex items-center gap-8">
              <Image
                src="/images/h1.svg"
                alt="food 1"
                width={350}
                height={550}
              />
              <Image
                src="/images/h2.png"
                alt="food 1"
                width={250}
                height={400}
              />
            </div>
          </div>

          <div className="w-96 h-48 bg-orange-200 rounded-[9rem] top-36 -left-[22rem] -rotate-45 absolute"></div>
          <div className="w-96 h-48 border-10 border-orange-400 rounded-[9rem] absolute top-32 right-20 z-50 -rotate-45"></div>
        </div>
      </header>

      <Recommended />
      <HomeSearch />

      {/* mind */}
      <section className="container mx-auto flex flex-col items-start justify-between h-60 mt-20">
        <div className="w-full pl-20">
          <h5 className="text-lg text-black font-bold">
            What{"'"}s on your mind?
          </h5>
        </div>

        <div className="flex items-start justify-between w-full">
          {mind.map((item) => (
            <article
              key={item.id}
              className="w-60 h-fit flex flex-col items-center gap-8"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={100}
                height={100}
                className="rounded-full"
              />
              <span className="text-lg font-bold text-black">{item.title}</span>
            </article>
          ))}
        </div>
      </section>

      <Personalised />
    </main>
  )
}
