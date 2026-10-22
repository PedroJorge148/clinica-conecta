
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";

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