"use client";
import { SideNavItem } from "@/types/types";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import { useState } from "react";
import { usePathname } from "next/navigation";

export const SideBarMenuItem = ({
  item,
  toggleCollapse,
}: {
  item: SideNavItem;
  toggleCollapse: boolean;
}) => {
  const pathName = usePathname();
  const linkStyle =
    "flex items-center  min-h-[40px] h-full text-[#6e768e] hover:text-white py-2 px-4 transition duration-200";
  const activeLinkStyle =
    "rounded-md text-white light:text-black light:bg-[#efefef] bg-[#3a3f48]";
  const navMenuDropDownItem =
    "text-[#6e768e] py-2 px-4 hover:text-white transition duration-200";
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };
  return (
    <>
      {item.submenu ? (
        <div>
          <a
            className={`${linkStyle} ${
              pathName.includes(item.path) ? activeLinkStyle : ""
            }`}
            onClick={toggleSubMenu}
          >
            {item.icon}
            {!toggleCollapse && (
              <>
                <span className="ml-3 leading-6 font-semibold">
                  {item.title}
                </span>
                <BsChevronRight
                  className={`${
                    subMenuOpen ? "rotate-90" : ""
                  } ml-auto stroke-2 text-xs`}
                />
              </>
            )}
          </a>
          {subMenuOpen && (
            <div className="bg-[#3a3f48] border-l-4">
              <div className="grid gap-y-2 px-10 py-3 leading-5">
                {item.subMenuItems?.map((subItem, idx) => {
                  return (
                    <Link href={subItem.path} key={idx}>
                      <span
                        className={`${navMenuDropDownItem} ${
                          subItem.path === pathName ? "text-white" : ""
                        }`}
                      >
                        {subItem.title}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      ) : (
        <Link
          href={item.path}
          className={`${linkStyle} ${
            item.path === pathName ? activeLinkStyle : ""
          }`}
        >
          {item.icon}
          {!toggleCollapse && (
            <span className="ml-3 leading-6 font-semibold">{item.title}</span>
          )}
        </Link>
      )}
    </>
  );
};
