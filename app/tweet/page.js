import { Header } from '@/components/Header';
import { MainHeader } from '@/components/MainHeader';

export default async function Home() {
  const { headerLeft, headerCenter } = MainHeader();

  return (
    <>
      <Header left={headerLeft} center={headerCenter} />
    </>
  );
}
