import { ReactNode } from "react";
import Link from "next/link";

type AboutLayoutProps = {
  children: ReactNode;
};

function AboutLayout(props: AboutLayoutProps) {
  const { children } = props;

  return (
    <section>
      <div className="flex justify-between items-center px-4 bg-amber-600">
        <p className="py-2 text-xl">This is from todo layout</p>
        <nav>
          <Link href="/todo">Todo</Link>
        </nav>
      </div>
      {children}
    </section>
  );
}

export default AboutLayout;
