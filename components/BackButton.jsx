'use client';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';

export default function BackButton({ href, buttonName = '' }) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(href)}
      className="flex items-center text-blue-600 hover:text-blue-800"
    >
      <ChevronLeftIcon className="mr-2 h-5 w-5" />
      {buttonName}
    </button>
  );
}
