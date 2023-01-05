export const load = async ({ fetch }) => {
  const res = await fetch('/api/something');
  const json = await res.json();
  return json;
}