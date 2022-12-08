import Coins from "./Coins";
import Menu from "./Menu";

const Sidebar = () => {
    return (
        <nav className="w-96 min-h-screen bg-white border-r border-slate-200 p-6 flex flex-col items-start justify-start">
            <img
                src="/src/assets/images/logos/dahsboard.png"
                alt="logo"
                className="w-44"
            />

            <Menu />
            <Coins />

            <button className="border border-slate-200 hover:border-slate-400 py-3 px-5 rounded-md ml-5">
                Need Help?
            </button>
        </nav>
    );
};

export default Sidebar;
