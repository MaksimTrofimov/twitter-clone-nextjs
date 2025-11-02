import { Header } from '@/components/Header';
import { MainHeader } from '@/components/MainHeader';
import { getTweets } from '@/services/tweetService';

export default async function Home() {
  const { headerLeft, headerCenter } = MainHeader();
  const tweets = await getTweets();

  return (
    <>
      <Header left={headerLeft} center={headerCenter} />
    </>
  );
}
