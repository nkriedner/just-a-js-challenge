let wordsInResponse = [];
let wordsInCorrectAnswer = [];

function test(response, correctAnswer) {
  // Remove all non numbers and letters in wordsInResponse
  // const regex = /[^A-Za-z0-9 ]/g;
  // response = response.replace(regex, "");
  console.log(response);

  let maximumPossibleScore = 0;
  let pointsScored = 0;

  wordsInResponse = response.split(" ");
  wordsInCorrectAnswer = correctAnswer.split(" ");

  for (let i = 0; i < wordsInCorrectAnswer.length; i++) {
    console.log(wordsInCorrectAnswer[i]);
    if (!isNaN(wordsInCorrectAnswer[i])) {
      console.log("+4");
      maximumPossibleScore += 4;
    } else if (wordsInCorrectAnswer[i].length > 7) {
      maximumPossibleScore += 3;
      console.log("+3");
    } else if (wordsInCorrectAnswer[i].length < 5) {
      maximumPossibleScore += 0;
      console.log("+0");
    } else {
      maximumPossibleScore += 1;
      console.log("+1");
    }
  }

  // Check matches
  for (let j = 0; j < wordsInResponse.length; j++) {
    if (correctAnswer.includes(wordsInResponse[j])) {
      console.log(wordsInResponse[j] + " is included");
      if (!isNaN(wordsInResponse[j])) {
        console.log("+4");
        pointsScored += 4;
      } else if (wordsInResponse[j].length > 7) {
        pointsScored += 3;
        console.log("+3");
      } else if (wordsInResponse[j].length < 5) {
        pointsScored += 0;
        console.log("+0");
      } else {
        pointsScored += 1;
        console.log("+1");
      }
    } else {
      console.log(wordsInResponse[j] + " is NOT included");
    }
  }

  console.log("maximumPossibleScore:", maximumPossibleScore);
  console.log("pointsScored:", pointsScored);

  console.log("wordsInCorrectAnswer:", wordsInCorrectAnswer);
  console.log("wordsInResponse:", wordsInResponse);
}

test(
  "There are twenty-four hours in a day. A year has 14 months.",
  "There are twenty-four hours in a day, 30 days in a month, and 12 months in the calender year."
);
