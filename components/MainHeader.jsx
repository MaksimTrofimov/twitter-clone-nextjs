import { Logo } from '@/components/Logo';
import { Avatar } from '@/components/Avatar';

export function MainHeader() {
  const headerLeft = (
    <button>
      <Avatar size="30" />
    </button>
  );

  const headerCenter = <Logo />;

  return { headerLeft, headerCenter };
}
