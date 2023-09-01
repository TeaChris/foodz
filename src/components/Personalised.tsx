import { personalised } from '@/data'
import Image from 'next/image'
import { FC } from 'react'
import { Balancer } from 'react-wrap-balancer'

interface PersonalisedProps {}

const Personalised: FC<PersonalisedProps> = ({}) => {
  return (
    <section className="w-full h-fit lg:h-[35rem] mt-20">
      <div className="container mx-auto h-full flex flex-col items-start gap-8 lg:gap-10">
        <h5 className="text-black font-bold text-lg">
          Personalized recommendations
        </h5>
        <div className="w-full h-[30rem] flex flex-col lg:flex-row items-center gap-8 lg:justify-between">
          {personalised.map((item) => (
            <div key={item.id} className="recommended_items">
              <Image
                src={item.img}
                alt={item.title}
                //   width={120}
                //   height={200}
                className="w-full object-cover"
              />
              <h4 className="recommended_title">
                <Balancer>{item.title}</Balancer>
              </h4>
              <div className="recommended_rating">
                <p className="recommended_location">{item.desc}</p>
              </div>
              <div className="recommended_time">
                <div className="recommended_mins">
                  <Image
                    src="/icons/tag.svg"
                    alt={item.mins}
                    width={20}
                    height={20}
                  />
                  <span className="">${item.price}</span>
                </div>
                <div className="recommended_mins">
                  <Image
                    src="/icons/mins.svg"
                    alt={item.mins}
                    width={20}
                    height={20}
                  />
                  <span className="">{item.mins}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Personalised
