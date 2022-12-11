import Title from "../../../common/Title";

const Overview = () => {
    return (
        <div className="w-full flex flex-col items-start justify-start gap-5 md:col-start-2 md:col-end-3">
            <Title title="Overview" tabs={["Recommended"]} />
            <div className="w-full h-72 bg-[#78c9e4] rounded-3xl text-white grid grid-cols-2 grid-rows-1 gap-8 p-8">
                <div className="text-black flex flex-col items-start justify-between">
                    <div className="flex flex-col items-start justify-start gap-2">
                        <span className="text-xs text-black/70">
                            Availalble balance in USD
                        </span>
                        <span className="text-3xl">213,150.15</span>
                    </div>
                    <div className="flex items-start justify-between w-full gap-2">
                        <div className="flex flex-col items-start justify-start gap-2">
                            <span className="text-xs text-black/70">
                                Transactions
                            </span>
                            <span className="text-2xl">34.405</span>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-2">
                            <span className="text-xs text-black/70">
                                Wallets
                            </span>
                            <span className="text-2xl">23</span>
                        </div>
                    </div>
                    <div className="flex items-start justify-start">
                        <span className="text-xs">
                            Last activity at 26 Nov, 2021
                        </span>
                    </div>
                </div>
                <div className="h-full w-full flex items-center justify-center">
                    <img
                        src="/src/assets/images/currency/etherume.png"
                        alt="etherume logo"
                        className="w-24"
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-1 gap-4 w-full">
                <div className="bg-[#f7f6f6] rounded-3xl flex flex-col items-center justify-center gap-2 px-4 py-6 cursor-pointer transition-all hover:bg-white hover:shadow">
                    <span className="text-xs">BTC Wallet</span>
                    <span className="font-bold flex items-center justify-center flex-wrap gap-1">
                        4.434953
                        <span className="text-slate-400">BTC</span>
                    </span>
                    <img
                        src="/src/assets/images/currency/btc.png"
                        alt="btc"
                        className="w-5 rounded-full"
                    />
                </div>
                <div className="bg-[#f7f6f6] rounded-3xl flex flex-col items-center justify-center gap-2 px-4 py-6 cursor-pointer transition-all hover:bg-white hover:shadow">
                    <span className="text-xs">Etherume Wallet</span>
                    <span className="font-bold flex items-center justify-center flex-wrap gap-1">
                        4.434953
                        <span className="text-slate-400">ETH</span>
                    </span>
                    <img
                        src="/src/assets/images/currency/ether.png"
                        alt="ether"
                        className="w-5 rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Overview;
