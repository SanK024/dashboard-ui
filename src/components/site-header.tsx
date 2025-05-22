import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

export function SiteHeader() {
    return (
        <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-18 flex flex-col h-18 lg:h-18 shrink-0 items-center gap-2  transition-[width,height] ease-linear">
            <div className="flex w-full items-center gap-5 px-4 lg:px-6">
                <SidebarTrigger className="-ml-1" />
            </div>
            <div>
                <h1 className=" text-4xl text-center font-extrabold mb-5">
                    Articles
                </h1>

                <Tabs
                    className="h-36 lg:h-9  sm"
                    defaultValue="generated"
                >
                    <TabsList className="grid h-full w-full grid-rows-4 lg:grid-cols-4 lg:grid-rows-1">
                        <TabsTrigger
                            className="data-[state=active]:bg-blue-500 data-[state=active]:text-white "
                            value="generated"
                        >
                            Generated Articles
                        </TabsTrigger>
                        <TabsTrigger
                            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                            value="published"
                        >
                            Published Articles
                        </TabsTrigger>
                        <TabsTrigger
                            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                            value="scheduled"
                        >
                            Scheduled Articles
                        </TabsTrigger>
                        <TabsTrigger
                            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                            value="archived"
                        >
                            Archived Articles
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>
        </header>
    );
}
