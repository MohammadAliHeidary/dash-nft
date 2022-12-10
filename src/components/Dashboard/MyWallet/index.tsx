import Card from "./Card";
import Overview from "./Overview";

const MyWallet = () => {
    return (
        <div className="flex flex-col items-start justify-start gap-5">
            <h2 className="text-3xl font-bold">My Wallet</h2>
            <span className="text-slate-400 font-semibold mb-5">
                Recommended
            </span>
            <Card />

            <h2 className="text-3xl font-bold mt-10">Overview</h2>
            <Overview />
        </div>
    );
};

export default MyWallet;
