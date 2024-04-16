// Set the date we're counting down to
const countDownDate = new Date("Apr 30, 2024 00:00:00").getTime();

// Update the countdown every second
const x = setInterval(function() {
  // Get the current date and time
  const now = new Date().getTime();
  
  // Calculate the distance between now and the countdown date
  const distance = countDownDate - now;
  
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Display the result in the element with id="timer"
  document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  
  // If the countdown is finished, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);