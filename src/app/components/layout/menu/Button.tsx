import Image from "next/image";

type ButtonProps = {
  price: number;
};

export const Button = ({ price }: ButtonProps) => {
  return (
    <button className="border-red-custom border-2 rounded-[81px] px-[28px] py-5 flex items-center text-red-custom gap-8 cursor-pointer hover:bg-red-custom hover:text-white">
      ${price} <span>Add to Basket</span> 
      <Image 
        src={"/buttonheart.svg"}
        alt="like button"
        width={30}
        height={30}
      />
    </button>
  );
};
