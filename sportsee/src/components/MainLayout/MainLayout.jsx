import { Header } from '../Header/Header';
import { Nav } from '../Nav/Nav';

export function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Nav />
    </>
  );
}
