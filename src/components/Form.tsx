"use client";
import { vetren } from "@/pages";
import Image from "next/image";
import { ChangeEvent, FormEvent, KeyboardEvent, useState } from "react";

type FormData = {
  name: string;
  phone: string;
};

const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "+998",
  });

  const [status, setStatus] = useState<string>("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  const validatePhoneNumber = (phone: string) => {
    const cleanedPhone = phone.replace(/\s+/g, ""); // Удаляем все пробелы
    const phoneRegex = /^\+998\d{9}$/; // Проверка на +998 и 9 цифр
    return phoneRegex.test(cleanedPhone);
  };

  const validateForm = () => {
    const newErrors: { name?: string; phone?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Введите существующее имя";
    }

    if (!validatePhoneNumber(formData.phone)) {
      newErrors.phone = "Введите существующий номер";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!value.startsWith("+998")) {
        setFormData((prevData) => ({
          ...prevData,
          phone: "+998 ",
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          phone: value,
        }));
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }

    setErrors({ ...errors, [name]: undefined });
  };

  const handlePhoneKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (
      !(
        (e.key >= "0" && e.key <= "9") ||
        e.key === "Backspace" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowRight" ||
        e.key === "Delete" ||
        e.key === "Tab"
      )
    ) {
      e.preventDefault();
    }
  };

  const handlePhonePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedData = e.clipboardData.getData("Text");
    if (!/^\d+$/.test(pastedData)) {
      e.preventDefault();
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

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
        setFormData({ name: "", phone: "+998" });
        setErrors({});
      } else {
        setStatus("Ошибка отправки: " + data.error);
      }
    } catch (error) {
      setStatus("Произошла ошибка: " + (error as Error).message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
            className={`outline-none w-full h-[73px] mobile:h-[42px] border ${
              errors.name ? "border-red-500" : "border-[#696868]"
            } pl-[21px] placeholder:text-[#949292]`}
          />
          {errors.name && <p className='text-red-500'>{errors.name}</p>}

          <input
            name='phone'
            type='tel'
            maxLength={13}
            value={formData.phone}
            onChange={handleChange}
            onKeyDown={handlePhoneKeyDown}
            onPaste={handlePhonePaste}
            placeholder='Ваш номер'
            className={`outline-none w-full my-[26px] mobile:my-4 h-[73px] mobile:h-[42px] border ${
              errors.phone ? "border-red-500" : "border-[#696868]"
            } pl-[21px] placeholder:text-[#949292]`}
          />
          {errors.phone && (
            <p className='text-red-500 mt-[-25px] mb-2 mobile:mt-[-17px]'>
              {errors.phone}
            </p>
          )}

          <button
            type='submit'
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
