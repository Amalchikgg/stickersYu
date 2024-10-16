import React, { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className='max-w-[1210px] w-full m-[0_auto] px-[13px] tablet:max-w-[630px] tablet:px-[10px] mobile:max-w-[375px] mobile:px-4'>
      {children}
    </div>
  );
};

export default Container;
