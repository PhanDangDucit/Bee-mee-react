import { CircleUser, Heart, ShoppingBag } from "lucide-react"
import { Link } from "react-router-dom"


export const Navbar = () => {
    const isLoggedIn = false;

    return (
        <div className="navbar bg-orange-100 max-w-7xl mx-auto">
            <div className="flex-1">
                <Link
                    to="/"
                    className="btn btn-ghost normal-case text-2xl font-black text-accent-content"
                >
                    <ShoppingBag />
                    BeeMee Clothing
                </Link>
            </div>
            <div className="flex-none">
                <Link
                    to="/search"
                    className="btn btn-ghost btn-circle text-accent-content"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                    </svg>
                </Link>
                
                <Link
                    to="/wishlist"
                    className="btn btn-ghost btn-circle text-accent-content"
                >
                    <Heart className="text-xl"/>
                </Link>
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-accent-content"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                        </svg>
                    </div>
                </label>
                <div
                    tabIndex={0}
                    className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
                >
                    <div className="card-body">
                        <span className="font-bold text-lg text-accent-content">
                            {1} Items
                        </span>
                        <span className="">
                            Subtotal: $1
                        </span>
                        <div className="card-actions">
                        <Link
                            to="/cart"
                            className="btn bg-blue-600 btn-block text-white hover:bg-blue-500"
                        >
                            View cart
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
            {isLoggedIn ? (
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full relative">
                            <CircleUser className="w-6 h-6 left-1/2 -translate-x-1/2 text-accent-content absolute top-1/2 -translate-y-1/2"/>
                            {/* <img src="https://xsgames.co/randomusers/avatar.php?g=male" title="as"/> */}
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-orange-100 rounded-box w-52"
                    >
                        <li>
                            <Link
                                to="/user-profile"
                                className="justify-between text-accent-content"
                            >
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link to="/order-history" className="text-accent-content">
                                Order history
                            </Link>
                        </li>
                        <li>
                            <Link to="/login" className="text-accent-content">
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            ) : (
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full relative">
                            <CircleUser className="w-6 h-6 left-1/2 -translate-x-1/2 text-accent-content absolute top-1/2 -translate-y-1/2"/>
                            {/* <img src="https://xsgames.co/randomusers/avatar.php?g=male" title="as"/> */}
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-orange-100 rounded-box w-52"
                    >
                        <li>
                            <Link
                                to="/signin"
                                className="justify-between text-accent-content"
                            >
                                Sign in
                            </Link>
                        </li>
                        <li>
                            <Link to="/signup" className="text-accent-content">
                                Sign up
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
            </div>
        </div>
    )
}