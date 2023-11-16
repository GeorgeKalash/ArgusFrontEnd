import { useQuery } from "@tanstack/react-query";
import { getMenuItems } from "@/apis";

import argusLogo from "@/assets/ArgusLogo.png";

export const Layout = ({ children }) => {
  const { data: menuData } = useQuery({
    queryKey: ["menuItems"],
    queryFn: () => getMenuItems(),
  });

  return (
    <div className="flex flex-col">
      <div className="bg-black p-4">
        <img className="w-[10%]" src={argusLogo} />
      </div>
      <div className="mt-10">{children}</div>
    </div>
  );
};
