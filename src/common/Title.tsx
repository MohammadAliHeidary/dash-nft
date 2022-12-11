interface Props {
    title: string;
    tabs?: string[];
}

const Title = ({ tabs = [], title }: Props) => {
    return (
        <div className="flex flex-col items-start justify-start gap-5">
            <h2 className="text-3xl font-bold">{title}</h2>
            {tabs.length ? (
                <div className="flex items-center justify-start gap-14 text-slate-400 mb-5 cursor-pointer font-semibold">
                    {tabs.map((tab) => (
                        <span>{tab}</span>
                    ))}
                </div>
            ) : null}
        </div>
    );
};

export default Title;
