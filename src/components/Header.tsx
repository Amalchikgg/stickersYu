"use client";
import Image from "next/image";
import Modal from "./Modal";
import Link from "next/link";
import Burger from "./Burger";

const Header = () => {
  return (
    <header className='w-full pt-12 bg-[white] pb-12 mobile:pb-[36px] mobile:pt-7'>
      <div className='bg-[white] w-full flex items-center justify-between mobile:justify-center mobile:gap-x-[141px]'>
        <Link href={"/"} className='mobile:hidden'>
          <Image
            src={"/icons/logo.svg"}
            alt='logo'
            width={232}
            height={75}
            className='tablet:w-[173.85px] tablet:h-[56.37px] mobile:hidden'
          />
        </Link>
        <Link href={"/"}>
          <Image
            src={"/icons/footerLogo.svg"}
            alt='logo'
            width={116}
            height={88}
            className='hidden mobile:block flex-shrink-0'
          />
        </Link>
        <div className='flex items-center gap-10 tablet:gap-5'>
          <a
            href='#stickers'
            className='text-[20px] font-bold text-[#1A1921] tracking-[-1px] tablet:hidden'
          >
            Наклейки
          </a>
          <a
            href='#caskets'
            className='text-[20px] font-bold text-[#1A1921] tracking-[-1px] tablet:hidden'
          >
            Шкатулки
          </a>
          <a
            href='#goodies'
            className='text-[20px] font-bold text-[#1A1921] tracking-[-1px] tablet:hidden'
          >
            Ништяки
          </a>
          <Burger />
          <Modal className='tablet:w-[130px] mobile:hidden' />
        </div>
      </div>
    </header>
  );
};

export default Header;
