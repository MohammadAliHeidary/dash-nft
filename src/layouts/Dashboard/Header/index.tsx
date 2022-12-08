import Buttons from "./Buttons";
import Search from "./Search";

const Header = () => {
    return (
        <header className="py-6 px-10 w-full flex items-center justify-start">
            <Search />
            <Buttons />
        </header>
    );
};

export default Header;
