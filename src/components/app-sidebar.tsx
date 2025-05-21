import * as React from "react";
import {
    AudioWaveform,
    Command,
    Frame,
    GalleryVerticalEnd,
    Map,
    PieChart,
    Plug,
    Link2,
    CircleDollarSign,
    Bell,
    MessageCircle,
    ScrollText,
    Newspaper,
    Star,
    CircleHelp,
    Link,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
    user: {
        name: "Profile",
        // email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    teams: [
        {
            name: "amazon.com",
            logo: GalleryVerticalEnd,
            plan: "",
        },
        {
            name: "Acme Corp.",
            logo: AudioWaveform,
            plan: "",
        },
        {
            name: "Evil Corp.",
            logo: Command,
            plan: "",
        },
    ],
    navMain: [
        {
            title: "Articles",
            url: "#",
            icon: ScrollText,
            isActive: true,
            items: [
                {
                    title: "Create Article",
                    url: "#",
                },
                {
                    title: "Generated Articles",
                    url: "#",
                },
                {
                    title: "Keyword Projects",
                    url: "#",
                },
                {
                    title: "AI Keyword to Article",
                    url: "#",
                },
                {
                    title: "Steal Competitor Keyword",
                    url: "#",
                },
                {
                    title: "Import Keyword rom GSC",
                    url: "#",
                },
                {
                    title: "Manual Keyword to Article",
                    url: "#",
                },
                {
                    title: "Bulk Keyword to Article",
                    url: "#",
                },
                {
                    title: "Longtail Keyword to Article",
                    url: "#",
                },
                {
                    title: "Article Settings",
                    url: "#",
                },
            ],
        },
        {
            title: "Auto Blog",
            url: "#",
            icon: Newspaper,
            items: [
                {
                    title: "Genesis",
                    url: "#",
                },
                {
                    title: "Explorer",
                    url: "#",
                },
                {
                    title: "Quantum",
                    url: "#",
                },
            ],
        },
        {
            title: "Internal Links",
            url: "#",
            icon: Link,
            items: [
                {
                    title: "Introduction",
                    url: "#",
                },
                {
                    title: "Get Started",
                    url: "#",
                },
                {
                    title: "Tutorials",
                    url: "#",
                },
                {
                    title: "Changelog",
                    url: "#",
                },
            ],
        },
        {
            title: "Free Backlinks",
            url: "#",
            icon: Link2,
            items: [
                {
                    title: "General",
                    url: "#",
                },
                {
                    title: "Team",
                    url: "#",
                },
                {
                    title: "Billing",
                    url: "#",
                },
                {
                    title: "Limits",
                    url: "#",
                },
            ],
        },
        {
            title: "Integrations",
            url: "#",
            icon: Plug,
            items: [
                {
                    title: "General",
                    url: "#",
                },
                {
                    title: "Team",
                    url: "#",
                },
                {
                    title: "Billing",
                    url: "#",
                },
                {
                    title: "Limits",
                    url: "#",
                },
            ],
        },
        {
            title: "Subscription",
            url: "#",
            icon: Star,
            items: [
                {
                    title: "General",
                    url: "#",
                },
                {
                    title: "Team",
                    url: "#",
                },
                {
                    title: "Billing",
                    url: "#",
                },
                {
                    title: "Limits",
                    url: "#",
                },
            ],
        },
        {
            title: "Affiliate Program",
            url: "#",
            icon: CircleDollarSign,
            items: [
                {
                    title: "General",
                    url: "#",
                },
                {
                    title: "Team",
                    url: "#",
                },
                {
                    title: "Billing",
                    url: "#",
                },
                {
                    title: "Limits",
                    url: "#",
                },
            ],
        },
        {
            title: "Help Center",
            url: "#",
            icon: CircleHelp,
            items: [
                {
                    title: "General",
                    url: "#",
                },
                {
                    title: "Team",
                    url: "#",
                },
                {
                    title: "Billing",
                    url: "#",
                },
                {
                    title: "Limits",
                    url: "#",
                },
            ],
        },
        {
            title: "Updates",
            url: "#",
            icon: Bell,
            items: [
                {
                    title: "General",
                    url: "#",
                },
                {
                    title: "Team",
                    url: "#",
                },
                {
                    title: "Billing",
                    url: "#",
                },
                {
                    title: "Limits",
                    url: "#",
                },
            ],
        },
        {
            title: "Live Chat support",
            url: "#",
            icon: MessageCircle,
            items: [
                {
                    title: "General",
                    url: "#",
                },
                {
                    title: "Team",
                    url: "#",
                },
                {
                    title: "Billing",
                    url: "#",
                },
                {
                    title: "Limits",
                    url: "#",
                },
            ],
        },
    ],
    projects: [
        {
            name: "Design Engineering",
            url: "#",
            icon: Frame,
        },
        {
            name: "Sales & Marketing",
            url: "#",
            icon: PieChart,
        },
        {
            name: "Travel",
            url: "#",
            icon: Map,
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <h2 className="text-5xl font-extrabold tracking-tight text-center mb-6">
                    abun
                </h2>
                <TeamSwitcher teams={data.teams} />
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
        </Sidebar>
    );
}
