import { Header } from '@/components/Header';
import { MainHeader } from '@/components/MainHeader';
import { getTweets } from '@/services/tweetService';
import { TweetCard } from '@/components/TweetCard';
import { NavTweet } from '@/components/NavTweet';

export default async function Tweets() {
  const { headerLeft, headerCenter } = MainHeader();
  const tweets = await getTweets();

  return (
    <main className="mx-auto w-full md:grid md:grid-cols-3 md:gap-4 md:px-4">
      <Header left={headerLeft} center={headerCenter} />
      <section className="flex flex-col items-center">
        <nav className="pt-4">{NavTweet && <NavTweet />}</nav>
        {tweets.map((tweet) => (
          <TweetCard key={tweet.id} tweet={tweet} />
        ))}
      </section>
    </main>
  );
}
