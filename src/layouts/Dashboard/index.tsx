import { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface Props {
    children: ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="min-h-screen max-h-screen overflow-y-auto customScrollbar flex flex-col w-full bg-[#fbfbfb]">
                <Header />
                <main className="w-full py-6 px-10">{children}</main>
            </div>
        </div>
    );
};

export default DashboardLayout;
