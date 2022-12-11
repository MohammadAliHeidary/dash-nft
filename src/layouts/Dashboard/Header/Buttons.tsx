const Buttons = () => {
    return (
        <div className="ml-auto flex items-center justify-start gap-4">
            <div className="bg-white rounded-lg p-2 shadow-xl shadow-slate-100 cursor-pointer hidden md:block">
                <img
                    src="/src/assets/images/icons/message.svg"
                    alt="message"
                    className="w-7 p-1"
                />
            </div>
            <div className="bg-white rounded-lg p-2 shadow-xl shadow-slate-100 cursor-pointer hidden md:block">
                <img
                    src="/src/assets/images/icons/notification.svg"
                    alt="notification"
                    className="w-7 p-1"
                />
            </div>
            <div className="rounded-lg shadow-xl shadow-slate-100 cursor-pointer overflow-hidden ml-4">
                <img
                    src="/src/assets/images/profile.webp"
                    alt="profile"
                    className="w-9 h-9 object-cover"
                />
            </div>
        </div>
    );
};

export default Buttons;
