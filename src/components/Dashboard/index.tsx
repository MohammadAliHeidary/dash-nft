import MyWallet from "./MyWallet";
import RecentlyNfts from "./RecentlyNfts";

const Dashboard = () => {
    return (
        <div className="h-full grid grid-cols-12 grid-rows-1 gap-20">
            <div className="col-span-8">
                <RecentlyNfts />
            </div>
            <div className="col-span-4">
                <MyWallet />
            </div>
        </div>
    );
};

export default Dashboard;
