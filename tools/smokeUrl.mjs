export function withSkipIntro(base) {
  const u = new URL(base);
  u.searchParams.set('skipIntro', '1');
  return u.toString();
}
