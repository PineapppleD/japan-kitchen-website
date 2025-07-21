import clsx from "clsx";
import Image from "next/image";

const actionImages = [
  {
    src: "/heart.svg",
    alt: "favorite food",   
    width: 30,
    height: 30,
  },
  {
    src: "/cart.svg",
    alt: "cart",
    width: 30,
    height: 30,
  },
  {
    src: "/profile.svg",
    alt: "log in",
    width: 35,
    height: 35,
  },
];

export const HeaderActions = () => {
  return (
    <ul className="flex items-center gap-4 md:gap-2 lg:gap-6">
      {actionImages.map((image, index) => (
        <li key={index} 
        className={clsx({
          "w-[30px] md:w-[20px] lg:w-[30px]": image.width === 30,
          "w-[35px] md:w-[20px] lg:w-[35px]": image.width === 35,
        })}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        </li>
      ))}
    </ul>
  );
};
