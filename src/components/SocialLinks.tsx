import Link from "next/link";
import React from "react";
import { FaFacebookF, FaGooglePlusG, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialLinks = () => {
  const SocialArray = [
    {
      _id: "01",
      icons: <FaFacebookF />,
      href: "https://web.facebook.com/profile.php?id=100027878711748",
    },
    {
      _id: "02",
      icons: <FaXTwitter />,
      href: "https://x.com/MasumAh68543",
    },
    {
      _id: "03",
      icons: <FaGooglePlusG />,
      href: "mailto:muhammadshourav625@gmail.com",
    },
    {
      _id: "04",
      icons: <FaInstagram />,
      href: "https://www.instagram.com/masum_shourav/",
    },
  ];
  return (
    <div className="flex items-center gap-5">
      {SocialArray?.map((item) => (
        <Link
          key={item?._id}
          href={item?.href}
          target="blank"
          className="w-8 h-8 flex items-center justify-center rounded-full bg-black/80
          text-white hover:bg-orange-500 duration-300"
        >
          {item?.icons}
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
