"use client";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import Modalka from "react-modal";

type FormData = {
  name: string;
  phone: string;
};

interface Props {
  className?: string;
}

const Modal = ({ className }: Props) => {
  const [open, $open] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "+998 ",
  });

  const [status, setStatus] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/sendToTelegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus("Сообщение успешно отправлено!");
        setFormData({ name: "", phone: "" }); // Очистить форму после успешной отправки
      } else {
        setStatus("Ошибка отправки: " + data.error);
      }
    } catch (error) {
      setStatus("Произошла ошибка: " + (error as Error).message);
    }
  };

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
        <form
          onSubmit={
            !!formData.name.length && !!formData.phone.length
              ? handleSubmit
              : () => {}
          }
        >
          <input
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Ваше имя'
            className='outline-none w-full h-[73px] mobile:h-[42px] border border-[#696868] pl-[21px] placeholder:text-[#949292]'
          />
          <input
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            placeholder='Ваш номер'
            className='outline-none w-full my-[20px] mobile:my-4 h-[73px] mobile:h-[42px] border border-[#696868] pl-[21px] placeholder:text-[#949292]'
          />
          <button
            type={
              !!formData.name.length && !!formData.phone.length
                ? "submit"
                : "button"
            }
            className={`w-full h-[73px] mobile:h-[42px] mobile:text-[14px] mobile:tracking-[-0.7px] flex items-center pl-[22px] justify-start bg-[#1A1921] text-white font-medium tracking-[-1px] text-[20px] ${
              status && "!bg-[#027831]"
            }`}
          >
            {status ? "Заявка оставлена" : "Оставить заявку"}
          </button>
        </form>
      </Modalka>
    </>
  );
};

export default Modal;
