import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  img: string;
  text: string;
  lost: string;
  price: { first: string; second: string };
  imgMobile: string;
  className?: string;
  hoverImage: string;
  id: number;
}

const ProductItem = ({
  img,
  text,
  lost,
  price,
  className,
  hoverImage,
  id,
}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 1.5 }}
    >
      <div
        className={`relative mb-[25px] group mobile:mb-[-16px] mobile:w-[164px] mobile:px-0 mobile:h-[250px] w-[280px] h-[290px] tablet:w-[290px] ${className}`}
      >
        <Image
          src={`/images/${img}.jpg`}
          alt='product'
          width={280}
          height={290}
          className={`absolute right-0 top-0 bottom-0 left-0 object-contain opacity-100 group-hover:opacity-0 transition-all duration-500 tablet:w-[290px] mobile:w-[164px] mobile:h-[250px] `}
        />
        <Image
          src={`/images/${hoverImage}.jpg`}
          alt='product'
          width={280}
          height={290}
          className={`absolute right-0 top-0 bottom-0 left-0 h-[290px] tablet:h-[300px] tablet:object-contain opacity-0 group-hover:opacity-100 transition-all duration-500 tablet:w-[290px] mobile:w-[164px] mobile:h-[250px]`}
        />
      </div>
      <div className='h-[189px] tablet:h-[191px] flex flex-col justify-between'>
        <div className='mobile:mb-2'>
          <p className='text-[20px] text-black mb-3 tracking-[-1px] leading-[18px] w-[257px] mobile:text-[17px] mobile:leading-[14px] mobile:tracking-[-0.8px] mobile:w-[157px]'>
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
            <p className='font-bold text-[#AC672E] text-[20px] mobile:leading-none tracking-[-1px]'>
              {price.second}
            </p>
          </div>
          {/* <Modal className='!w-[180px] !h-[44px] mobile:!w-[152px] mobile:!h-[40px]' /> */}
          <Link href={`/product?param=${id}`}>
            <button className='w-full h-[44px] border mobile:h-9 mobile:text-[16px] mobile:tracking-[-1px] border-[#1A1921] text-[#1A1921] font-bold text-[20px] tracking-[-1px]'>
              Подробнее
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductItem;
