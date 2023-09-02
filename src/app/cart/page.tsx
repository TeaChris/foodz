import Image from 'next/image'
import { FC } from 'react'
import { StarIcon } from '@radix-ui/react-icons'
import CartItems from '@/components/CartItems'

interface CartPageProps {}

const CartPage: FC<CartPageProps> = ({}) => {
  return (
    <main className="w-full h-fit flex flex-col items-start gap-12">
      <div className="w-full h-72 bg-black relative">
        <div className="container mx-auto flex items-end justify-center gap-24 pt-4">
          <div className="w-fit h-full flex items-center gap-8">
            <Image
              src="/images/cart.png"
              alt="cart image"
              width={400}
              height={400}
            />
            <div className="w-fit h-fit flex flex-col items-start gap-2">
              <h2 className="text-white capitalize text-2xl">
                launchBox - meals and thails
              </h2>
              <small className="text-xs text-white">sweet sensation meal</small>
              <div className="w-fit h-fit flex items-start gap-0">
                <div className="w-fit h-12 pr-12 border-r-2 border-zinc-700 flex flex-col gap-2 items-start">
                  <div className="w-fit flex items-center gap-1">
                    <Image
                      src="/icons/green-star.svg"
                      alt="rating"
                      width={15}
                      height={15}
                    />
                    <small className="text-sm text-white">4.0</small>
                  </div>
                  <small className="text-white text-sm">100+rating</small>
                </div>

                <div className="w-fit h-12 px-12 border-r-2 border-zinc-700 flex flex-col gap-2 items-start">
                  <div className="w-fit flex items-center gap-1">
                    <small className="text-sm text-white">30 mins</small>
                  </div>
                  <small className="text-white text-sm">Delivery time</small>
                </div>

                <div className="w-fit h-12 px-12 border-r-2 border-zinc-700 flex flex-col gap-2 items-start">
                  <div className="w-fit flex items-center gap-1">
                    <small className="text-sm text-white">$120</small>
                  </div>
                  <small className="text-white text-sm">Cost for two</small>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[22rem] h-40 py-3 border-2 border-orange-500 border-dashed rounded-md grid place-items-center">
            <div className="w-fit h-full flex flex-col gap-4 pt-2 items-start">
              <h6 className="text-lg text-orange-500">Offers</h6>
              <div className="flex items-center gap-3">
                <Image
                  src="/icons/offers.svg"
                  alt="offers"
                  width={20}
                  height={20}
                />
                <small className="text-sm text-white">
                  50% off up to $100 | Use code TRYNEW{' '}
                </small>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="/icons/offers.svg"
                  alt="offers"
                  width={20}
                  height={20}
                />
                <small className="text-sm text-white">
                  20% off | Use code PARTY
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CartItems />
    </main>
  )
}

export default CartPage
