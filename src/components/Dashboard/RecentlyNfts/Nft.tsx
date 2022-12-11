interface Props {
    type: string
    name: string
    icon: string
}

const Nft = ({icon, type, name}: Props) => {
    return (
        <div className="w-full flex flex-col items-start justify-start gap-2">
            <img
                src={`/src/assets/images/nfts/${icon}.jpg`}
                alt="nft 1"
                className="w-full rounded-3xl h-96 object-cover shadow-xl shadow-slate-300"
            />
            <h3 className="mt-7 text-[22px]">{name}</h3>
            <span className="text-slate-400">{type}</span>
        </div>
    );
};

export default Nft;
