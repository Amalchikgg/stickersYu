"use client";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState, KeyboardEvent } from "react";
import Modalka from "react-modal";

type FormData = {
  name: string;
  phone: string;
  telegram_username: string;
};

interface Props {
  className?: string;
}

const Modal = ({ className }: Props) => {
  const [open, $open] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "+998",
    telegram_username: "",
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
      // Удаляем все пробелы и предотвращаем стирание +998
      let phoneValue = value.replace(/\s+/g, ""); // Удаление пробелов
      if (!phoneValue.startsWith("+998")) {
        phoneValue = "+998"; // Блокируем удаление префикса
      }
      setFormData((prevData) => ({
        ...prevData,
        phone: phoneValue,
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
    if (name === "telegram_username") {
      let userNameValue = value.replace(/\s+/g, "");
      if (!userNameValue.startsWith("@")) {
        userNameValue = "@" + userNameValue; // Блокируем удаление префикса
      }
      setFormData((prevData) => ({
        ...prevData,
        telegram_username: userNameValue,
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }

    setErrors({ ...errors, [name]: undefined });
  };

  const handlePhoneKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const isNumberOrControlKey =
      (e.key >= "0" && e.key <= "9") ||
      e.key === "Backspace" ||
      e.key === "ArrowLeft" ||
      e.key === "ArrowRight" ||
      e.key === "Delete" ||
      e.key === "Tab";

    if (!isNumberOrControlKey) {
      e.preventDefault(); // Блокируем любые неразрешённые клавиши
    }

    // Блокируем удаление префикса +998
    if (e.key === "Backspace" && formData.phone.length <= 4) {
      e.preventDefault();
    }
  };

  const handleUsernameKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    // Блокируем удаление префикса +998
    if (e.key === "Backspace" && formData.phone.length <= 1) {
      e.preventDefault();
    }
  };

  const handlePhonePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedData = e.clipboardData.getData("Text");
    const cleanedData = pastedData.replace(/\s+/g, ""); // Удаляем все пробелы при вставке
    if (!/^\d+$/.test(cleanedData)) {
      e.preventDefault(); // Разрешаем только цифры
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
        setFormData({ name: "", phone: "+998", telegram_username: "" });
        setErrors({});
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
        <form onSubmit={handleSubmit}>
          <input
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Ваше имя'
            className={`outline-none w-full h-[73px] mobile:h-[42px] border ${
              errors.name ? "border-[#9A0000]" : "border-[#696868]"
            } pl-[21px] placeholder:text-[#949292]`}
          />
          {errors.name && <p className='text-[#9A0000]'>{errors.name}</p>}

          <input
            name='phone'
            type='tel'
            maxLength={13}
            value={formData.phone}
            onChange={handleChange}
            onKeyDown={handlePhoneKeyDown}
            onPaste={handlePhonePaste}
            placeholder='Ваш номер'
            className={`outline-none w-full my-[20px] mobile:my-4 h-[73px] mobile:h-[42px] border ${
              errors.phone ? "border-[#9A0000]" : "border-[#696868]"
            } pl-[21px] placeholder:text-[#949292]`}
          />
          {errors.phone && (
            <p className='text-[#9A0000] mt-[-20px] mb-2 mobile:mt-[-15px]'>
              {errors.phone}
            </p>
          )}

          <input
            name='telegram_username'
            value={formData.telegram_username}
            onChange={handleChange}
            onKeyDown={handleUsernameKeyDown}
            onPaste={handlePhonePaste}
            placeholder='Telegram-username (необязательно)'
            className={`outline-none w-full h-[73px] mb-[20px] mobile:mb-4 text-lg mobile:text-sm mobile:h-[42px] border border-[#696868] pl-[21px] placeholder:text-[#949292]`}
          />

          <p className='font-medium text-[20px] tracking-[-1px] text-[#949292] mb-[26px] mobile:mb-4 mobile:text-[14px] mobile:tracking-[-0.7px]'>
            Не дозвонимся — напишем в Telegram.
          </p>

          <button
            type='submit'
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
