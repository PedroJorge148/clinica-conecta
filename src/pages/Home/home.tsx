import Topbar from "@components/Topbar";
import Sidebar from "../../components/Sidebar";


export default function Home(){
    return(
        <>
            <div className="flex">
                <Sidebar/>
            </div>
            <div className="flex">
                <Topbar/>
            </div>
        </>
    );
}