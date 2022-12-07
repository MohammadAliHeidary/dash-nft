const Sidebar = () => {
    return (
        <nav className="w-96 min-h-screen bg-white border-r border-slate-200 p-6">
            <img src="/src/assets/images/logo.png" alt="logo" className="w-44" />
            <ul>
                <li>
                    <img src="/src/assets/images/icons/home.svg" alt="home" />
                    Dashboard
                </li>
                <li>
                    <img src="/src/assets/images/icons/cart.svg" alt="cart" />
                    Buy & Sell
                </li>
                <li>
                    <img src="/src/assets/images/icons/swap.svg" alt="swap" />
                    Swap
                </li>
                <li>
                    <img src="/src/assets/images/icons/box.svg" alt="box" />
                    NTFs
                </li>
                <li>
                    <img src="/src/assets/images/icons/heart.svg" alt="heart" />
                    My Favorites
                </li>
            </ul>
            <h3>Trending Coins</h3>
            <ul>
                <li>
                    <img src="/src/assets/images/currency/btc.png" alt="btc" />
                    Bitcoin
                </li>
                <li>
                    <img src="/src/assets/images/currency/ether.png" alt="ether" />
                    Ether
                </li>
                <li>
                    <img src="/src/assets/images/currency/btc-cash.png" alt="btc cash" />
                    Bitcoin Cash
                </li>
                <li>
                    <img src="/src/assets/images/currency/lite.png" alt="lite" />
                    Litecoin
                </li>
            </ul>
            <button>Need Help?</button>
        </nav>
    )
}

export default Sidebar;