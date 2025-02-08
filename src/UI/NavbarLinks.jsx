import CustomNavLink from "./CustomNavLink";
import { CgMenuBoxed } from "react-icons/cg";
import { TbHomePlus } from "react-icons/tb";
import { LuPhoneCall, LuUsersRound } from "react-icons/lu";
import { GoHome } from "react-icons/go";
import { useState } from "react";
import NavbarDropDown from "./NavbarDropDown";
import { useLocation } from "react-router-dom";

const branches = {
  ekbatan: "اکباتان",
  aghdasiyeh: "اقدسیه",
  chalos: "چالوس",
  vanak: "ونک",
};

const menus = ["main-food", "appetizer", "dessert", "drink"];

function NavbarLinks() {
  const navbarLinkClass =
    "relative flex items-center gap-x-1 border-b border-b-gray-400 pb-2 text-sm text-gray-800 shadow-sm last:border-none last:shadow-none md:border-none md:font-medium md:text-gray-700 md:shadow-none md:hover:text-primary lg:text-base";

  const [isOpenBranch, setIsOpenBranch] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const { pathname } = useLocation();

  return (
    <ul className="flex min-w-64 flex-col gap-y-3 px-4 md:flex-row md:items-center md:gap-x-4 md:px-0 lg:gap-x-6">
      <li className={navbarLinkClass}>
        <CustomNavLink to="/">
          <GoHome className="icon md:hidden" />
          <span>صفحه اصلی</span>
        </CustomNavLink>
      </li>

      <li className={navbarLinkClass}>
        <TbHomePlus className="icon self-start md:hidden" />

        <NavbarDropDown
          state={isOpenBranch}
          setState={setIsOpenBranch}
          text={branches[pathname.split("/")[2]] || "شعبه"}
          isSelected={branches[pathname.split("/")[2]]}
          items={[
            { title: "اکباتان", link: "/branch/ekbatan" },
            { title: "چالوس", link: "/branch/chalos" },
            { title: "اقدسیه", link: "/branch/aghdasiyeh" },
            { title: "ونک", link: "/branch/vanak" },
          ]}
        />
      </li>

      <li className={navbarLinkClass}>
        <CgMenuBoxed className="icon mt-1 self-start md:hidden" />

        <NavbarDropDown
          state={isOpenMenu}
          setState={setIsOpenMenu}
          text="منو"
          isSelected={menus.includes(pathname.split("/")[2])}
          items={[
            { title: "غذای اصلی", link: "/menu/main-food" },
            { title: "پیش غذا", link: "/menu/appetizer" },
            { title: "دسر", link: "/menu/dessert" },
            { title: "نوشیدنی", link: "/menu/drink" },
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
