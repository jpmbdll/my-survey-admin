export default function transformDataToUI(data) {
  const averagesMap = new Map();

  // Iterate through each response
  data.forEach((response) => {
    Object.keys(response).forEach((key) => {
      // Skip Timestamp and Respondent type keys
      if (
        ![
          "Timestamp",
          "Name ",
          "Age",
          "Sex",
          "Stakeholder Classification",
          "Year Level ( for student)",
          "College",
          "Department ( for student and faculty only)",
        ].includes(key)
      ) {
        // If the question doesn't exist in the averages map, initialize it
        if (!averagesMap.has(key)) {
          averagesMap.set(key, {
            title: key,
            averages: [],
          });
        }

        // Get the averages object for this question
        const averagesObj = averagesMap.get(key);

        // Find or create the average object for this respondent type
        let respondentAvg = averagesObj.averages.find(
          (avg) => avg.respondentType === response["Stakeholder Classification"]
        );
        if (!respondentAvg) {
          respondentAvg = {
            xAxisLabel: response["Stakeholder Classification"].substring(0, 3),
            respondentType: response["Stakeholder Classification"],
            sum: 0,
            count: 0,
          };
          averagesObj.averages.push(respondentAvg);
        }

        // Add the answer to the sum
        respondentAvg.sum += parseInt(response[key]);
        respondentAvg.count++;
      }
    });
  });

  // Compute the averages
  const averagesArray = Array.from(averagesMap.values()).map((averagesObj) => {
    averagesObj.averages.forEach((avg) => {
      avg.mean = avg.sum / avg.count;
      delete avg.sum;
      delete avg.count;
    });
    return averagesObj;
  });

  return averagesArray;
}
