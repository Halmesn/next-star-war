import Header from './Header';
import Background from './Background';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Background />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
