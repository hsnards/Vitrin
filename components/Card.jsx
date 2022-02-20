import React from 'react';
import Image from "next/image"
import ReactStars from "react-rating-stars-component";
const Card = ({title , description , src , category , rating ,price }) => {
    return (
          <div className={"w-full flex rounded-md shadow-md mt-5 flex-wrap"}>
          {/*Content Box*/}
              <div className={"w-full p-3 md:p-6 md:w-3/5 order-2 space-y-10"}>
              {/*    Header Content*/}
              <div className={"space-y-1.5"}>
                  <div className={"flex justify-between "}>
                      <h3 className={"font-bold text-[22px] text-black/75 w-5/6"}>{title}</h3>
                      <span className={"w-1/6 "}>
                      <ReactStars
                            value={rating.rate}
                            size={16}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ef4444"
                      />
                          </span>
                  </div>
                  <p className={"text-[18px] text-gray-400 font-[600]"}>{category}</p>
                  <p className={"text-red-600/50 text-[18px] font-[600]"}>${price}</p>
              </div>
              {/*description Content*/}
                  <div>
                      <p className={"text-[16px] text-black/75  font-bold"}>DESCRIPTION</p>
                      <p className={"text-[14px] font-normal text-gray-300 pt-5"}>{description}</p>
                  </div>
              </div>
          {/*Image Box*/}
              <div className={" w-full md:w-2/5 order-1 flex justify-center py-6"}>
                  <Image layout={"fixed"} src={src} width={300} height={500} />
              </div>
          </div>
    );
};

export default Card;
