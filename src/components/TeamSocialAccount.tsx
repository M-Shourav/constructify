import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";
interface props {
  className?: string;
}

const TeamSocialAccount = ({ className }: props) => {
  const SocialLinks = [
    {
      _id: "001",
      icons: <FaFacebookF />,
      href: "https://web.facebook.com/profile.php?id=100027878711748",
    },
    {
      _id: "002",
      icons: <FaXTwitter />,
      href: "https://x.com/MasumAh68543",
    },
    {
      _id: "004",
      icons: <FaInstagram />,
      href: "https://www.instagram.com/masum_shourav/",
    },
  ];
  return (
    <div className={twMerge("flex items-center gap-2 mt-3", className)}>
      {SocialLinks?.map((item) => (
        <Link
          key={item?._id}
          href={item?.href}
          target="blank"
          className="text-sm bg-black/60 rounded-full
           text-white px-3 py-3 hover:bg-black duration-300 ease-in-out "
        >
          {item?.icons}
        </Link>
      ))}
    </div>
  );
};

export default TeamSocialAccount;
