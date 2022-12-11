const Head = () => {
    return (
        <div className="grid grid-cols-5 gap-4 w-full text-xs p-4 bg-slate-100 rounded-lg mb-2">
            <span className="col-span-2">Recepient</span>
            <span>Date</span>
            <span>Status</span>
            <span>Amount</span>
        </div>
    );
};
export default Head;
