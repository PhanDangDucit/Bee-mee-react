import { Headset, Mail } from "lucide-react"


export const ToolBar = () => {
    return (
        <div className="topbar border-b border-gray-800">
            <ul>
                <li>
                    <Headset className="text-2xl max-sm:text-lg text-accent-content" />
                    <span className="text-2xl max-sm:text-lg text-accent-content">
                    +381 61/123-456
                    </span>
                </li>
                <li>
                    <Mail className="text-2xl max-sm:text-lg text-accent-content" />{" "}
                    <span className="text-2xl max-sm:text-lg text-accent-content">
                        support@test.com
                    </span>
                </li>
            </ul>
        </div>
    )
}