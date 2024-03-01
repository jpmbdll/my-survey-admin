export default function transformQuestion(str) {
  const startIndex = str.indexOf("[") + 1;
  const endIndex = str.lastIndexOf("]");
  return str.substring(startIndex, endIndex).trim();
}
