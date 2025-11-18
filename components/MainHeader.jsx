import { Logo } from '@/components/Logo';

import { NavMenu } from '@/components/NavMenu';
export function MainHeader() {
  const headerLeft = <NavMenu />;
  const headerCenter = <Logo />;
  return { headerLeft, headerCenter };
}
