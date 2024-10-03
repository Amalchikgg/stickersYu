"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Modalka from "react-modal";

interface Props {
  className?: string;
}

const Modal = ({ className }: Props) => {
  const [open, $open] = useState(false);

  return (
    <>
      <button
        onClick={() => $open(true)}
        className={`w-[166px] h-[46px] border bg-white border-[#1A1921] text-[#1A1921] font-bold text-[20px] tracking-[-1px] ${className}`}
      >
        Заказать
      </button>
      <Modalka
        isOpen={open}
        onRequestClose={() => $open(false)}
        contentLabel='Свяжитесь с нами'
        className='bg-white w-[757px] h-auto mobile:w-[293px] tablet:w-[634px] mobile:pt-10 tablet:h-[auto] tablet:pt-[60px] tablet:pb-[60px] tablet:px-[27px] px-[37px] pb-[49px] pt-[58px] relative outline-none' // Стили Tailwind для модалки
        overlayClassName='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center' // Стили Tailwind для overlay
      >
        <Image
          src='/icons/close.svg'
          alt='close'
          width={65}
          height={65}
          className='cursor-pointer absolute top-3 right-[15px] tablet:top-[45px] tablet:right-[27px] mobile:w-10 mobile:h-10 mobile:top-8 mobile:right-5'
          onClick={() => $open(false)}
        />
        <p className='font-bold text-[#494949] text-[40px] mobile:text-[27px] mobile:leading-none mobile:tracking-[-1.35px] mobile:w-[173px] leading-5 tracking-[-2px] mt-[-10px]'>
          Не упусти возможность,
        </p>
        <p className='font-bold text-[#000000] text-[40px] mobile:text-[27px] mobile:leading-none mobile:tracking-[-1.35px] mobile:w-[173px] tracking-[-2px] mb-8'>
          Свяжись сейчас!
        </p>
        <div className='h-[1px] bg-[#BBBBBB] mb-8' />
        <div className='flex items-center justify-between tablet:flex-col tablet:gap-y-10 tablet:items-start'>
          <Link
            onClick={() => $open(false)}
            target='_blank'
            href='#'
            className='flex items-center gap-4'
          >
            <Image
              src='/icons/telegram.svg'
              alt='telegram'
              width={48}
              height={48}
              className='mobile:w-8 mobile:h-8'
            />
            <p className='text-black font-bold text-[32px] tracking-[-1.6px]'>
              Telegram
            </p>
          </Link>
          <Link
            onClick={() => $open(false)}
            target='_blank'
            href={
              "https://www.instagram.com/poryadok_by_yu?igsh=MXV1dG1vdDloOG16Yw=="
            }
            className='flex items-center gap-4'
          >
            <Image
              src='/icons/instagram.svg'
              alt='instagram'
              width={48}
              height={48}
              className='mobile:w-8 mobile:h-8'
            />
            <p className='text-black font-bold text-[32px] tracking-[-1.6px]'>
              Instagram
            </p>
          </Link>
          <Link
            onClick={() => $open(false)}
            target='_blank'
            href='#'
            className='flex items-center gap-4'
          >
            <Image
              src='/icons/facebook.svg'
              alt='facebook'
              width={48}
              height={48}
              className='mobile:w-8 mobile:h-8'
            />
            <p className='text-black font-bold text-[32px] tracking-[-1.6px]'>
              Facebook
            </p>
          </Link>
        </div>
      </Modalka>
    </>
  );
};

export default Modal;
