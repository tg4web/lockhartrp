import type { AppType } from 'next/app';
import '../styles/globals.css';
import { trpc } from '../utils/trpc';
import LayoutWrapper from '../components/Wrapper/LayoutWrapper';

const App: AppType = ({ Component, pageProps }) => {
  return (
    <LayoutWrapper>
      <Component {...pageProps} />
    </LayoutWrapper>
  )
};

export default trpc.withTRPC(App);
