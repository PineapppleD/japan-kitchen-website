import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Order online", href: "/order" },
  { name: "Book", href: "/booking" },
  { name: "Shipping and Payment", href: "/shipping" },
  { name: "Contacts", href: "contacts" },
];

export const NavList = () => {
  return (
    <ul className="flex items-center gap-4 lg:gap-8 flex-col md:flex-row">
      {navItems.map((item, index) => (
        <li
          key={String(index) + item}
          className="font-alegreya text-main-text text-base md:text-[14px] lg:text-base"
        >
          <Link href={item.href}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};
