import Image from 'next/image';
import { Heading } from '../../ui/Heading';

export const AboutUsSection = () => {
  return (
    <div className="w-full xl:px-[105px] px-[20px] mt-20">
        <Heading className="text-main-text text-8xl font-bonzai mb-10">About Us</Heading>
        <div className="flex justify-center lg:justify-between items-center flex-wrap">
            {/* <!-- 1st column --> */}
            <div className="basis-[470px]">
                <div className="bg-secondary-bg py-[49px] px-[61px] font-alegreya text-main-text w-[450px] rounded-3xl mb-12">
                    <p>
                        Our restaurant is a place where you can immerse yourself in the atmosphere of real Japanese
                        culture.
                        We strive to offer an unparalleled experience for all
                        our guests, from exquisite interiors to superb cuisine.
                    </p>
                </div>
                <div className="w-[450px] h-[460px] rounded-3xl">
                    <Image 
                        src="/aboutus1.png" 
                        alt="japanese restaraunt"
                        width={450}
                        height={460}
                    />
                </div>
            </div>
            {/* <!-- 2nd column --> */}
            <div className="hidden xl:block">
                <p className="text-main-text/15 font-bonzai text-8xl">
                    最<br/>高<br/>の<br/>レ<br/>ス<br/>ト<br/>ラ<br/>ン
                </p>
            </div>
            {/* <!-- 3rd column --> */}
            <div>
                <div className="w-[450px] rounded-3xl h-[250px]">
                    <Image 
                        src="/aboutus2.png" 
                        alt="japanese restaraunt"
                        width={450}
                        height={250}
                    />
                    
                </div>
                <div>
                    <p className="bg-secondary-bg py-[49px] px-[61px] font-alegreya text-main-text w-[450px] rounded-3xl mb-12">
                        Our restaurant is a place where you can immerse yourself in the atmosphere of real Japanese
                        culture.
                        We strive to offer an unparalleled experience for all
                        our guests, from exquisite interiors to superb cuisine.
                    </p>
                </div>
                <div className="w-[450px] rounded-3xl h-[250px]">
                    <Image 
                        src="/aboutus3.png" 
                        alt="japanese restaraunt"
                        width={450}
                        height={250}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}
