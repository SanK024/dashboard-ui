import { AppSidebar } from "@/components/app-sidebar";
import { DataTable } from "@/components/data-table";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import data from "./data.json";

export default function Dashboard() {
    return (
        <SidebarProvider>
            <AppSidebar variant="sidebar" />
            <SidebarInset className="ml-0 overflow-hidden">
                <SiteHeader />
                <div className="flex flex-1 flex-col overflow-hidden">
                    <div className="flex flex-1 flex-col gap-2 overflow-hidden">
                        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 min-h-0">
                            <DataTable data={data} />
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}