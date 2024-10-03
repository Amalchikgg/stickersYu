import Image from "next/image";
import Modal from "./Modal";
import { motion } from "framer-motion";

interface Props {
  img: string;
  text: string;
  lost: string;
  price: { first: string; second: string };
  size: { w: number; h: number };
  imageClass?: string;
  imgMobile: string;
  noneLeftBorder?: boolean;
  noneRightBorder?: boolean;
  className?: string;
}

const Product = ({
  img,
  text,
  lost,
  price,
  size,
  imageClass,
  noneLeftBorder,
  noneRightBorder,
  className,
}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 1.5 }}
    >
      <div
        className={`mb-[18px] mobile:mb-[11px] border mobile:w-[170px] mobile:px-0 mobile:h-[254px] border-[#1A1921] flex items-center flex-col pt-[27px] w-[295px] h-[433px] tablet:w-[305px] tablet:h-[471px] ${
          noneRightBorder && "border-r-0"
        } ${noneLeftBorder && "border-l-0"} ${className}`}
      >
        <Image
          src={`/images/${img}.jpg`}
          alt='product'
          width={size.w}
          height={size.h}
          className={`mobile:hidden ${imageClass}`}
        />
        <Image
          src={`/images/${img}.jpg`}
          alt='product'
          width={size.w}
          height={size.h}
          className={`mobile:block hidden ${imageClass}`}
        />
      </div>
      <div className='h-[188px] flex flex-col justify-between'>
        <div className='mobile:mb-2'>
          <p className='text-[20px] text-black mb-3 tracking-[-1px] leading-4 tablet:leading-5 w-[257px] mobile:text-[16px] mobile:leading-[14px] mobile:tracking-[-0.8px] mobile:w-[157px]'>
            {text}
          </p>
          <p className='text-[#8A8A8A] text-[20px] tracking-[-1px] mobile:text-[14px] mobile:leading-none mobile:tracking-[-0.7px]'>
            Осталось {lost} шт.
          </p>
        </div>
        <div>
          <div className='flex items-center gap-3 mb-5 mobile:flex-col mobile:items-start'>
            <p className='font-light text-[20px] tracking-[-1px] mobile:leading-none text-[#B6B6B6] line-through'>
              {price.first}
            </p>
            <p className='font-bold text-black text-[20px] mobile:leading-none tracking-[-1px]'>
              {price.second}
            </p>
          </div>
          <Modal className='!w-[180px] !h-[44px] mobile:!w-[152px] mobile:!h-[40px]' />
          {/* <button className='w-[180px] h-[44px] border border-[#1A1921] text-[#1A1921] font-bold text-[20px] tracking-[-1px]'>
            Заказать
          </button> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Product;
