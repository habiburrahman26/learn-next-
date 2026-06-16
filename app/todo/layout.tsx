import { ReactNode } from "react";

type AboutLayoutProps = {
  children: ReactNode;
};

function AboutLayout(props: AboutLayoutProps) {
  const { children } = props;

  return (
    <section>
      <nav className="py-2 bg-amber-600 text-center text-xl">
        <p>This is from todo layout</p>
      </nav>
      {children}
    </section>
  );
}

export default AboutLayout;
