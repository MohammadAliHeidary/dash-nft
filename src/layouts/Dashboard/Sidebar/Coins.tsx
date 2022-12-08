import { useState } from "react";

const Coins = () => {
    const [listCoins] = useState([
        {
            text: "Bitcoin",
            icon: "btc",
        },
        {
            text: "Ether",
            icon: "ether",
        },
        {
            text: "Bitcoin Cash",
            icon: "btc-cash",
        },
        {
            text: "Litecoin",
            icon: "lite",
        },
    ]);
    return (
        <>
            <h3 className="text-2xl font-bold px-5 mt-auto">Trending Coins</h3>
            <ul className="flex flex-col items-start justify-start gap-6 my-10 px-5 w-full">
                {listCoins.map(({ icon, text }) => (
                    <li className="flex items-center justify-start gap-5 cursor-pointer w-full hover:bg-slate-100 transition p-2 rounded">
                        <img
                            src={`/src/assets/images/currency/${icon}.png`}
                            alt="lite"
                            className="w-7"
                        />
                        {text}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Coins;
