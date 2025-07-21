import localFont from 'next/font/local';

const bonzai = localFont({
  src: "../../fonts/bonzai.ttf",
  variable: "--font-bonzai",
});
type HeadingProps = {
    children: React.ReactNode;
    className: string;
}

export const Heading = ({children, className}: HeadingProps) => {
  return (
    <h1 className={`${className} ${bonzai.className}`}>
        {children}
    </h1>
  )
}
