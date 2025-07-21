import Image from "next/image"

export const Search = () => {
  return (
    <>
            <div
                className="md:hidden xl:block w-[141px] py-1 px-2.5 bg-secondary-bg rounded-4xl relative my-4 lg:mr-10 md:my-0">
                <input 
                    type="text" 
                    placeholder="Search"
                    className="max-w-[85%] font-alegreya outline-none border-none text-main-text"
                />
                <Image 
                    src="/search.svg" 
                    alt="search in site"
                    className="absolute top-1/2 -translate-y-1/2 right-[10px]" 
                    width={14}
                    height={14}
                />
            </div>
            <div className="hidden md:block xl:hidden">
                <Image 
                    src="/search.svg" 
                    alt="search in site" 
                    className="mr-5 cursor-pointer" 
                    width={14}
                    height={14}
                />
            </div>
    </>
  )
}
