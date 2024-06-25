import { NavLink } from "react-router-dom";
import { TCategories } from "@/helpers/definitions";
import { getAllEntity } from "@/utils/axios-method";
import { useEffect, useState } from "react";
import "@/styles/Header.css";
import { 
    CircleX, 
    Menu, 
} from "lucide-react";
import { ToolBar } from "@/ui/toolbar";
import { Navbar } from "@/ui/Navbar";

const Header = () => {
    const isLoggedIn = false;
    const [categories, setCategories] = useState<TCategories[]>();
    useEffect(() => {
      getAllEntity("categories").then(data => setCategories(data));
    }, [])

    return (
        <>
            {/* Topbar */}
            <ToolBar/>
            {/* Navbar */}
            <Navbar/>

            {/* Nav main */}
            <div className="navbar-bottom-menu border-y border-gray-800">
                <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
        
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className="btn drawer-button">
                        <Menu className="text-4xl" />
                    </label>
                </div>
                <div className="drawer-side z-10">
                    <label
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                    ></label>
                            
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content mt-4">
                        <label htmlFor="my-drawer" className="btn drawer-button">
                        <CircleX className="text-3xl ml-auto" />
                        </label>
                        {/* Sidebar content here */}
                        <li className="text-xl">
                            <NavLink className="text-accent-content" to="/">
                            Home
                            </NavLink>
                        </li>
                        <li className="text-xl">
                            <NavLink className="text-accent-content" to="/shop">
                            Shop
                            </NavLink>
                        </li>
                        <li className="text-xl">
                            <NavLink className="text-accent-content" to={`/categories/`}>
                                Categories
                            </NavLink>
                        </li>
                        <li className="text-xl">
                            <NavLink className="text-accent-content" to="/contact">
                            Contact
                            </NavLink>
                        </li>
                        {!isLoggedIn && (
                            <>
                            <li className="text-xl">
                                <NavLink className="text-accent-content" to="/login">
                                Login
                                </NavLink>
                            </li>
                            <li className="text-xl">
                                <NavLink className="text-accent-content" to="/register">
                                Register
                                </NavLink>
                            </li>
                            </>
                        )}
                    </ul>
                </div>
                </div>

                <div className="container text-2xl navlinks-container">
                    <NavLink className="text-accent-content" to="/">
                        Home
                    </NavLink>
                    <div className="text-accent-content">
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className="bg-white cursor-pointer">Categories</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-orange-100 rounded-box z-[1] w-52 p-2 shadow">
                                {categories && categories.map((category) => (
                                    <li key={category.id}><NavLink className="text-accent-content" to={`/categories/${category.id}`}>{category.name}</NavLink></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <NavLink className="text-accent-content" to="/about-us">
                        About us
                    </NavLink>
                    <NavLink className="text-accent-content" to="/contact">
                        Contact
                    </NavLink>
                    {!isLoggedIn && (
                        <>
                            <NavLink className="text-accent-content" to="/login">
                                Login
                            </NavLink>
                            <NavLink className="text-accent-content" to="/register">
                                Register
                            </NavLink>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Header;
