import Card from "./Card";

const MyWallet = () => {
    return (
        <div className="flex flex-col items-start justify-start gap-5">
            <h2 className="text-3xl font-bold">My Wallet</h2>
            <span className="text-slate-400 font-semibold mb-5">
                Recommended
            </span>

            <Card />
        </div>
    );
};

export default MyWallet;
