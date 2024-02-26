export default function filterRespondentsValuePerQuestion(arr, question, type) {
  // Filter the data for entries where "Respondent type" is "Student"
  const entries = arr.filter((entry) => entry["Respondent type"] === type);

  // Extract the values of "1.1 Question" from the filtered entries
  const questionValues = entries.map((entry) => parseInt(entry[question]));

  return questionValues;
}
