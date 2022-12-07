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
            <div className="min-h-screen flex flex-col w-full bg-[#fbfbfb]">
                <Header />
                <main className="w-full py-6 px-8">{children}</main>
            </div>
        </div>
    );
};

export default DashboardLayout;
