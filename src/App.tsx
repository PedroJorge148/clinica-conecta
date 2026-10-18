import Home from "./pages/Home/home";
import { Topbar } from "./components/Topbar";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Topbar />
      <Home />
    </div>
  );
}
