import { getTweet } from '@/services/tweetService';
import { TweetCard } from '@/components/TweetCard';
import { Header } from '@/components/Header';
import { TweetHeader } from '@/components/TweetHeader';

export default async function Tweet({ params }) {
  const { id } = await params;
  const tweet = await getTweet(id);
  const { headerLeft, headerCenter } = TweetHeader({ tweet });

  return (
    <>
      <Header left={headerLeft} center={headerCenter} />
      <TweetCard tweet={tweet} />
    </>
  );
}
