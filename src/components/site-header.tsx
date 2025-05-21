import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function SiteHeader() {
    return (
        <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2  transition-[width,height] ease-linear">
            <div className="flex w-full items-center gap-52 px-4 lg: gap-6 lg:px-6">
                <SidebarTrigger className="-ml-1" />
                <Separator
                    orientation="vertical"
                    className="mx-2"
                />
                <h1 className="text-4xl text-center font-extrabold">Articles</h1>
                
            </div>
        </header>
    );
}
