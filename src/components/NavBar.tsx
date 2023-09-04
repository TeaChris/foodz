import Image from 'next/image'
import Link from 'next/link'
import { Input } from './ui/input'
import { buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'
import CartIcon from './CartIcon'

interface NavBarProps {}

const NavBar =  ({}) => {
  return (
    <nav className="w-full h-20 grid place-items-center relative bg-transparent z-50">
      <div className="container mx-auto flex justify-between items-start">
        <div className="w-fit h-fit flex items-center gap-12">
          <Link href="/" className="w-fit flex items-center gap-1">
            <Image
              src="/icons/logo.svg"
              alt="logo"
              width={27}
              height={27}
              priority={true}
            />
            <h2 className="font-bold text-3xl text-black capitalize">
              ber<span className="text-orange-400">Foods</span>
            </h2>
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/menu" className="text-lg text-black font-medium">
              Menu
            </Link>
            <Link href="/orders" className="text-lg text-black font-medium">
              Orders
            </Link>
            <Link href="/contact" className="text-lg text-black font-medium">
              Contact
            </Link>
          </div>
        </div>

        <div className="w-fit flex items-center gap-4">
          <div className="hidden lg:block w-96 h-fit">
            <Input
              disabled
              type="text"
              placeholder="Enter item or restaurant you're looking for"
            />
          </div>
          <div className="hidden lg:block">
            <CartIcon />
          </div>

          <div className="hidden w-24 h-full lg:grid place-items-center">
            <Link
              href="/sign-in"
              className={cn(
                buttonVariants({ variant: 'default' }),
                'self-start'
              )}
            >
              sign in
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
