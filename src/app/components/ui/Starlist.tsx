import Image from 'next/image';
import React from 'react';

type StarListProps = {
  rating: number;
};

export const Starlist = ({ rating }: StarListProps) => {
  return (
    <ul className="flex gap-1">
      {Array.from({ length: 5 }).map((_, index) => {
        const current = index + 1;

        return (
          <li key={index}>
            {current <= Math.floor(rating) ? (
              <Image
                src="/starfull.svg"
                alt="full star"
                width={25}
                height={25}
              />
            ) : current - 0.5 === rating ? (
              <Image
                src="/starhalf.svg"
                alt="half star"
                width={25}
                height={25}
              />
            ) : (
              <Image
                src="/starempty.svg"
                alt="empty star"
                width={25}
                height={25}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};
