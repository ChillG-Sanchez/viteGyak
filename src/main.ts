import './style.css';


document.getElementById('quizForm')?.addEventListener('submit', function(event) {
  event.preventDefault();

  const answers: { [key: string]: string } = {
      question1: 'Budapest',
      question2: 'Duna',
      question3: 'Arany János'
  };

  let score = 0;
  for (const question in answers) {
      const userAnswer = (document.getElementById(question) as HTMLInputElement).value.trim();
      if (userAnswer.toLowerCase() === answers[question].toLowerCase()) {
          score++;
      }
  }

  const resultDiv = document.getElementById('result') as HTMLDivElement;
  const scoreMeter = document.getElementById('scoreMeter') as HTMLMeterElement;
  scoreMeter.value = score;

  if (score === 3) {
      resultDiv.className = 'alert alert-success alert-custom';
      resultDiv.textContent = 'Gratulálunk, hibátlan!';
  } else if (score === 2) {
      resultDiv.className = 'alert alert-warning alert-custom';
      resultDiv.textContent = 'Szép megoldás!';
  } else if (score === 1) {
      resultDiv.className = 'alert alert-info alert-custom';
      resultDiv.textContent = 'Jó próbálkozás!';
  } else {
      resultDiv.className = 'alert alert-danger alert-custom';
      resultDiv.textContent = 'Próbáld újra!';
  }

  resultDiv.style.display = 'block';
});