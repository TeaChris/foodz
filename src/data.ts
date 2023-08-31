import { StaticImageData } from 'next/image'
import rt1 from '../public/images/rt1.png'
import rt2 from '../public/images/rt2.png'
import rt3 from '../public/images/rt3.png'
import rt4 from '../public/images/rt4.png'
import f1 from '../public/images/f1.png'
import f2 from '../public/images/f2.png'
import f3 from '../public/images/f3.png'
import f4 from '../public/images/f4.png'
import m1 from '../public/images/m1.png'
import m2 from '../public/images/m2.png'
import m3 from '../public/images/m3.png'
import m4 from '../public/images/m4.png'
import m5 from '../public/images/m5.png'
import m6 from '../public/images/m6.png'
import p1 from '../public/images/p1.png'
import p2 from '../public/images/p2.png'
import p3 from '../public/images/p3.png'
import cart1 from '../public/images/cart1.png'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

type Product = {
  id: number
  title: string
  img: StaticImageData
  price: number
  rating: number
  location: string
  mins: string
  people: string
  options?: { title: string; additionalPrice: number }[]
}

type Products = Product[]

export const restaurant: Products = [
  {
    id: 1,
    title: 'chicken lovers',
    img: rt1,
    price: 24.9,
    rating: 4.0,
    location: 'lagos, ikeja',
    mins: '20 mins',
    people: '150 for two',
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: 'chicken republic',
    img: rt2,
    price: 24.9,
    rating: 3.2,
    location: 'wuse, abuja',
    mins: '30 mins',
    people: '200 for two',
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: 'mr biggs',
    img: rt3,
    price: 24.9,
    rating: 4.5,
    location: 'iwo-road ibadan',
    mins: '40 mins',
    people: '300 for two',
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: 'sweet sensation',
    img: rt4,
    price: 24.9,
    rating: 4.8,
    location: 'sango, ogun',
    mins: '25 mins',
    people: '450 for two',
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
]

type Food = {
  id: number
  title: string
  desc?: string
  img: StaticImageData
  price?: number
  mins?: string
  options?: { title: string; additionalPrice: number }[]
}[]

export const foods: Food = [
  {
    id: 1,
    title: 'Nigerian Rice Bowl',
    img: f1,
    price: 200,
    desc: 'the good bowl',
    mins: '20 mins',
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: 'Curd Meal (2 pcs)',
    img: f2,
    price: 159,
    desc: 'lunch box',
    mins: '30 mins',
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: 'Baked Pizza Wrap',
    img: f3,
    price: 150,
    desc: 'Faasos - Wraps & Rolls',
    mins: '40 mins',
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: 'Fried Rice & fruits',
    img: f4,
    price: 24.9,
    desc: 'mfc restaurant',
    mins: '25 mins',
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
]

type Personalized = {
  id: number
  title: string
  img: StaticImageData
  price: number
  desc: string
  rating: number
  mins: string
  people: string
  options?: { title: string; additionalPrice: number }[]
}[]

export const personalised: Personalized = [
  {
    id: 1,
    title: 'Baked Pizza Wrap - Vegetarian',
    img: f3,
    price: 200,
    rating: 4.0,
    desc: 'Suren Pastries',
    mins: '20 mins',
    people: '150 for two',
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: 'Butter Chicken Pizza - 8 serve',
    img: p1,
    price: 173,
    rating: 3.2,
    desc: 'subway',
    mins: '30 mins',
    people: '200 for two',
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: 'Mexican Patty Signature Wraps',
    img: p2,
    price: 100,
    rating: 4.5,
    desc: 'Burgerito',
    mins: '40 mins',
    people: '300 for two',
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: 'Southwest Chicken Nigerian Salad',
    img: p3,
    price: 300,
    rating: 4.8,
    desc: 'Faasos - Wraps & Rolls',
    mins: '25 mins',
    people: '450 for two',
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
]

type Mind = {
  id: number
  title: string
  img: StaticImageData
}

type Minds = Mind[]

export const mind: Minds = [
  {
    id: 1,
    title: 'sandwich',
    img: m1,
  },
  {
    id: 2,
    title: 'North Indian Thali',
    img: m2,
  },
  {
    id: 3,
    title: 'Egg BreakFast',
    img: m3,
  },
  {
    id: 4,
    title: 'Rolls & Puffs',
    img: m4,
  },
  {
    id: 5,
    title: 'Salads',
    img: m5,
  },
  {
    id: 6,
    title: 'Biriyani Box',
    img: m6,
  },
]

type Menu = {
  id: number
  slug: string
  title: string
  desc?: string
  img?: string
  color: string
}[]

export const menu: Menu = [
  {
    id: 1,
    slug: 'pastas',
    title: 'Yummy Pastas',
    desc: 'Savor the taste of perfection with our exquisite Italian handmade pasta menu.',
    img: '/images/me1.png',
    color: 'white',
  },
  {
    id: 2,
    slug: 'burgers',
    title: 'Juicy Snacks',
    desc: 'Burger Bliss: Juicy patties, bold flavors, and gourmet toppings galore.',
    img: '/images/me2.png',
    color: 'black',
  },
  {
    id: 3,
    slug: 'peas',
    title: 'Cheesy Peas',
    desc: 'Pizza Paradise: Irresistible slices, mouthwatering toppings, and cheesy perfection.',
    img: '/images/me8.png',
    color: 'black',
  },
  {
    id: 4,
    slug: 'rice',
    title: 'Crunchy Rice',
    desc: 'Savor the taste of perfection with our exquisite Italian handmade pasta menu.',
    img: '/images/me6.png',
    color: 'black',
  },
  {
    id: 5,
    slug: 'cakes',
    title: 'Fruitful cakes',
    desc: 'Burger Bliss: Juicy patties, bold flavors, and gourmet toppings galore.',
    img: '/images/me7.png',
    color: 'black',
  },
  {
    id: 6,
    slug: 'chicken',
    title: 'Cheesy chicken',
    desc: 'Pizza Paradise: Irresistible slices, mouthwatering toppings, and cheesy perfection.',
    img: '/images/me5.png',
    color: 'white',
  },
  {
    id: 7,
    slug: 'beef',
    title: 'Savoury beef',
    desc: 'Pizza Paradise: Irresistible slices, mouthwatering toppings, and cheesy perfection.',
    img: '/images/me4.png',
    color: 'white',
  },
  {
    id: 8,
    slug: 'dRINKS',
    title: 'Drunken drinks',
    desc: 'Pizza Paradise: Irresistible slices, mouthwatering toppings, and cheesy perfection.',
    img: '/images/me9.png',
    color: 'black',
  },
]

type Pizzas = {
  id: number
  title: string
  img: StaticImageData
  price: number
  desc: string
  options?: { title: string; additionalPrice: number }[]
}[]

export const pizzas: Pizzas = [
  {
    id: 1,
    title: 'Sicilian',
    desc: 'Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.',
    img: p1,
    price: 24.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: 'Mediterranean Delight',
    desc: 'Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.',
    img: rt2,
    price: 32.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: 'Bella Napoli',
    desc: 'A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.',
    img: p3,
    price: 26.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: 'Pesto Primavera',
    desc: 'A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.',
    img: rt4,
    price: 28.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 5,
    title: 'Veggie Supreme',
    desc: 'A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.',
    img: f1,
    price: 24.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 6,
    title: 'Four Cheese Fantasy',
    desc: 'Experience pure cheesy bliss with a melty blend of mozzarella, cheddar, provolone, and Parmesan cheeses, creating a rich and indulgent pizza experience.',
    img: f2,
    price: 22.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
]

type Single = {
  id: number
  title: string
  desc: string
  img: string
  price: number
  options?: { title: string; additionalPrice: number }[]
}

export const singleProduct: Single = {
  id: 1,
  title: 'Sicilian',
  desc: 'Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.',
  img: '/images/p1.png',
  price: 24.9,
  options: [
    {
      title: 'Small',
      additionalPrice: 0,
    },
    {
      title: 'Medium',
      additionalPrice: 4,
    },
    {
      title: 'Large',
      additionalPrice: 6,
    },
  ],
}

type Cart = {
  id: number
  img: StaticImport
  title: string
  desc: string
  price: number
}[]

export const cart: Cart = [
  {
    id: 1,
    img: cart1,
    title: 'brunch for 2 - Veg (save upto $45)',
    desc: 'Brunch for 2 - Veg (Save upto Rs.45) Brunch: One meal to rule them all! Grab this mega saver combo with your choice of 2 veg wraps, Aloo Paratha (2 pcs), chole and Curd lunchbox and 2 choco lava cakes. This is just bliss on a plate!',
    price: 599,
  },
  {
    id: 2,
    img: f4,
    title: 'brunch for 2 - Veg (save upto $45)',
    desc: 'Brunch for 2 - Veg (Save upto Rs.45) Brunch: One meal to rule them all! Grab this mega saver combo with your choice of 2 veg wraps, Aloo Paratha (2 pcs), chole and Curd lunchbox and 2 choco lava cakes. This is just bliss on a plate!',
    price: 599,
  },
]
