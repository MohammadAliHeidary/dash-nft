import Title from "../../../common/Title";
import Card from "./Card";

const MyWallet = () => {
    return (
        <div className="w-full flex flex-col items-start justify-start gap-5">
            <Title title="My Wallet" tabs={["Recommended"]} />
            <Card />
        </div>
    );
};

export default MyWallet;
