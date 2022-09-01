import { FC } from "react";

const Background: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <main className="bg-white dark:bg-black transition-all min-h-full">{children}</main>
  );
};

export default Background;
