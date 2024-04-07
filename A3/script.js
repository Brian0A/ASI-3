// Fake authentication credentials
const fakeUsername = "user123";
const fakePassword = "pass123";

// Quiz answers
const answers = {
  1: "4",
  2: "mercury"
  // Add more answers here
};

let score = 0;

// Function to start the quiz after authentication
function startQuiz() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === fakeUsername && password === fakePassword) {
    document.getElementById("authentication").style.display = "none";
    document.getElementById("quiz").style.display = "block";
  } else {
    alert("Incorrect username or password. Please try again.");
  }
}

// Function to check the answer
function checkAnswer(questionNumber) {
  const selectedAnswer = document.querySelector(`input[name="answer${questionNumber}"]:checked`);
  const feedback = document.getElementById(`feedback${questionNumber}`);

  if (!selectedAnswer) {
    alert("Please select an answer.");
    return;
  }

  const answer = selectedAnswer.value;

  if (answer === answers[questionNumber]) {
    feedback.textContent = "Correct!";
    feedback.style.color = "green";
    score++;
  } else {
    feedback.textContent = "Incorrect. Try again!";
    feedback.style.color = "red";
  }

  // Move to the next question or show the result
  const nextQuestionNumber = questionNumber + 1;
  const nextQuestion = document.getElementById(`question${nextQuestionNumber}`);
  if (nextQuestion) {
    document.getElementById(`question${questionNumber}`).style.display = "none";
    nextQuestion.style.display = "block";
  } else {
    showResult();
  }
}

// Function to show the final result
function showResult() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("score").textContent = score + " out of " + Object.keys(answers).length;
}
