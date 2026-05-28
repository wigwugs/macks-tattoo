import { type HTMLAttributes } from "react";

type SectionProps = HTMLAttributes<HTMLElement> & {
  id?: string;
  className?: string;
  children: React.ReactNode;
  innerClassName?: string;
};

export default function Section({
  id,
  className = "",
  innerClassName = "",
  children,
  ...rest
}: SectionProps) {
  return (
    <section
      id={id}
      className={["py-24 md:py-32 px-5 md:px-16", className].join(" ")}
      {...rest}
    >
      <div className={["max-w-site mx-auto", innerClassName].join(" ")}>
        {children}
      </div>
    </section>
  );
}
