import { cart } from '@/data'
import Image from 'next/image'
import { FC } from 'react'
import Balancer from 'react-wrap-balancer'
import { Button } from './ui/button'

interface CartItemsProps {}

const CartItems: FC<CartItemsProps> = ({}) => {
  return (
    <div className="w-full h-96">
      <div className="container mx-auto h-full lg:flex items-start gap-0">
        <div className="w-[15%] h-full border-r border-orange-500 px-5 flex flex-col items-end gap-4">
          <h4 className="text-lg text-black first:text-orange-500">
            Recommended
          </h4>
          <h4 className="text-lg text-black first:text-orange-500">
            Lunch Box
          </h4>
          <h4 className="text-lg text-black first:text-orange-500">
            Combo Box
          </h4>
          <h4 className="text-lg text-black first:text-orange-500">
            Biriyani Box
          </h4>
          <h4 className="text-lg text-black first:text-orange-500">
            Supper Box
          </h4>
        </div>
        <div className="w-[55%] h-full pl-16 flex flex-col items-start gap-2">
          {cart.map((item) => (
            <div
              className="w-full h-48 flex gap-[5%] items-start"
              key={item.id}
            >
              <div className="w-[60%] h-full flex-col items-start gap-8">
                <h4 className="text-lg text-black font-medium first-letter:capitalize">
                  {item.title}
                </h4>
                <span className="text-sm text-black font-medium">
                  ${item.price}
                </span>
                <small className="text-sm text-zinc-500">
                  <Balancer>{item.desc}</Balancer>
                </small>
              </div>
              <div className="w-[35%] h-full">
                <Image
                  src={item.img}
                  alt="product"
                  className="w-full object-cover h-40"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="w-[30%] h-full flex flex-col gap-8 items-start pl-12">
          <div className="w-full h-fit flex justify-between items-center">
            <h4 className="text-black text-xl first-letter:capitalize">cart</h4>
            <h6 className="text-sm text-black font-medium">2 item(s)</h6>
          </div>
          <div className="w-full h-fit flex items-start justify-between">
            <div className="w-fit flex flex-col items-start">
              <h4 className="text-black text-2xl font-bold first-letter:capitalize">
                subtotal
              </h4>
              <h6 className="text-sm text-zinc-600 font-medium">
                Extra charges may apply
              </h6>
            </div>
            <h2 className="text-2xl font-bold text-black">$799</h2>
          </div>
          <Button className="w-full h-16 rounded-md bg-orange-500 text-white hover:bg-orange-400 text-xl font-bold">
            Checkout
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CartItems
