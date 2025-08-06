import Image from "next/image";

type ButtonProps = {
  price: number;
  onclick: () => void;
};

export const Button = ({ price, onclick }: ButtonProps) => {
  return (
    <button className="rounded-[81px] px-[28px] py-5 flex items-center text-white gap-8 cursor-pointer hover:bg-red-custom bg-red-custom"
    onClick={onclick}
    >
      ${price} <span>Add to Basket</span> 
      <Image 
        className="hover:scale-90"
        src={"/buttonheart.svg"}
        alt="like button"
        width={30}
        height={30}
      />
    </button>
  );
};
