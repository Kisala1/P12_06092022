import { Header } from '../Header/Header';

/**
 * 
 * @param {children} children represent all the elements that will be displayed on a page
 * @returns Header element
 */

export function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
