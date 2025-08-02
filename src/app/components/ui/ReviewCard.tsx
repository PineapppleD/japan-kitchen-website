import Image from "next/image";
import { Starlist } from "./Starlist";

type ReviewCardProps = {
  imageSrc: string;
  author: string;
  rating: number;
  reviewText: string;
};

export const ReviewCard = ({
  imageSrc,
  author,
  rating,
  reviewText,
}: ReviewCardProps) => {
  return (
    <div className="flex items-center gap-6">
        <div className="w-[150px]">
            <Image className="min-w-[150px]" src={imageSrc} alt={`review from user ${author}`} width={150} height={150}/>
        </div>
        <div>
            <h2 className="font-bold text-2xl text-main-text">{author}</h2> 
            <Starlist rating={rating}/>
            <p className="w-[340px]">{reviewText}</p>
        </div>
    </div>
  );
};
