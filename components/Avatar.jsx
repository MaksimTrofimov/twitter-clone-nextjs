import { getInitials } from '@/utils/getInitials';
import Image from 'next/image';

export function Avatar({ src, name, size = 48 }) {
  const initials = getInitials(name);
  console.log(name);
  return src ? (
    <Image
      className="rounded-full object-cover"
      src={src}
      alt={name ? `Avatar of ${name}` : 'User avatar'}
      width={size}
      height={size}
    />
  ) : (
    <div
      className="flex items-center justify-center rounded-full bg-gray-400 font-bold text-white"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      {initials}
    </div>
  );
}
