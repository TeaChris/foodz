import { foods, restaurant } from '@/data'
import Image from 'next/image'
import { FC } from 'react'
import { Balancer } from 'react-wrap-balancer'

interface RecommendedProps {}

const Recommended: FC<RecommendedProps> = ({}) => {
  return (
    <section className="w-full h-fit lg:h-[57rem] bg-transparent py-2 mt-20">
      <div className="container mx-auto h-full flex flex-col lg:flex-row items-start justify-between">
        {/* restaurant */}
        <div className="recommended">
          <h5 className="recommended_head">nearby restaurant</h5>
          <div className="recommended_item">
            {restaurant.map((item) => (
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
                  <p className="recommended_location">{item.location}</p>
                  <div className="recommended_star">
                    {item.rating >= 4.0 ? (
                      <Image
                        src="/icons/green-star.svg"
                        alt={item.title}
                        width={15}
                        height={15}
                      />
                    ) : (
                      <Image
                        src="/icons/orange-star.svg"
                        alt={item.title}
                        width={15}
                        height={15}
                      />
                    )}
                    <span>{item.rating}</span>
                  </div>
                </div>
                <div className="recommended_time">
                  <div className="recommended_mins">
                    <Image
                      src="/icons/mins.svg"
                      alt={item.title}
                      width={20}
                      height={20}
                    />
                    <span className="">{item.mins}</span>
                  </div>
                  <div className="recommended_mins">
                    <Image
                      src="/icons/people.svg"
                      alt={item.title}
                      width={20}
                      height={20}
                    />
                    <span className="">{item.people}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* right */}
        <div className="recommended">
          <h5 className="recommended_head">recommended food items</h5>
          <div className="recommended_item">
            {foods.map((item) => (
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
                      alt={item.title}
                      width={20}
                      height={20}
                    />
                    <span className="">${item.price}</span>
                  </div>
                  <div className="recommended_mins">
                    <Image
                      src="/icons/mins.svg"
                      alt={item.title}
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
      </div>
    </section>
  )
}

export default Recommended
