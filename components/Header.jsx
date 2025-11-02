export function Header({ left = null, center = null, right = null }) {
  return (
    <header className="relative flex h-[45px] items-center">
      <div className="absolute left-0 pl-4">{left}</div>
      <div className="absolute left-1/2 -translate-x-1/2">{center}</div>
      <div className="absolute right-0 pr-4">{right}</div>
    </header>
  );
}
