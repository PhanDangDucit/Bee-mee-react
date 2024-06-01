import SidebarAdmin from "@/ui/components/Sidebar-admin";

export default function Layout({
    children
}:{
    children:React.ReactNode
}) {
    return (
        <div>
            <div className="min-h-screen bg-gray-50/50">
                <SidebarAdmin/>
                {children}
            </div>
        </div>
    )
}
