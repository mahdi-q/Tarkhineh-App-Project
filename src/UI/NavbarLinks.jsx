import CustomNavLink from "./CustomNavLink";
import { CgMenuBoxed } from "react-icons/cg";
import { TbHomePlus } from "react-icons/tb";
import { LuPhoneCall, LuUsersRound } from "react-icons/lu";
import { GoHome } from "react-icons/go";
import { useState } from "react";
import NavbarDropDown from "./NavbarDropDown";

function NavbarLinks() {
  const navbarLinkClass =
    "relative flex items-center gap-x-1 border-b border-b-gray-400 pb-2 text-gray-800 shadow-sm last:border-none last:shadow-none md:border-none md:font-medium md:text-gray-700 md:shadow-none md:hover:text-primary";

  const [isOpenBranch, setIsOpenBranch] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <ul className="flex min-w-64 flex-col gap-y-3 md:flex-row md:items-center md:gap-x-4 lg:gap-x-6">
      <li className={navbarLinkClass}>
        <CustomNavLink to="/">
          <GoHome className="icon md:hidden" />
          <span>صفحه اصلی</span>
        </CustomNavLink>
      </li>

      <li className={navbarLinkClass}>
        <TbHomePlus className="icon mt-1 self-start md:hidden" />

        <NavbarDropDown
          state={isOpenBranch}
          setState={setIsOpenBranch}
          text="شعبه"
          items={[
            { title: "اکباتان", link: "/" },
            { title: "چالوس", link: "/b" },
            { title: "اقدسیه", link: "/c" },
            { title: "ونک", link: "/d" },
          ]}
        />
      </li>

      <li className={navbarLinkClass}>
        <CgMenuBoxed className="icon mt-1 self-start md:hidden" />

        <NavbarDropDown
          state={isOpenMenu}
          setState={setIsOpenMenu}
          text="منو"
          items={[
            { title: "غذای اصلی", link: "/e" },
            { title: "پیش غذا", link: "/f" },
            { title: "دسر", link: "/g" },
            { title: "نوشیدنی", link: "/h" },
          ]}
        />
      </li>

      <li className={`${navbarLinkClass} hidden md:block`}>
        <CustomNavLink to="franchise">
          <span>اعطای نمایندگی</span>
        </CustomNavLink>
      </li>

      <li className={navbarLinkClass}>
        <CustomNavLink to="about-us">
          <LuUsersRound className="icon md:hidden" />
          <span>درباره ما</span>
        </CustomNavLink>
      </li>

      <li className={navbarLinkClass}>
        <CustomNavLink to="contact-us">
          <LuPhoneCall className="icon md:hidden" />
          <span>تماس با ما</span>
        </CustomNavLink>
      </li>
    </ul>
  );
}
export default NavbarLinks;
