'use client';
import { useState } from 'react';
import Link from 'next/link';

export function NavTweet() {
  const [activeTab, setActiveTab] = useState('forYou');

  const getTabClass = (tab) =>
    `px-2 pb-1 border-b-2 ${
      activeTab === tab
        ? 'font-bold text-black border-blue-500'
        : 'font-normal text-gray-500 border-transparent'
    }`;

  return (
    <ul className="flex items-center justify-center gap-22">
      <li
        className={getTabClass('forYou')}
        onClick={() => setActiveTab('forYou')}
      >
        <Link href="/tweet">For you</Link>
      </li>
      <li
        className={getTabClass('following')}
        onClick={() => setActiveTab('following')}
      >
        <Link href="/tweet">Following</Link>
      </li>
    </ul>
  );
}
