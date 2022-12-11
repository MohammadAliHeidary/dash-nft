import Coins from "./Coins";
import Menu from "./Menu";

interface Props {
    showSidebar: boolean;
    changeSidebar: () => void;
}

const Sidebar = ({ showSidebar, changeSidebar }: Props) => {
    return (
        <div
            className={`fixed xl:relative transition-all xl:opacity-100 xl:z-20 ${
                showSidebar ? "opacity-100 z-20" : "opacity-0 -z-10"
            } h-screen w-full xl:w-min backdrop-blur-sm bg-black/20`}
            onClick={changeSidebar}
        >
            <nav
                onClick={(e) => e.stopPropagation()}
                className={`h-full relative top-0 w-96 overflow-y-auto customScrollbar bg-white border-x border-slate-200 p-6 flex flex-col items-start justify-start xl:left-0 ${
                    showSidebar ? "left-0" : "-left-full"
                } transition-all duration-400`}
            >
                <img
                    src="/src/assets/images/logos/dahsboard.png"
                    alt="logo"
                    className="w-44 mx-auto xl:mx-0"
                />

                <Menu />
                <Coins />

                <button className="border border-slate-200 hover:border-slate-400 py-3 px-5 rounded-md ml-5">
                    Need Help?
                </button>
            </nav>
        </div>
    );
};

export default Sidebar;
