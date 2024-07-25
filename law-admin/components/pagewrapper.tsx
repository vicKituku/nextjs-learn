import { useSideBarToggle } from "@/hooks/use-sidebar-toggle";
import classNames from "classnames";
export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { toggleCollapse } = useSideBarToggle();
  const pageStyle = classNames("bg-slate-50 flex-grow text-black p-2 mt-16 ", {
    ["sm:pl-[5.2rem]"]: toggleCollapse,
    ["sm:pl-[15.2rem]"]: !toggleCollapse,
  });
  return <div className={pageStyle}>{children}</div>;
}
