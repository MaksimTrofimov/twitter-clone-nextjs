'use client';

import { useState } from 'react';
import Link from 'next/link';

export function Header({ left = null, center = null, right = null }) {
  const [activeTab, setActiveTab] = useState('forYou');

  const getTabClass = (tab) =>
    `px-2 pb-1 border-b-2 ${
      activeTab === tab
        ? 'font-bold text-black border-blue-500'
        : 'font-normal text-gray-500 border-transparent'
    }`;

  return (
    <header>
      <div className="relative flex h-[45px] items-center">
        <div className="absolute left-0 pl-4">{left}</div>
        <div className="absolute left-1/2 -translate-x-1/2">{center}</div>
        <div className="absolute right-0 pr-4">{right}</div>
      </div>

      <nav className="pt-4">
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
      </nav>
    </header>
  );
}
