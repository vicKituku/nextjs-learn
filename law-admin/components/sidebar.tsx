import { SIDENAV_ITEMS } from "@/SIDEBAR_CONSTANTS";
import { SideBarMenuItem } from "./sidebar-menu-item";
import classNames from "classnames";
export default function SideBar({
  toggleCollapse,
}: {
  toggleCollapse: boolean;
}) {
  const asideStyle = classNames(
    "fixed bg-[#31353d] text-gray-500 z-50 h-full shadow-lg shadow-gray-900/20 transition duration-300 ease-in-out",
    {
      ["sm:w-[5rem] sm:left-0 left-[-100%]"]: toggleCollapse,
      ["w-[15rem]"]: !toggleCollapse,
    }
  );
  return (
    <aside className={asideStyle}>
      <div className="items-center py-5">
        <h1 className="w-full text-white font-bold text-2xl mx-3.5">LA</h1>
      </div>
      <nav className="flex flex-col gap-2 transition duration-300">
        <div className="flex flex-col gap-2 px-4">
          {SIDENAV_ITEMS.map((item, index) => {
            return (
              <SideBarMenuItem
                key={index}
                item={item}
                toggleCollapse={toggleCollapse}
              />
            );
          })}
        </div>
      </nav>
    </aside>
  );
}
