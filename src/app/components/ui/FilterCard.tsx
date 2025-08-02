import clsx from "clsx";

type FilterCardProps = {
    className?: string;
    children: React.ReactNode;
    isActive: boolean;
    onClick?: () => void;
};

export const FilterCard = ({className, children, isActive, onClick}: FilterCardProps) => {
  return (
    <li className={clsx({
        "rounded-[25px] px-6 py-1 md:px-[35px] md:py-[8px] text-[16px] md:text-2xl cursor-pointer": true,
        "bg-secondary-bg text-main-text": !isActive,
        "bg-main-text text-white": isActive,
    }, className
    )}
    onClick={onClick}>
     {children}   
    </li>
  )
}
