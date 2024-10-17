/* eslint-disable @next/next/no-img-element */
"use client";
import Container from "@/components/Container";
import Modal from "@/components/Modal";
import ProductItem from "@/components/ProductItem";
import { products, ProductType } from "@/constants/mockData";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useMemo, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import Header from "@/components/Header";
import { helvetic } from "..";

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const slideRef = useRef<SwiperClass>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayingMobile, $isPlayingMobile] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0); // Текущее положение слайда
  const [randomProducts, setRandomProducts] = useState<ProductType[]>([]);

  const getProduct = useMemo(() => {
    setIsPlaying(false);
    $isPlayingMobile(false);
    slideRef.current?.slideTo(0);
    return products.find((item) => item.id == Number(id));
  }, [id]);

  useEffect(() => {
    // Получить массив продуктов, исключив текущий
    const otherProducts = products.filter((p) => p.id !== Number(id));

    // Функция для перемешивания массива
    const shuffleArray = (array: ProductType[]) => {
      return array.sort(() => Math.random() - 0.5);
    };

    // Перемешиваем массив и берем первые 4 продукта
    const randomSelection = shuffleArray(otherProducts).slice(0, 4);
    setRandomProducts(randomSelection);
  }, [id, products]);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveSlide(swiper.activeIndex);
    setIsPlaying(false); // Останавливаем видео при смене слайда
  };
  return (
    <div className={`${helvetic.className} fade-in`}>
      <Container>
        <Header />
        <div className='flex gap-10 mb-14 tablet:flex-col tablet:gap-8 tablet:mb-8'>
          <div className='w-[558px] tablet:w-[610px] mobile:w-[343px]'>
            <Swiper
              onSlideChange={handleSlideChange}
              onSwiper={(it) => (slideRef.current = it)}
              slidesPerView={1}
              pagination={{
                clickable: true,
                bulletClass: "main_bullet",
                bulletActiveClass: "main_bullet_active",
              }}
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              className='relative mb-[12px] tablet:mb-8 mobile:mb-10 w-full'
            >
              <Image
                src={"/icons/swipeLeft.svg"}
                alt='arrow'
                width={30}
                height={30}
                onClick={() => slideRef.current?.slidePrev()}
                className='cursor-pointer absolute left-5 top-[265px] mobile:top-[156px] z-10 mobile:left-[18px]'
              />
              {getProduct?.video && (
                <SwiperSlide>
                  {!isPlaying ? (
                    <div className='relative'>
                      <img
                        src={`/images/${getProduct?.preview}.jpg`}
                        alt='Video Preview'
                        onClick={handlePlayVideo}
                        className='w-[560px] h-[558px] tablet:w-[610px] tablet:h-[610px] mobile:w-[343px] mobile:h-[342px]'
                      />
                      <Image
                        src={"/icons/play.svg"}
                        alt='play'
                        width={60}
                        height={60}
                        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer'
                        onClick={handlePlayVideo}
                      />
                    </div>
                  ) : (
                    <video
                      width='100%'
                      controls
                      autoPlay
                      preload='metadata'
                      className='w-[560px] h-[558px] tablet:w-[610px] tablet:h-[610px] mobile:w-[343px] mobile:h-[342px]'
                    >
                      <source
                        src={`/video/${getProduct?.video}.mp4`}
                        type='video/mp4'
                      />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </SwiperSlide>
              )}
              {getProduct?.images.map((img) => (
                <SwiperSlide key={img}>
                  <Image
                    src={`/images/${img}.jpg`}
                    alt='product'
                    width={560}
                    height={560}
                    className='w-[560px] h-[560px] object-contain tablet:w-[610px] tablet:h-[610px] mobile:w-[343px] mobile:h-[342px]'
                  />
                </SwiperSlide>
              ))}

              <Image
                onClick={() => slideRef.current?.slideNext()}
                src={"/icons/swipeRight.svg"}
                alt='arrow'
                width={30}
                height={30}
                className='cursor-pointer absolute right-5 top-[265px] mobile:top-[156px] mobile:right-[18px] z-10'
              />
            </Swiper>
            <div className='flex items-center gap-5 overflow-auto'>
              {getProduct?.video && (
                <div
                  onClick={() => slideRef.current?.slideTo(0)}
                  className='relative flex-shrink-0'
                >
                  <Image
                    src={"/icons/play2.svg"}
                    alt='play'
                    width={27}
                    height={27}
                    className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer'
                  />
                  <Image
                    src={`/images/${getProduct?.preview}.jpg`}
                    alt='product'
                    width={70}
                    height={70}
                    className={`hover:border border-[#000000] cursor-pointer ${
                      activeSlide == 0 && "border border-black"
                    }`}
                  />
                </div>
              )}
              {getProduct?.images.map((img, i) => (
                <Image
                  key={i}
                  src={`/images/${img}.jpg`}
                  alt='product'
                  width={70}
                  height={70}
                  className={`hover:border border-[#000000] cursor-pointer ${
                    (!!getProduct.video
                      ? activeSlide == i + 1
                      : activeSlide == i) && "border border-black"
                  }`}
                  onClick={() =>
                    slideRef.current?.slideTo(!!getProduct.video ? i + 1 : i)
                  }
                />
              ))}
            </div>
          </div>
          <div className='flex-1'>
            <p className='text-[24px] leading-none tracking-[-1.2px] tablet:w-full font-medium text-black mb-3 w-[560px]'>
              {getProduct?.name}
            </p>
            <p className='text-[#8A8A8A] text-[20px] tracking-[-1px] mb-5'>
              Осталось {getProduct?.lost} шт.
            </p>
            <div className='flex items-center gap-3 mb-5 mobile:mb-8'>
              <p className='font-[300] text-[32px] tracking-[-1.6px] mobile:leading-none text-[#B6B6B6] line-through'>
                {getProduct?.price.first}
              </p>
              <p className='font-bold text-[#AC672E] text-[32px] mobile:leading-none tracking-[-1.6px]'>
                {getProduct?.price.second}
              </p>
            </div>
            <Modal className='!w-[270px] !h-11 mb-[32px]' />
            <p className='text-[20px] text-[#232323] tracking-[-1px] mb-8 mobile:mb-10 leading-[22px] mobile:leading-[1.2]'>
              {getProduct?.description}
            </p>
            <div className='hidden mobile:flex mb-10 flex-col gap-10'>
              <div className={!getProduct?.video ? "hidden" : ""}>
                {!isPlayingMobile ? (
                  <div className='relative'>
                    <img
                      src={`/images/${getProduct?.preview}.jpg`}
                      alt='Video Preview'
                      onClick={() => $isPlayingMobile(true)}
                      className='w-[560px] h-[578px] tablet:w-[610px] tablet:h-[610px] mobile:w-[343px] mobile:h-[342px]'
                    />
                    <Image
                      src={"/icons/play.svg"}
                      alt='play'
                      width={60}
                      height={60}
                      className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer'
                      onClick={() => $isPlayingMobile(true)}
                    />
                  </div>
                ) : (
                  <video
                    width='100%'
                    controls
                    autoPlay
                    preload='metadata'
                    className='w-[560px] h-[578px] tablet:w-[610px] tablet:h-[610px] mobile:w-[343px] mobile:h-[342px]'
                  >
                    <source
                      src={`/video/${getProduct?.video}.mp4`}
                      type='video/mp4'
                    />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
              {getProduct?.images.map((img) => (
                <Image
                  key={img}
                  src={`/images/${img}.jpg`}
                  alt='product'
                  width={342}
                  height={342}
                />
              ))}
            </div>
            {!!getProduct?.adventages?.length && (
              <div className='mb-10'>
                <p className='text-[20px] font-medium text-[#232323] tracking-[-1px] leading-none mb-8'>
                  Преимущества:
                </p>
                {getProduct.adventages.split("•").map((text) => (
                  <p
                    key={text}
                    className='text-[20px] text-[#232323] tracking-[-1px] leading-none '
                  >
                    <span className='mr-1'>•</span>
                    {text}
                  </p>
                ))}
              </div>
            )}
            {!!getProduct?.size?.length && (
              <p className='text-[20px] text-[#232323] tracking-[-1px] leading-none'>
                <span className='font-medium'>Размеры:</span> {getProduct?.size}
              </p>
            )}
            <p className='text-[20px] text-[#232323] tracking-[-1px] leading-none'>
              <span className='font-medium'>В упаковке:</span>{" "}
              {getProduct?.inPacket}
            </p>
          </div>
        </div>
        <p className='text-[24px] text-black tracking-[-1.2px] mb-10 mobile:mb-0'>
          Вас может заинтересовать:
        </p>
        <div className='flex justify-between mb-[140px] tablet:flex-wrap tablet:gap-y-10 mobile:gap-y-[10px]'>
          {randomProducts.map((product) => (
            <ProductItem
              key={product.id}
              img={product.images[0]}
              lost={String(product.lost)}
              text={product.name}
              price={{
                first: product.price.first,
                second: product.price.second,
              }}
              imgMobile='mobileProduct1'
              hoverImage={product.hoverImage}
              id={product.id}
            />
          ))}
          {/* <ProductItem
            img='product1'
            lost='2'
            text='Наклейки для подписи на контейнер или банку (черные, фигурные 8 шт.)'
            price={{ first: "45 000 сум", second: "35 000 сум" }}
            imgMobile='mobileProduct1'
            hoverImage='sticker2'
            id={1}
          />
          <ProductItem
            img='product2'
            lost='2'
            text='Наклейки для подписи на контейнер или банку (черные, фигурные 8 шт.)'
            price={{ first: "45 000 сум", second: "35 000 сум" }}
            imgMobile='mobileProduct2'
            hoverImage='sticker2'
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
            hoverImage='sticker2'
            id={4}
          /> */}
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
