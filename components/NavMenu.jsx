'use client';
import { useState } from 'react';
import { Avatar } from './Avatar.jsx';
import { PlusCircleIcon } from '@heroicons/react/24/outline';

export function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <button onClick={toggleMenu}>
        <Avatar size="30" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black opacity-50 transition-opacity duration-300"
            onClick={toggleMenu}
          ></div>

          <div className="relative h-full w-72 -translate-x-0 transform bg-white shadow-xl transition-transform duration-300 ease-in-out">
            <div className="flex items-center justify-between p-4">
              <button onClick={toggleMenu}>
                <Avatar size="30" />
              </button>
              <button onClick={toggleMenu}>
                <PlusCircleIcon className="h-6 w-6 text-gray-700" />
              </button>
            </div>
            <nav className="p-4">
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="#">Chat</a>
                </li>
                <li>
                  <a href="#">Profile</a>
                </li>
                <li>
                  <a href="#">Premium</a>
                </li>
                <li>
                  <a href="#">Communities</a>
                </li>
                <li>
                  <a href="#">Lists</a>
                </li>
                <li>
                  <a href="#">Bookmarks</a>
                </li>
                <li>
                  <a href="#">Business</a>
                </li>
                <li>
                  <a href="#">Ads</a>
                </li>
                <li>
                  <a href="#">Settings and privacy</a>
                </li>
                <li>
                  <a href="#">Log out</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
