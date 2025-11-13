export function getInitials(name = 'noname') {
  return name
    .split(' ')
    .map((n) => n[0].toUpperCase())
    .slice(0, 2)
    .join('');
}
