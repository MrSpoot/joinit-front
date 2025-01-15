import { Heart, LogOut, Settings, Ticket, User } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "./button";

// Menu items.
const items = [
  {
    title: "Profile",
    url: "#",
    icon: User,
  },
  {
    title: "Favorites",
    url: "#",
    icon: Heart,
  },
  {
    title: "Tickets",
    url: "#",
    icon: Ticket,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

const AppSidebar: React.FC = () => {
  return (
    <Sidebar side="left">
      <SidebarHeader>
        <div className="flex w-full h-100 justify-center items-center mt-4">
          Joint It
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="p-2">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Button variant={"outline"} className=" justify-start">
                      <item.icon />
                      <span>{item.title}</span>
                    </Button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button variant={"destructive"}>
          <LogOut />
          <p>Disconnect</p>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
