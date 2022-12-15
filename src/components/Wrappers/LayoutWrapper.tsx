import { useEffect, useState } from 'react';
import Footer from '../NavFooter/Footer';
import NavBar from '../NavFooter/Navbar';
import LoginMenu from './WrapperComponents/LoginMenu';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const showLoginForm = useEffect(() => {
    const loginMenuWrapper = document.getElementById('loginMenuWrapper');
    const loginMenu = document.getElementById('loginMenu');
    const loginMenuButton = document.getElementById('loginButton');

    if (showLogin) {
      loginMenuWrapper?.classList.remove('hidden');
      return;
    }
    loginMenuWrapper?.classList.add('hidden');

    window.addEventListener('mouseup', (e) => {
      if (!loginMenu?.contains(e.target as Node)) {
        setShowLogin(false);
      }
      return;
    });

    loginMenuButton?.addEventListener('click', () => {
      setShowLogin(!showLogin);
      return;
    });
  });

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
};

export default LayoutWrapper;
