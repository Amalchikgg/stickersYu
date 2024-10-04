"use client";
import { vetren } from "@/pages";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";

type FormData = {
  name: string;
  phone: string;
};

const Form = () => {
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
    <form
      onSubmit={
        !!formData.name.length && !!formData.phone.length
          ? handleSubmit
          : () => {}
      }
    >
      <p
        className={`${vetren.className} tablet:hidden leading-[80px] text-[96px] tracking-[-4.8px] text-[#1A1921] mb-[81px] text-center`}
      >
        СВЯЖИСЬ СЕЙЧАС
      </p>
      <div className='flex items-start justify-between mb-[100px] tablet:mb-[60px] tablet:flex-col tablet:items-center'>
        <Image
          src={"/icons/starBig.svg"}
          alt='star'
          width={63}
          height={106}
          className='mt-[35px] tablet:mt-0 tablet:mb-[41px] mobile:mb-[37px] mobile:w-[46px] mobile:76px'
        />
        <p
          className={`${vetren.className} tablet:block hidden mobile:mb-[37px] mobile:leading-normal leading-[80px] mobile:text-[48px] mobile:tracking-[-2.4px] text-[86px] tracking-[-4.3px] text-[#1A1921] mb-[45px] text-center`}
        >
          СВЯЖИСЬ СЕЙЧАС
        </p>
        <div className='w-[763px] tablet:w-full'>
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
            className='outline-none w-full my-[26px] mobile:my-4 h-[73px] mobile:h-[42px] border border-[#696868] pl-[21px] placeholder:text-[#949292]'
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
        </div>
        <Image
          src={"/icons/starBig.svg"}
          alt='star'
          width={63}
          height={106}
          className='mt-[35px] tablet:hidden'
        />
      </div>
      <div className='bg-[#BBBBBB] h-[1px] w-full mb-[100px] tablet:mb-[60px]' />
    </form>
  );
};

export default Form;
