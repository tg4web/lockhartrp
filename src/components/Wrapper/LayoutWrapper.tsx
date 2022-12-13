import NavBar from "../NavFooter/Navbar";
import Footer from '../NavFooter/Footer';
import LoginMenu from "./LoginMenu";

const LayoutWrapper = ({ children }) => {
  return (
    <div className="pl-2 pr-2 flex font-mono flex-col w-full h-screen bg-slate-700 text-zinc-200">
      <NavBar />
      <LoginMenu />
      <div className="flex flex-col h-full w-full bg-slate-600 rounded-lg">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default LayoutWrapper;