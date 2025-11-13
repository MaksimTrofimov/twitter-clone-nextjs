import BackButton from './BackButton';

export function TweetHeader({ tweet }) {
  const headerLeft = <BackButton href="/tweet" />;

  const headerCenter = <span className="text-lg font-bold">Tweet</span>;

  return { headerLeft, headerCenter };
}
