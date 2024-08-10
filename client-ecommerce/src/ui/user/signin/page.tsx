import SectionTitle from "@/ui/components/section-title";
import { auth } from "@/utils/axios-method";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const login = async () => {
        const data = await auth("login", {email, password});
        console.log("data", data);
        if(data.status == "200") {
            if(data.metadata.user.role == "admin") {
                const url = new URL("/admin", "http://localhost:3003");
                location.href = url.toString();
            } else if(data.metadata.user.role == "user") {
                const url = new URL("/", "http://localhost:3003");
                location.href = url.toString();
            }
        } else {
            setEmail("");
            setPassword("");
        }
    }
    return (
        <>
            <SectionTitle title="Login" path="Home | Login" />
            <div className="flex flex-col justify-center sm:py-12">
                <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                <div className="bg-dark border border-gray-600 shadow w-full rounded-lg divide-y divide-gray-200">
                    <form className="px-5 py-7">
                        <label className="font-semibold text-sm pb-1 block text-accent-content">
                            E-mail
                        </label>
                        <input
                            value={email}
                            required={true}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            title="email"
                            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                        />
                        <label className="font-semibold text-sm pb-1 block text-accent-content">
                            Password
                        </label>
                        <input
                            type="password"
                            required={true}
                            value={password}
                            title="password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                        />
                        <button
                            type="button"
                            onClick={login}
                            className="transition duration-200 bg-blue-600 hover:bg-blue-500 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                        >
                            <span className="inline-block mr-2">Login</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-4 h-4 inline-block"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </button>
                    </form>
                </div>
                <div className="py-5 text-center">
                    <Link
                        to="/signup"
                        className="btn btn-neutral text-white"
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        Don't have an account? Please register.
                    </Link>
                </div>
                </div>
            </div>
        </>
    )
}