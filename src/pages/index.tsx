import dynamic from "next/dynamic";
import localfont from "next/font/local";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import Image from "next/image";
import ProductItem from "@/components/ProductItem";
import Modal from "@/components/Modal";
import Header from "@/components/Header";
import Form from "@/components/Form";

const CountdownTimer = dynamic(() => import("../components/CountdownTimer"), {
  ssr: false,
});

export const helvetic = localfont({
  src: [
    { path: "../../public/fonts/HELVETICANEUECYR-BOLD.ttf", weight: "700" },
    { path: "../../public/fonts/HELVETICANEUECYR-MEDIUM.ttf", weight: "500" },
    { path: "../../public/fonts/HELVETICANEUECYR-ROMAN.ttf", weight: "400" },
  ],
});

export const vetren = localfont({
  src: [{ path: "../../public/fonts/VETREN.woff", weight: "400" }],
});

export default function Home() {
  return (
    <div className={`${helvetic.className} fade-in`}>
      <Container>
        <Header />
        <div className='bg-[#F6F6F6] py-10 px-[30px] mb-[50px]'>
          <p className='font-medium text-[#1A1921] text-[64px] tablet:text-[48px] mobile:text-[36px] mobile:tracking-[-1.8px] tablet:tracking-[-2.4px] tracking-[-4.3px] leading-[60px] tablet:leading-none mb-[55px] tablet:mb-8 mobile:text-start'>
            Скидки до 30%{" "}
            <span className='font-normal'>
              на нужные товары для вашего дома!
            </span>
          </p>
          <div className='flex justify-centec'>
            <Modal className='!w-full !h-[90px] !bg-transparent !text-[36px] !tracking-[-1.8px] mobile:!h-[48px] mobile:!text-[20px] mobile:!tracking-[-1px]' />
          </div>
        </div>
        <div className='bg-[#BBBBBB] h-[1px] w-full mb-[85px] tablet:mb-[50px] mobile:mb-5' />
        <div className='flex items-center justify-between mb-[88px] tablet:mb-[50px] tablet:flex-col tablet:gap-[50px] mobile:mb-5 mobile:gap-y-5'>
          <p className='text-[#1A1921] text-[86px] tablet:text-[64px] mobile:text-[40px] mobile:tracking-[-2px] tablet:tracking-[-3.2px] tablet:leading-none mobile:leading-[80px] leading-[80px] tracking-[-4.3px]'>
            До конца <span className='font-normal'>акции</span>
          </p>
          <CountdownTimer />
        </div>
        <div className='bg-[#BBBBBB] h-[1px] w-full mb-[94px] tablet:mb-[59px] mobile:mb-[35px]' />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 1 }}
          id='stickers'
        >
          <div className='flex items-end tablet:items-center pl-[115px] tablet:pl-[120px] mobile:pl-0 mobile:justify-center relative gap-[95px] mb-[13px] mobile:mb-0'>
            <p
              className={`${vetren.className} text-[128px] tablet:text-[72px] mobile:text-[64px] mobile:tracking-[-3.2px] tablet:tracking-[-3.6px] tracking-[-6.4px] leading-[80px] text-[#1A1921]`}
            >
              НАКЛЕЙКИ
            </p>
            <Image
              src={"/icons/starSmall.svg"}
              width={72}
              height={82}
              alt='star'
              className='mb-3 tablet:mb-0 mobile:hidden tablet:w-[52px]'
            />
            <Image
              src={"/icons/circleLine.svg"}
              alt='line'
              width={585}
              height={88}
              className='absolute left-[226px] top-[-4px] tablet:top-[-18px] z-[-1] tablet:w-[588.39px] tablet:h-[185.72px] tablet:left-[10px] mobile:hidden'
            />
            <Image
              src={"/icons/mobileCircleLine1.svg"}
              alt='line'
              width={447}
              height={417}
              className='hidden mobile:block absolute top-[22px] z-[-1]'
            />
          </div>
          <div className='flex justify-end mb-[68px] mobile:pl-4 tablet:mb-[86px] mobile:mb-[20px] pr-[100px] tablet:pr-1 mobile:justify-between'>
            <p className='text-[#1A1921] text-[20px] tablet:text-[16px] tabet:tracking-[-0.8px] tracking-[-1px] w-[651px] tablet:w-[370px] leading-5 mobile:text-[14px] mobile:tracking-[-0.7px] mobile:w-full mobile:leading-4'>
              Стильный и лаконичный способ добавить изящную нотку
              организованности и индивидуальности в хранение ваших продуктов.
            </p>
          </div>
        </motion.div>
        <div className='flex flex-wrap justify-between mb-[140px] gap-y-20 tablet:mb-[110px] mobile:mb-[49px]  tablet:gap-y-[50px] tablet:gap-x-[30px] mobile:gap-x-[15px] mobile:gap-y-3'>
          <ProductItem
            img='product1'
            lost='2'
            text='Наклейки для подписи на контейнер или банку (черные, фигурные 8 шт.)'
            price={{ first: "45 000 сум", second: "35 000 сум" }}
            imgMobile='mobileProduct1'
            hoverImage='sticker4'
            id={1}
          />
          <ProductItem
            img='product2'
            lost='2'
            text='Наклейки для подписи на контейнер или банку (черные, фигурные 8 шт.)'
            price={{ first: "45 000 сум", second: "35 000 сум" }}
            imgMobile='mobileProduct2'
            hoverImage='sticker5'
            id={2}
          />
          <ProductItem
            img='product3'
            lost='2'
            text='Наклейки для подписи (комплект, 6 шт.)'
            price={{ first: "45 000 сум", second: "35 000 сум" }}
            imgMobile='mobileProduct3'
            hoverImage='sticker2'
            id={3}
          />
          <ProductItem
            img='product4'
            lost='4'
            text='Наклейки для подписи (черные, квадратные 12 шт.)'
            price={{ first: "75 000 сум", second: "50 000 сум" }}
            imgMobile='mobileProduct4'
            hoverImage='sticker3'
            id={4}
          />
          <ProductItem
            img='product5'
            lost='2'
            text='Наклейки для подписи на контейнер или банку (бежевые, фигурные 8 шт.)'
            price={{ first: "65 000 сум", second: "40 000 сум" }}
            imgMobile='productMobile5'
            hoverImage='sticker6'
            id={5}
          />
          <ProductItem
            img='product6'
            lost='2'
            text='Наклейки для подписи на контейнер или банку (бежевые, овальные 8 шт.)'
            price={{ first: "65 000 сум", second: "40 000 сум" }}
            imgMobile='productMobile6'
            hoverImage='sticker7'
            id={6}
          />
          <ProductItem
            img='product7'
            lost='4'
            text='Наклейки для подписи (комплект, черные 4 шт.)'
            price={{ first: "30 000 сум", second: "25 000 сум" }}
            imgMobile='productMobile7'
            hoverImage='sticker2'
            id={7}
          />
          <ProductItem
            img='product8'
            lost='4'
            text='Наклейки рулон (бежевые, 500 шт.)'
            price={{ first: "300 000 сум", second: "200 000 сум" }}
            imgMobile='productMobile8'
            hoverImage='sticker8'
            id={8}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 1 }}
          className='tablet:relative'
          id='caskets'
        >
          <div className='flex relative items-center justify-between mb-[14px] mobile:mb-0 tablet:mb-0 pl-[85px] pr-[212px] mobile:p-0 mobile:pr-0 mobile:justify-center tablet:pl-[55px] tablet:pr-[65px]'>
            <Image
              src={"/icons/starSmall.svg"}
              alt='star'
              width={100}
              height={106}
              className='tablet:w-[72px] mobile:hidden'
            />
            <p
              className={`${vetren.className} text-[128px] tracking-[-6.4px] leading-[80px] mobile:leading-none text-[#1A1921] tablet:text-[72px] tablet:tracking-[-3.6px]`}
            >
              ШКАТУЛКИ
            </p>
            <Image
              src={"/icons/circleLine2.svg"}
              alt='line'
              width={1101}
              height={145}
              className='absolute z-[-1] left-[45px] top-[-47px] tablet:left-0 tablet:top-[-2px] mobile:hidden'
            />
            <Image
              src={"/icons/mobileCircleLine2.svg"}
              alt='line'
              width={376}
              height={48}
              className='absolute z-[-1] left-0 top-[13px] mobile:block hidden'
            />
          </div>
          <p className='text-[#1A1921] text-[20px] tablet:text-[16px] tablet:w-[450px] tablet:tracking-[-0.8px] leading-none w-[580px] tracking-[-1px] ml-[85px] mobile:leading-none tablet:ml-0 mb-[91px] tablet:mb-[62px] mobile:mb-[20px] mobile:w-full mobile:text-[14px] mobile:tracking-[-0.7px]'>
            Изящный аксессуар, в котором эстетика сочетается с практичностью,
            создавая уют и сохраняя ваши сокровенные вещи.
          </p>
        </motion.div>
        <div className='flex mb-[140px] justify-center gap-[21px] px-[30px] tablet:gap-y-[50px] tablet:gap-x-[30px] tablet:mb-[118px] tablet:flex-wrap tablet:px-0 mobile:gap-x-[15px] mobile:gap-y-0 mobile:mb-11'>
          <ProductItem
            img='product9'
            lost='2'
            text='Карманная шкатулка для украшений '
            price={{ first: "150 000 сум", second: "50 000 сум" }}
            imgMobile='productMobile5'
            hoverImage='caskets3'
            id={9}
          />
          <ProductItem
            img='product10'
            lost='2'
            text='Дорожная шкатулка (Черная)'
            price={{ first: "150 000 сум", second: "55 000 сум" }}
            imgMobile='productMobile6'
            hoverImage='caskets4'
            id={10}
          />
          <ProductItem
            img='product11'
            lost='2'
            text='Дорожная шкатулка (Розовая, с зеркалом)'
            price={{ first: "150 000 сум", second: "100 000 сум" }}
            imgMobile='productMobile7'
            hoverImage='caskets5'
            id={11}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 1 }}
          id='goodies'
        >
          <div className='mb-3 pl-[170px] tablet:pl-[125px] tablet:mb-0 relative mobile:pl-[63px]'>
            <p
              className={`${vetren.className} text-[128px] tracking-[-6.4px] leading-[80px] mobile:leading-none text-[#1A1921] tablet:text-[72px] tablet:tracking-[-3.6px]`}
            >
              НИШТЯКИ
            </p>
            <Image
              src={"/icons/circleLine3.svg"}
              alt='line'
              width={575}
              height={88}
              className='absolute z-[-1] left-[267px] top-[-3px] tablet:left-0 tablet:top-[2px] mobile:hidden tablet:w-[585px]'
            />
            <Image
              src={"/icons/mobileCircleLine2.svg"}
              alt='line'
              width={376}
              height={48}
              className='absolute z-[-1] left-0 top-[17px] mobile:block hidden'
            />
            <Image
              src={"/icons/rotateStar.svg"}
              alt='star'
              width={58}
              height={35}
              className='absolute right-[403px] top-[53px] mobile:hidden tablet:top-[25px] tablet:w-[52px] tablet:right-[118px] tablet:rotate-[-15deg]'
            />
          </div>
          <div className='flex justify-end pr-[4.5px] mobile:pr-[18px]'>
            <p className='text-[20px] text-[#1A1921] tracking-[-1px] mobile:text-end mb-[120px] mobile:mb-5 w-[580px] tablet:w-[370px] mobile:w-full tablet:text-[16px] tablet:tracking-[-0.8px] leading-none'>
              Превратите каждое пространство в уютный уголок с нашими
              изысканными предложениями.
            </p>
          </div>
        </motion.div>
        <div className='flex flex-wrap gap-y-20 justify-between mb-[140px] mobile:mb-10 tablet:gap-y-[50px] tablet:gap-x-[30px] mobile:gap-x-[15px] mobile:gap-y-0'>
          <ProductItem
            img='product12'
            lost='2'
            text='Силиконновый зажим для крепления проводов (черный)'
            price={{ first: "100 000 сум", second: "65 000 сум" }}
            imgMobile='productMobile5'
            hoverImage='goodies1'
            id={12}
          />
          <ProductItem
            img='product13'
            lost='2'
            text='Силиконновый зажим для крепления проводов (белый)'
            price={{ first: "100 000 сум", second: "65 000 сум" }}
            imgMobile='productMobile6'
            hoverImage='goodies1'
            id={13}
          />
          <ProductItem
            img='product14'
            lost='2'
            text='Зажим для проводов (14 шт.)'
            price={{ first: "85 000 сум", second: "70 000 сум" }}
            imgMobile='productMobile7'
            hoverImage='product14'
            id={14}
          />
          <ProductItem
            img='product15'
            lost='2'
            text='Проволочный зажим (9 шт.)'
            price={{ first: "65 000 сум", second: "35 000 сум" }}
            imgMobile='productMobile5'
            hoverImage='goodiesPreview9'
            id={15}
          />
          <ProductItem
            img='product16'
            lost='2'
            text='Разделитель для холодильных полок (2шт, большой)'
            price={{ first: "90 000 сум", second: "60 000 сум" }}
            imgMobile='productMobile6'
            hoverImage='goodies2'
            id={16}
          />
          <ProductItem
            img='product17'
            lost='2'
            text='Наклейки для ковров (фигурные 4 шт.)'
            price={{ first: "200 000 сум", second: "100 000 сум" }}
            imgMobile='productMobile7'
            hoverImage='goodies4'
            id={17}
          />
          <ProductItem
            img='product18'
            lost='2'
            text='Щетка для удаления пятен'
            price={{ first: "150 000 сум", second: "80 000 сум" }}
            imgMobile='productMobile5'
            hoverImage='goodies5'
            id={18}
          />
          <ProductItem
            img='product19'
            lost='2'
            text='Лопатка для сыпучих (2 шт.)'
            price={{ first: "130 000 сум", second: "50 000 сум" }}
            imgMobile='productMobile6'
            hoverImage='goodies7'
            id={19}
          />
          <ProductItem
            img='product20'
            lost='2'
            text='Разделитель для холодильных полок (2 шт.)'
            price={{ first: "45 000 сум", second: "35 000 сум" }}
            imgMobile='productMobile7'
            hoverImage='goodies8'
            id={20}
          />
          <ProductItem
            img='product21'
            lost='2'
            text='Зажим, крючок для полотенец (2 шт.)'
            price={{ first: "90 000 сум", second: "40 000 сум" }}
            imgMobile='productMobile5'
            hoverImage='goodies12'
            id={21}
          />
          <ProductItem
            img='product22'
            lost='2'
            text='Держатель для швабры'
            price={{ first: "150 000 сум", second: "50 000 сум" }}
            imgMobile='productMobile6'
            hoverImage='goodies13'
            id={22}
          />
          <ProductItem
            img='product23'
            lost='2'
            text='Силиконовые наклейки для вешалок (20 шт.)'
            price={{ first: "75 000 сум", second: "40 000 сум" }}
            imgMobile='productMobile7'
            hoverImage='product23'
            id={23}
          />
        </div>
        <div className='bg-[#BBBBBB] h-[1px] w-full mb-[100px] tablet:mb-10' />
        <Form />
      </Container>
    </div>
  );
}
