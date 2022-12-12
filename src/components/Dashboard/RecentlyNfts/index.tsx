import { useState } from "react";
import Title from "../../../common/Title";
import Nft from "./Nft";

const RecentlyNfts = () => {
    const [nfts] = useState([
        {
            name: "Universe",
            type: "Recommended",
            icon: "1",
        },
        {
            name: "Dying Star",
            type: "Recommended",
            icon: "2",
        },
        {
            name: "Far Away",
            type: "Recommended",
            icon: "3",
        },
    ]);
    return (
        <div className="flex flex-col items-start justify-start gap-5">
            <Title
                title="Recently Added NFTs"
                tabs={["Recommended", "New Trends", "Multi Colors"]}
            />

            <div className="flex flex-col items-center justify-start md:grid md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 xl:grid-cols-2 xl:grid-rows-2 2xl:grid-cols-3 2xl:grid-rows-1 gap-10 font-semibold w-full">
                {nfts.map(({ icon, name, type }, i) => (
                    <Nft icon={icon} name={name} type={type} key={i} />
                ))}
            </div>
        </div>
    );
};

export default RecentlyNfts;
