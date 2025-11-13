import { Header } from '@/components/Header';
import { MainHeader } from '@/components/MainHeader';
import { getTweets } from '@/services/tweetService';
import { TweetCard } from '@/components/TweetCard';

export default async function Tweets() {
  const { headerLeft, headerCenter } = MainHeader();
  const tweets = await getTweets();

  return (
    <>
      <Header left={headerLeft} center={headerCenter} />
      <section className="flex flex-col items-center">
        {tweets.map((tweet) => (
          <TweetCard key={tweet.id} tweet={tweet} />
        ))}
      </section>
    </>
  );
}
