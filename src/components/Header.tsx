import Image from "next/image";
import Modal from "./Modal";

const Header = () => {
  return (
    <header className='w-full pt-12 bg-[white] pb-12'>
      <div className=' bg-[white] w-full flex items-center justify-between'>
        <p className='text-[#1A1921] font-bold text-[20px] tracking-[-1px] mobile:hidden'>
          +998 99 999 99 99
        </p>
        <Image
          src={"/icons/logo.svg"}
          alt='logo'
          width={232}
          height={75}
          className='tablet:w-[173.85px] tablet:h-[56.37px] mobile:hidden'
        />
        <Image
          src={"/icons/footerLogo.svg"}
          alt='logo'
          width={116}
          height={88}
          className='hidden mobile:block'
        />
        <Modal className='tablet:w-[130px]' />
      </div>
    </header>
  );
};

export default Header;
