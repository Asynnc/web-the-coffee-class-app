import { NavItem } from "@/utils/navLink";
import Link from "next/link";

export type BreadcrumbsProps = {
  items: NavItem[];
};

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <div className="flex gap-2 items-start text-zinc-400">
      {items.map((crumb, i) => {
        const isLastItem = i === items.length - 1;
        if (!isLastItem) {
          return (
            <>
              {crumb.children && (
                crumb.children.map((child, i) => (
                  <>
                    <Link
                      href={String(child.href)}
                      key={i}
                      className="text-orange-200 hover:text-indigo-400 hover:underline">
                      {child.label}
                    </Link>
                    <span> / </span >
                  </>
                ))
              )}
            </>
          );
        } else {
          return crumb.label;
        }
      })}
    </div >
  );
};
export default Breadcrumbs;
