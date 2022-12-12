interface Props {
    title: string;
    tabs?: string[];
}

const Title = ({ tabs = [], title }: Props) => {
    return (
        <div className="flex flex-col items-start justify-start gap-5">
            <h2 className="text-3xl font-bold">{title}</h2>
            {tabs.length ? (
                <div className="flex flex-wrap items-center justify-start gap-x-14 gap-y-4 text-slate-400 mb-5 cursor-pointer font-semibold">
                    {tabs.map((tab, i) => (
                        <span key={i} className="hover:text-slate-500">{tab}</span>
                    ))}
                </div>
            ) : null}
        </div>
    );
};

export default Title;
