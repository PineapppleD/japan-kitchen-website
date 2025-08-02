import Image from 'next/image'
import React from 'react'

export const Footer = () => {
  return (
    <div className='w-full py-[102px] xl:px-[105px] px-[20px]'>
        <ul className='flex justify-between bg-secondary-bg rounded-[50px] px-[100px] py-[60px] flex-wrap gap-4'>
            <li>
                <h2 className='text-red-custom text-3xl mb-8'>Working hours</h2>

                <div>
                    <p className='text-main-text text-2xl mb-4'>Seven days a week</p>
                    <p className='text-main-text text-2xl'>From <span className='text-red-custom'>8:00</span> to <span className='text-red-custom'>00:00</span></p>
                </div>
            </li>
            <li>
                <h2 className='text-red-custom text-3xl mb-8'>Phone Numbers</h2>

                <div>
                    <p className='text-main-text text-2xl mb-4'>Call only during business hours</p>
                    <p className='text-main-text text-2xl'><span className='text-red-custom'>(</span>555<span className='text-red-custom'>)</span> 555<span className='text-red-custom'>-</span>1234</p>
                </div>
            </li>
            <li>
                <h2 className='text-red-custom text-3xl mb-8'>Our Social networks</h2>

                <div>
                    <p className='text-main-text text-2xl flex gap-4 mb-4'>
                        <Image 
                            src='/instagramfooter.svg'
                            alt='japanese_restaraunt instagram'
                            width={20}
                            height={20}
                        />
                        Japanese_restaurant_
                    </p>
                    <p className='text-main-text text-2xl flex gap-4'>
                        <Image 
                            src='/telegramfooter.svg'
                            alt='japanese_restaraunt telegram'
                            width={20}
                            height={20}
                        />
                        Japanese_restaurant|Tl
                    </p>
                </div>
            </li>
        </ul>
    </div>
  )
}
