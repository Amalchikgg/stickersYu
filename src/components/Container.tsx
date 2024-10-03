import React, { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className='max-w-[1440px] w-full m-[0_auto] px-[130px] tablet:max-w-[834px] tablet:px-[112px] mobile:max-w-[375px] mobile:px-4'>
      {children}
    </div>
  );
};

export default Container;
