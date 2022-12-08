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
        <div className="mt-auto px-5 w-full">
            <h3 className="text-2xl font-bold">Trending Coins</h3>
            <ul className="flex flex-col items-start justify-start gap-6 my-10 w-full">
                {listCoins.map(({ icon, text }, i) => (
                    <li className="flex items-center justify-start gap-5 cursor-pointer w-full hover:bg-slate-100 transition p-2 rounded" key={i}>
                        <img
                            src={`/src/assets/images/currency/${icon}.png`}
                            alt="lite"
                            className="w-7"
                        />
                        {text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Coins;
