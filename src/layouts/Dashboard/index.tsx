import { ReactNode, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface Props {
    children: ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
    const [showSidebar, setShowSidebar] = useState(false);
    const changeSidebar = () => setShowSidebar(!showSidebar);

    return (
        <div className="flex max-w-[1920px] mx-auto">
            <Sidebar showSidebar={showSidebar} changeSidebar={changeSidebar} />

            <div className="min-h-screen max-h-screen overflow-y-auto customScrollbar flex flex-col w-full bg-[#fbfbfb]">
                <Header changeSidebar={changeSidebar} />

                <main className="w-full p-10 pb-16">{children}</main>
            </div>
        </div>
    );
};

export default DashboardLayout;
