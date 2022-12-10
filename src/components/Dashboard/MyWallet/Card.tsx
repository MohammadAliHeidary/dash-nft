const Card = () => {
    return (
        <div className="w-full h-72 bg-card bg-no-repeat bg-cover rounded-3xl text-white flex flex-col items-start justify-between p-8">
            <img
                src="/src/assets/images/logos/wallet.png"
                alt="wallet logo"
                className="w-16"
            />
            <div className="flex flex-col items-start justify-start gap-2">
                <span className="text-[10px] text-slate-300/70">
                    CARD NUMBER
                </span>
                <span className="text-3xl">3829 4820 4629 5025</span>
            </div>
            <div className="flex items-start justify-between w-full gap-2">
                <div className="flex flex-col items-start justify-start gap-2">
                    <span className="text-[10px] text-slate-300/70">
                        CARD HOLDER NAME
                    </span>
                    <span className="text-base">AR Shakir</span>
                </div>
                <div className="flex flex-col items-start justify-start gap-2">
                    <span className="text-[10px] text-slate-300/70">
                        VAID THRU
                    </span>
                    <span className="text-base">09/24</span>
                </div>
            </div>
        </div>
    );
};

export default Card;
