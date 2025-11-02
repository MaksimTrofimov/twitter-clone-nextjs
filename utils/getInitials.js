export function getInitials(name = 'noname') {
  if (!name) return '';
  return name
    .split(' ')
    .map((n) => n[0].toUpperCase())
    .slice(0, 2)
    .join('');
}
