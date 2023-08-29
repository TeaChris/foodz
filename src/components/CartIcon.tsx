import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface CartIconProps {}

const CartIcon: FC<CartIconProps> = ({}) => {
  return (
    <Link
      href="/cart"
      className="flex items-center gap-0 lg:w-13 justify-center"
    >
      <div className="relative w-8 h-8 md:w-8 md:h-8">
        <Image src="/icons/Bag.svg" alt="" fill />
      </div>
      <span className="text-sm font-extrabold">(3)</span>
    </Link>
  )
}
export default CartIcon
