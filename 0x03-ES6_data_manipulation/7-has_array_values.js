export default function hasValuesFromArray(s, arr) {
  for (const a of arr) {
    if (!s.has(a)) {
      return false;
    }
  }
  return true;
}
