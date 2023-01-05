export const load = async ({ url }) => {
  const res = await fetch(url.origin + '/api/something');
  const json = await res.json();
  return json;
}