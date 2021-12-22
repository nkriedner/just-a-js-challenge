let wordsInResponse = [];
let wordsInCorrectAnswer = [];

function test(response, correctAnswer) {
  response = response.toLowerCase();
  correctAnswer = correctAnswer.toLowerCase();
  console.log(response);

  let maximumPossibleScore = 0;
  let pointsScored = 0;

  wordsInResponse = response.split(" ");
  wordsInCorrectAnswer = correctAnswer.split(" ");

  for (let i = 0; i < wordsInCorrectAnswer.length; i++) {
    console.log(wordsInCorrectAnswer[i]);
    let wordInCorrectAnswer = wordsInCorrectAnswer[i].replace(".", "");
    if (!isNaN(wordInCorrectAnswer)) {
      console.log("+4");
      maximumPossibleScore += 4;
    } else if (wordInCorrectAnswer.length > 7) {
      maximumPossibleScore += 3;
      console.log("+3");
    } else if (wordInCorrectAnswer.length < 5) {
      maximumPossibleScore += 0;
      console.log("+0");
    } else {
      maximumPossibleScore += 1;
      console.log("+1");
    }
  }

  // Check matches
  for (let j = 0; j < wordsInResponse.length; j++) {
    let wordToCheck = wordsInResponse[j].replace(".", "");
    wordToCheck.replace(",", "");
    if (correctAnswer.includes(wordToCheck)) {
      console.log(wordToCheck + " is included");
      if (!isNaN(wordToCheck)) {
        console.log("+4");
        pointsScored += 4;
      } else if (wordToCheck.length > 7) {
        pointsScored += 3;
        console.log("+3");
      } else if (wordToCheck.length < 5) {
        pointsScored += 0;
        console.log("+0");
      } else {
        pointsScored += 1;
        console.log("+1");
      }
    } else {
      console.log(wordToCheck + " is NOT included");
    }
  }

  console.log("maximumPossibleScore:", maximumPossibleScore);
  console.log("pointsScored:", pointsScored);

  console.log("wordsInCorrectAnswer:", wordsInCorrectAnswer);
  console.log("wordsInResponse:", wordsInResponse);

  const percentageScore = (pointsScored / maximumPossibleScore) * 100;
  console.log("percentageScore:", percentageScore);
}

test(
  "There are twenty-four hours in a day. A year has 14 months.",
  "There are twenty-four hours in a day, 30 days in a month, and 12 months in the calender year."
);
