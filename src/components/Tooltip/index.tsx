import { FC, ReactNode, useRef } from "react";

interface Props {
  children: ReactNode;
  tooltip?: string | null | undefined;
}

const ToolTip: FC<Props> = ({ children, tooltip }) => {
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const container = useRef<HTMLDivElement>(null);

  return (
    <div ref={container} className="group relative inline-block">
      {children}
      {tooltip ? (
        <span
          ref={tooltipRef}
          className="invisible z-50 inline-block group-hover:visible group-hover:z-50 opacity-0 group-hover:opacity-100 transition duration-150 ease-in-out bg-orange-500 text-white px-6 pb-2 pt-2.5 text-xs font-medium leading-normal uppercase rounded-md absolute top-full whitespace-nowrap"
        >
          {tooltip}
        </span>
      ) : (null)}
    </div>
  );
};

export { ToolTip };
