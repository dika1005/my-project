"use client";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

const socialLinks = [
  {
    href: "https://github.com/dika1005",
    Icon: AiFillGithub,
    label: "GitHub",
    target: "_blank",
  },
  {
    href: "https://x.com/MassRama21",
    Icon: AiOutlineTwitter,
    label: "X (Twitter)",
    target: "_blank",
  },
  {
    href: "https://www.facebook.com/profile.php?id=100087939921684&locale=id_ID",
    Icon: AiFillFacebook,
    label: "Facebook",
    target: "_blank",
  },
  {
    href: "https://www.instagram.com/mas_dikk21/",
    Icon: AiFillInstagram,
    label: "Instagram",
    target: "_blank",
  },
  {
    href: "https://telegram.org",
    Icon: FaTelegramPlane,
    label: "Telegram",
    target: "_blank",
  },
];

export const Footer = () => {
  return (
    <footer className="py-8 max-w-[1200px] mx-auto px-4">
      <div className="mt-12 flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="text-gray-200">© 2024. All rights reserved.</p>

        <ul className="flex gap-5 flex-wrap">
          {socialLinks.map(({ href, Icon, label }) => (
            <button
              key={label}
              onClick={() => window.open(href, "_blank", "noopener,noreferrer")}
              aria-label={label}
              className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full
                         hover:text-gray-400 transition-colors"
            >
              <Icon size={30} />
            </button>
          ))}
        </ul>
      </div>
    </footer>
  );
};
