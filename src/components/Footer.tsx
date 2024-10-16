import Image from "next/image";
import Container from "./Container";
import Link from "next/link";

const Footer = () => {
  return (
    <Container>
      <footer className='flex items-center justify-between pb-[90px] tablet:flex-col tablet:gap-y-[67px] mobile:gap-y-[57px]'>
        <Link href={"/"}>
          <Image
            src={"/icons/footerLogo.svg"}
            alt='logo'
            width={140}
            height={106}
          />
        </Link>
        <div>
          <Link
            href={`https://yandex.ru/maps/?text=ул.Кушкуприк 30.Ташкент.Узбекистан`}
            target='_blank'
            className='flex items-center gap-2 mb-5'
          >
            <p className='text-[22px] text-[#1A1921] mobile:text-[18px] mobile:tracking-[-0.9px] tracking-[-1.1px] leading-5'>
              ул. Кушкуприк 30. Ташкент. Узбекистан
            </p>
            <Image
              src={"/icons/arrow.svg"}
              alt='arrow'
              width={14}
              height={14}
              className='mt-2'
            />
          </Link>
          {/* <p className='text-[22px] tablet:text-center text-[#1A1921] mobile:text-[18px] mobile:tracking-[-0.9px] mb-5 tracking-[-1.1px] leading-6'>
            poryadokbyYuwki@gmail.com
          </p> */}
          <p className='text-[22px] tablet:text-center text-[#1A1921] mobile:text-[18px] mobile:tracking-[-0.9px] tracking-[-1.1px] leading-6'>
            +998 77 120 07 70
          </p>
        </div>
        <div className='tablet:w-full tablet:flex tablet:justify-between mobile:items-center mobile:flex-col mobile:gap-y-[32px]'>
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
            <p className='text-[22px] text-[#1A1921] tracking-[-1.1px] leading-4 mobile:leading-none font-semibold'>
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
      </footer>
    </Container>
  );
};

export default Footer;
