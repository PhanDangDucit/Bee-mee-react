import Header from "@/ui/header";
import Footer from "@/ui/footer";

export default function Layout({
    children
}:{
    children:React.ReactNode
}) {
    return (
        <div className="">
            <Header/>
                {children}
            <Footer/>
        </div>
    )
}