export default function filterPerType(arr, type) {
  return arr.filter((i) => i["Respondent type"] === type);
}
