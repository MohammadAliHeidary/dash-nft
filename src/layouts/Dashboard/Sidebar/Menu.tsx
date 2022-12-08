import { useState } from "react";
import SVG from "react-inlinesvg";

const Menu = () => {
    const [listMenu, setListMenu] = useState([
        {
            id: "1",
            text: "Dashboard",
            icon: "home",
            activeTab: false,
        },
        {
            id: "2",
            text: "Buy & Sell",
            icon: "cart",
            activeTab: false,
        },
        {
            id: "3",
            text: "Swap",
            icon: "swap",
            activeTab: false,
        },
        {
            id: "4",
            text: "NTFs",
            icon: "box",
            activeTab: true,
        },
        {
            id: "5",
            text: "My Favorites",
            icon: "heart",
            activeTab: false,
        },
    ]);

    const changeTab = (id: string) => {
        let newListMenu = listMenu.map((item) => {
            return {
                ...item,
                activeTab: item.id === id,
            };
        });
        setListMenu(newListMenu);
    };

    return (
        <ul className="my-10 flex flex-col items-start justify-start gap-6 px-5 w-full">
            {listMenu.map(({ icon, text, activeTab, id }) => (
                <li
                    className={`flex items-center justify-start gap-5 cursor-pointer w-full hover:bg-slate-100 transition p-2 rounded ${
                        activeTab ? "text-indigo-700 font-bold" : ""
                    }`}
                    onClick={() => changeTab(id)}
                    key={id}
                >
                    <SVG
                        src={`/src/assets/images/icons/${icon}.svg`}
                        className={`w-6 h-6 ${
                            activeTab ? "fill-indigo-700" : "fill-black"
                        }`}
                    />
                    {text}
                </li>
            ))}
        </ul>
    );
};

export default Menu;
