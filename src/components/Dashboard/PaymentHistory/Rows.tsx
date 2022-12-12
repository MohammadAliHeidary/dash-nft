import { useState } from "react";

const Rows = () => {
    const [data] = useState([
        {
            icon: "btc",
            title: "BTC",
            description: "Bitcoin",
            date: "23, Jon 2021",
            status: "Success",
            price: "15,00",
        },
        {
            icon: "ether",
            title: "Ether",
            description: "Etherume",
            date: "23, Jon 2021",
            status: "Pending",
            price: "79,00",
        },
    ]);
    return (
        <>
            {data.map(({ date, description, icon, price, status, title }, i) => (
                <div key={i} className="grid grid-cols-5 gap-4 w-full p-4 bg-transparent rounded-lg hover:bg-white transition-all relative top-0 right-0 hover:shadow xl:hover:-top-2 xl:hover:-right-2 min-w-[800px]">
                    <div className="col-span-2 flex items-center justify-start gap-4">
                        <img
                            src={`/src/assets/images/currency/${icon}.png`}
                            alt={icon}
                            className="w-12 h-12 rounded-full"
                        />
                        <div className="flex flex-col items-start justify-between gap-1">
                            <span className="font-bold">{title}</span>
                            <span className="text-xs">{description}</span>
                        </div>
                    </div>
                    <span className="flex items-center justify-start">
                        {date}
                    </span>
                    <div className="flex items-center justify-start">
                        <button
                            className={`py-2 px-4 rounded-lg text-sm ${
                                status === "Success"
                                    ? "bg-green-100 text-green-500"
                                    : "bg-orange-400 text-white"
                            }`}
                        >
                            {status}
                        </button>
                    </div>
                    <div className="flex items-center justify-start">
                        <span className="font-bold">${price}</span>
                        <span className="text-slate-400">/Mo</span>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Rows;
