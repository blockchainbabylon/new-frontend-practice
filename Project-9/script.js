const questions = [
    {
      question: "What is the capital of France?",
      answers: ["Berlin", "Madrid", "Paris", "Lisbon"],
      correct: 2,
    },
    {
      question: "Which language is primarily used for web development?",
      answers: ["Python", "C#", "JavaScript", "Java"],
      correct: 2,
    },
    {
      question: "What is 5 + 3?",
      answers: ["5", "8", "10", "15"],
      correct: 1,
    },
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const answersElement = document.getElementById("answers");
  const submitButton = document.getElementById("submit");
  const scoreElement = document.getElementById("score");
  
  function loadQuestion() {
    const current = questions[currentQuestion];
    questionElement.textContent = current.question;
    answersElement.innerHTML = "";
  
    current.answers.forEach((answer, index) => {
      const li = document.createElement("li");
      li.textContent = answer;
      li.dataset.index = index;
      li.addEventListener("click", () => selectAnswer(index));
      answersElement.appendChild(li);
    });
  }
  
  let selectedAnswer = null;
  
  function selectAnswer(index) {
    selectedAnswer = index;
  
    document.querySelectorAll("li").forEach((li) => {
      li.style.backgroundColor = "";
    });
  
    document.querySelector(`li[data-index="${index}"]`).style.backgroundColor =
      "#d3d3d3";
  
    submitButton.disabled = false;
  }
  
  submitButton.addEventListener("click", () => {
    if (selectedAnswer === questions[currentQuestion].correct) {
      score++;
    }
    currentQuestion++;
    scoreElement.textContent = `Score: ${score}`;
  
    if (currentQuestion < questions.length) {
      loadQuestion();
      submitButton.disabled = true;
      selectedAnswer = null;
    } else {
      showFinalScore();
    }
  });
  
  function showFinalScore() {
    questionElement.textContent = `You scored ${score} out of ${questions.length}!`;
    answersElement.innerHTML = "";
    submitButton.remove();
  }
  
  loadQuestion();
  