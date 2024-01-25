import { useEffect } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { MainPage } from './MainPage';

export const Page = () => {

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      const message = 'Are you sure you want to leave?';
      event.returnValue = message;
      return message;
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);


  return (
    <>
      <Header />
      <MainPage />
      <Footer />
    </>
  );
}