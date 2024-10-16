"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import Link from "next/link";

const Burger = () => {
  const [active, $active] = useState(false);

  const handleActive = () => {
    $active(!active);
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    e.preventDefault(); // Отключаем стандартное поведение <a> для ручного управления
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Прокручиваем до элемента
      targetElement.scrollIntoView({ behavior: "smooth" });

      // Ожидаем завершения анимации и закрываем меню
      setTimeout(() => {
        $active(false);
      }, 500); // Отложенное закрытие меню после 500 мс
    }
  };

  useEffect(() => {
    if (active) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [active]);
  return (
    <>
      <button onClick={handleActive} className='bg-transparent'>
        <Image
          src={"/icons/burger.svg"}
          alt='menu'
          width={40}
          height={40}
          className='hidden tablet:block'
        />
      </button>

      <div className={`menu ${active && "active"} h-[100vh]`}>
        <div className='py-[68px] px-9 w-full'>
          <div className='flex items-center justify-between mb-20'>
            <Image
              src={"/icons/footerLogo.svg"}
              alt='menu'
              width={116}
              height={88}
            />
            <Image
              onClick={handleActive}
              src={"/icons/close.svg"}
              alt='menu'
              width={40}
              height={40}
            />
          </div>
          <div className='flex flex-col'>
            <a
              href='#stickers'
              onClick={(e) => handleLinkClick(e, "stickers")}
              className='text-[27px] font-bold text-[#1A1921] tracking-[-1.35px]'
            >
              Наклейки
            </a>
            <a
              href='#caskets'
              onClick={(e) => handleLinkClick(e, "caskets")}
              className='text-[27px] my-8 font-bold text-[#1A1921] tracking-[-1.35px] '
            >
              Шкатулки
            </a>
            <a
              href='#goodies'
              onClick={(e) => handleLinkClick(e, "goodies")}
              className='text-[27px] mb-8 font-bold text-[#1A1921] tracking-[-1.35px] '
            >
              Ништяки
            </a>
          </div>
          <div className='w-full bg-[#BBBBBB] h-[1px] mb-8' />
          <Modal className='!bg-transparent !w-full !h-[48px] !flex !items-center !justify-start !pl-5 mb-8' />
          <Link
            href={`https://yandex.ru/maps/?text=ул.Кушкуприк 30.Ташкент.Узбекистан`}
            target='_blank'
          >
            <p className='text-[18px] tracking-[-0.9px] leading-5 mb-10'>
              ул. Кушкуприк 30. Ташкент. Узбекистан
            </p>
            <p className='text-[18px] tracking-[-0.9px] text-[#1A1921] mb-10'>
              +998 77 120 07 70
            </p>
          </Link>
          <Link
            target='_blank'
            href={"https://t.me/Poryadchniymagazin"}
            className='flex items-center gap-3'
          >
            <p className='text-[22px] text-[#1A1921] tracking-[-1.1px] leading-4 mobile:leading-none font-semibold'>
              Telegram
            </p>
            <Image
              src={"/icons/arrow.svg"}
              alt='arrow'
              width={14}
              height={14}
              className='mt-2'
            />
          </Link>
          <Link
            target='_blank'
            href={
              "https://www.instagram.com/poryadok_by_yu?igsh=MXV1dG1vdDloOG16Yw=="
            }
            className='flex items-center gap-3 my-5'
          >
            <p className='text-[22px] my-8 text-[#1A1921] tracking-[-1.1px] leading-4 mobile:leading-none font-semibold'>
              Instagram
            </p>
            <Image
              src={"/icons/arrow.svg"}
              alt='arrow'
              width={14}
              height={14}
              className='mt-2'
            />
          </Link>
          <Link target='_blank' href={"#"} className='flex items-center gap-3'>
            <p className='text-[22px] text-[#1A1921] tracking-[-1.1px] leading-4 mobile:leading-none font-semibold'>
              Facebook
            </p>
            <Image
              src={"/icons/arrow.svg"}
              alt='arrow'
              width={14}
              height={14}
              className='mt-2'
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Burger;
