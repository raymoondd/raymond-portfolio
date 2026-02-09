// Initialize EmailJS
(function(){
  emailjs.init("YOUR_EMAILJS_PUBLIC_KEY"); // Replace with your EmailJS public key
})();

function startQuiz() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  if(!name || !email) {
    alert("Please enter your name and a valid email.");
    return;
  }
  document.getElementById("userForm").style.display = "none";
  document.getElementById("quiz").style.display = "block";
}

function submitQuiz() {
  const answers = {
    q1: "63",
    q2: "Mars",
    q3: "Central Processing Unit"
  };
  let score = 0;
  for(let i=1; i<=3; i++) {
    const userAnswer = document.querySelector(`input[name=q${i}]:checked`);
    if(userAnswer && userAnswer.value === answers[`q${i}`]) score++;
  }

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  const templateParams = {
    to_email: "creamplayslegendoface@gmail.com",
    from_name: name,
    from_email: email,
    score: score,
    signature: "Raymond Pernitez, Software Engineer"
  };

  emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
    .then(() => alert(`Quiz submitted! Your score: ${score}`))
    .catch(err => alert("Failed to send email: " + err));
}
