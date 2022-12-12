import MyWallet from "./MyWallet";
import Overview from "./MyWallet/Overview";
import PaymentHistory from "./PaymentHistory";
import RecentlyNfts from "./RecentlyNfts";

const Dashboard = () => {
    return (
        <div className="h-full flex flex-col items-center justify-start xl:grid xl:grid-cols-12 xl:grid-rows-1 gap-20">
            <div className="xl:col-span-8 xl:row-start-1 flex flex-col items-start justify-start xl:flex xl:flex-col xl:items-start xl:justify-start xl:h-full gap-10 customScrollbar w-full">
                <RecentlyNfts />
                <PaymentHistory />
            </div>
            <div className="xl:col-span-4 xl:row-start-1 flex flex-col items-start justify-start xl:flex xl:flex-col xl:items-start xl:justify-start xl:h-full md:flex-row gap-10 customScrollbar w-full">
                <MyWallet />
                <Overview />
            </div>
        </div>
    );
};

export default Dashboard;
