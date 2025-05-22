import { SidebarTrigger } from "@/components/ui/sidebar";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

export function SiteHeader() {
    return (
        <header className="flex flex-col shrink-0 items-center gap-2 transition-[width,height] ease-linear border-b">
            <div className="flex w-full items-center gap-5 px-4 lg:px-6 py-3">
                <SidebarTrigger className="-ml-1" />
            </div>
            <div className="w-full px-4 lg:px-6">
                <h1 className="text-2xl md:text-4xl text-center font-extrabold mb-5">
                    Articles
                </h1>

                <Tabs className="w-full mb-4" defaultValue="generated">
                    <TabsList className="grid h-auto w-full grid-cols-2 md:grid-cols-4 gap-1 md:gap-0 p-1">
                        <TabsTrigger
                            className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-xs md:text-sm py-2 px-2"
                            value="generated"
                        >
                            Generated
                        </TabsTrigger>
                        <TabsTrigger
                            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs md:text-sm py-2 px-2"
                            value="published"
                        >
                            Published
                        </TabsTrigger>
                        <TabsTrigger
                            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs md:text-sm py-2 px-2"
                            value="scheduled"
                        >
                            Scheduled
                        </TabsTrigger>
                        <TabsTrigger
                            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs md:text-sm py-2 px-2"
                            value="archived"
                        >
                            Archived
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>
        </header>
    );
}
