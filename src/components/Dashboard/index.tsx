import MyWallet from "./MyWallet";
import Overview from "./MyWallet/Overview";
import PaymentHistory from "./PaymentHistory";
import RecentlyNfts from "./RecentlyNfts";

const Dashboard = () => {
    return (
        <div className="h-full grid grid-cols-12 grid-rows-1 gap-20">
            <div className="col-span-8 flex flex-col items-start justify-start gap-10 max-h-screen customScrollbar">
                <RecentlyNfts />
                <PaymentHistory />
            </div>
            <div className="col-span-4 flex flex-col items-start justify-start gap-10 max-h-screen customScrollbar">
                <MyWallet />
                <Overview />
            </div>
        </div>
    );
};

export default Dashboard;
