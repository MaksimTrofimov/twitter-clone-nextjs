import { Avatar } from '@/components/Avatar';
import Image from 'next/image';
import Link from 'next/link';

export function TweetCard({ tweet }) {
  return (
    <article className="flex w-full gap-3 border-t border-b border-gray-200 p-2">
      <Avatar src={tweet.avatar} alt={tweet.name} />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-x-2">
          <Link
            href={`/${tweet.username}`}
            className="truncate font-bold hover:underline"
          >
            {tweet.name}
          </Link>
          <Link
            href={`/${tweet.username}`}
            className="truncate text-sm text-gray-500 hover:underline"
          >
            @{tweet.username}
          </Link>
          <Link
            href={`/tweet/${tweet.id}`}
            className="truncate text-sm text-gray-500 hover:underline"
          >
            · {tweet.time}
          </Link>
        </div>
        <Link
          key={tweet.id}
          href={`/tweet/${tweet.id}`}
          className="cursor-pointer"
        >
          <p className="tweet-text mt-1 break-words">{tweet.body}</p>
        </Link>
        <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-500">
          <Image
            src="/icons/comment.svg"
            alt="comment"
            width={14}
            height={15}
            className="h-auto w-auto"
          />
          <span>{tweet.comment}</span>
          <Image
            src="/icons/retweet.svg"
            alt="retweet"
            width={17}
            height={12}
            className="h-auto w-auto"
          />
          <span>{tweet.retweet}</span>
          <Image
            src="/icons/heart.svg"
            alt="heart"
            width={14}
            height={15}
            className="h-auto w-auto"
          />
          <span>{tweet.reactions.likes}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            aria-hidden="true"
            role="img"
            fill="currentColor"
          >
            <g>
              <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
            </g>
          </svg>
          <span>{tweet.views}</span>
        </div>
      </div>
    </article>
  );
}
