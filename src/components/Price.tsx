'use client'

import { FC, useState, useEffect } from 'react'
import { CaretLeftIcon, CaretRightIcon } from '@radix-ui/react-icons'

interface PriceProps {
  price: number
  id: number
  options?: { title: string; additionalPrice: number }[]
}

const Price: FC<PriceProps> = ({ price, id, options }) => {
  const [total, setTotal] = useState(price)
  const [quantity, setQuantity] = useState(1)
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    )
  }, [quantity, selected, options, price])

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
      {/* OPTIONS CONTAINER */}
      <div className="flex gap-4">
        {options?.map((option, index) => (
          <button
            key={option.title}
            className="min-w-[6rem] p-2 ring-1 ring-orange-400 rounded-md"
            style={{
              background: selected === index ? 'rgb(249 115 22)' : 'white',
              color: selected === index ? 'white' : 'orange',
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/* QUANTITY AND ADD BUTTON CONTAINER */}
      <div className="flex justify-between items-center">
        {/* QUANTITY */}
        <div className="flex justify-between w-full p-3 ring-1 ring-orange-500">
          <span>Quantity</span>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              <CaretLeftIcon className="text-lg" />
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              <CaretRightIcon className="text-lg" />
            </button>
          </div>
        </div>
        {/* CART BUTTON */}
        <button className="uppercase w-56 bg-orange-500 text-white p-3 ring-1 ring-orange-500">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default Price
