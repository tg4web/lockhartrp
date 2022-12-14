import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import LayoutWrapper from '../components/Wrappers/LayoutWrapper';
import '../styles/globals.css';
import { trpc } from '../utils/trpc';

const App = ({ Component, pageProps }: AppProps<{ session: Session }>) => {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={60}>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </SessionProvider>
  );
};

export default trpc.withTRPC(App);
