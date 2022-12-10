const Overview = () => {
    return (
        <div className="w-full h-72 bg-[#78c9e4] rounded-3xl text-white grid grid-cols-2 grid-rows-1 gap-8 p-8">
            <div className="text-black flex flex-col items-start justify-between">
                <div className="flex flex-col items-start justify-start gap-2">
                    <span className="text-[10px] text-black/70">
                        Availalble balance in USD
                    </span>
                    <span className="text-3xl">213,150.15</span>
                </div>
                <div className="flex items-start justify-between w-full gap-2">
                    <div className="flex flex-col items-start justify-start gap-2">
                        <span className="text-[10px] text-black/70">
                            Transactions
                        </span>
                        <span className="text-2xl">34.405</span>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-2">
                        <span className="text-[10px] text-black/70">
                            Wallets
                        </span>
                        <span className="text-2xl">23</span>
                    </div>
                </div>
                <div className="flex items-start justify-start">
                    <span className="text-[10px]">
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
    );
};

export default Overview;
