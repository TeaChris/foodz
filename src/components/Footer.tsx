import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="w-full h-72 bg-orange-400 mt-40 pt-24">
      <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between">
        {/* LOGO */}
        <div className="w-48 h-fit py-1 flex items-center gap-1">
          <Image
            src={`/icons/logo-white.svg`}
            alt="logo"
            width={30}
            height={30}
            priority={true}
            className=""
          />
          <h2 className="font-bold text-3xl text-white capitalize">
            ber<span className="capitalize">foods</span>
          </h2>
        </div>

        <div className="w-fit h-fit flex flex-col items-center gap-12">
          <div className="w-fit h-fit flex flex-col lg:flex-row items-center gap-4 lg:gap-16">
            <Link
              href="/"
              className="text-lg text-white first-letter:capitalize font-medium"
            >
              about us
            </Link>
            <Link
              href="/"
              className="text-lg text-white first-letter:capitalize font-medium"
            >
              Delivery
            </Link>
            <Link
              href="/"
              className="text-lg text-white first-letter:capitalize font-medium"
            >
              Help & Support
            </Link>
            <Link
              href="/"
              className="text-lg text-white first-letter:capitalize font-medium"
            >
              T&C
            </Link>
          </div>
          <div className="w-fit h-fit flex items-center gap-6">
            <Image
              src="/icons/facebook.svg"
              alt="facebook"
              width={17}
              height={17}
              priority={true}
            />
            <Image
              src="/icons/insta.svg"
              alt="facebook"
              width={25}
              height={25}
              priority={true}
            />
            <Image
              src="/icons/X.svg"
              alt="facebook"
              width={30}
              height={30}
              priority={true}
            />
          </div>
        </div>
        <div className="w-fit flex items-center gap-6">
          <h6 className="text-white text-lg font-medium">Contact:</h6>
          <h6 className="text-white text-lg font-medium">+91 456782343</h6>
        </div>
      </div>
    </footer>
  )
}

export default Footer
