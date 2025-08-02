type ButtonProps = {
    className?: string;
    children: React.ReactNode;
}

export const Button = ({className, children}: ButtonProps) => {
  return (
    <button className={`bg-red-custom rounded-[20px] lg:rounded-[36px] py-2 px-4 lg:py-4 lg:px-8 text-white text-[18px] lg:text-2xl font-alegreya cursor-pointer focus:outline-none focus:border-none focus:ring-0 focus:shadow-none ${className}`}>{children}</button>
  )
}