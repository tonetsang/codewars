function encode(str,  n)
{
  let key = String(n)
  return Array.from(str, (x, y) => x.charCodeAt(0) - 96 + Number(key[y % key.length]))
}