"use client"

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Breadcrumb() {
  const pathname = usePathname(); // 'menu/order'
  const segments = pathname.split("/").filter(Boolean); // ['menu', 'order']

  return (
    <nav className="flex items-center text-main-text my-10">
      <Link href="/" className="hover:underline">Home</Link>
      {segments.map((segment, i) => {
        const href = segments.slice(0, i + 1).join("/");
        const isLast = i === segments.length - 1;

        return (
          <div key={i} className="flex items-center gap-2 ml-2">
            <span className="inline-block w-[6px] h-[6px] rounded-full bg-red-custom"></span>
            {isLast ? (
              <span>{segment.replace(/-/g, " ")}</span>
            ) : (
              <Link href={href} className="hover:underline">{segment.replace(/-/g, " ")}</Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
