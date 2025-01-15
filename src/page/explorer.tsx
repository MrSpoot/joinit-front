import AppSidebar from "@/components/ui/app-sidebar";
import { Button } from "@/components/ui/button";
import CardEvent from "@/components/ui/card-event";
import { Input } from "@/components/ui/input";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Bell, Search } from "lucide-react";

const Explorer: React.FC = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <div className="h-screen w-screen flex flex-col p-2">
          <div className="flex w-full justify-between mt-4 mb-8 items-center">
            <SidebarTrigger variant={"outline"} />
            <div className="font-bold text-lg">Joint IT</div>
            <Button size={"icon"} variant={"outline"}>
              <Bell />
            </Button>
          </div>

          <Input
            placeholder="Search event, stand up ..."
            position="start"
            icon={<Search className="size-4 text-muted-foreground" />}
          />

          <div className="flex flex-row justify-between mt-4">
            <p>Nearby Event</p>
            <div>See More</div>
          </div>

          <div className="flex flex-row w-full gap-2 overflow-x-auto p-2">
            <CardEvent />
            <CardEvent />
            <CardEvent />
          </div>

          <div className="flex flex-row justify-between">
            <p>Popular Event</p>
            <div>See More</div>
          </div>
        </div>
      </main>
    </SidebarProvider>
  );
};

export default Explorer;
