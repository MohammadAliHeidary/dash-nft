import Buttons from "./Buttons";
import Search from "./Search";

interface Props {
    changeSidebar: () => void;
}

const Header = ({ changeSidebar }: Props) => {
    return (
        <header className="z-10 py-6 px-10 w-full flex items-center justify-start gap-5 sticky top-0 bg-[#fbfbfb]">
            <img
                src="/src/assets/images/icons/menu.svg"
                alt="menu"
                className="w-7 cursor-pointer hover:bg-slate-100 transition rounded p-1 xl:hidden -scale-100"
                onClick={changeSidebar}
            />

            <Search />
            <Buttons />
        </header>
    );
};

export default Header;
