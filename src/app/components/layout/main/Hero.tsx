import Image from 'next/image';
import { Heading } from '../../ui/Heading';
import { Button } from '../../common/Button';

export const Hero = () => {
  return (
     <div
        className="flex w-full xl:px-[105px] px-[20px] mt-10 items-center sm:items-start gap-6 sm:gap-0 flex-col sm:flex-row">
        {/* <!-- Hero text block --> */}
        <div className="w-[90%] md:w-[49.7%] flex flex-col items-center sm:block text-center sm:text-start">
            <Heading className="font-bonzai text-main-text  text-[88px]/[70%] lg:text-9xl xl:text-10xl">Japanese restaraunt</Heading>
            <p
                className="text-[15px] sm:text-[20px] xl:text-2xl text-main-text font-alegreya mt-5 mb-5 lg:mt-12 lg:mb-16 w-[90%] lg:w-[70%]">
                Welcome to our Japanese cuisine restaurant !
                We are proud to offer authentic Japanese dishes prepared using only fresh and quality ingredients.
            </p>
            <div>
                <Button className="mr-4">Reserve a table</Button>
                <Button>Order</Button>
            </div>
        </div>
        {/* <!-- Hero japanese vertical text --> */}
        <p className="text-8xl xl:text-[115px]/[113%] text-main-text/15 hidden lg:block">食<br/>欲<br/>旺<br/>盛</p>
        {/* <!-- Hero image --> */}
        <Image src="/heroimage.svg" alt="very tasty ramen"
            className="w-[40%] aspect-square sm:ml-auto lg:w-[36%]" width={100} height={100}/>
    </div>
  )
}
