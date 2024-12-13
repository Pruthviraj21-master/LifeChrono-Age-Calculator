// Function to calculate Zodiac Sign
function calculateZodiacSign(dobDate) {
  const month = dobDate.getMonth() + 1; // Months are zero-indexed
  const day = dobDate.getDate();

  if ((month == 1 && day <= 19) || (month == 12 && day >= 22)) {
    return "Capricorn";
  } else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
    return "Aquarius";
  } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    return "Pisces";
  } else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
    return "Aries";
  } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
    return "Taurus";
  } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
    return "Gemini";
  } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
    return "Cancer";
  } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
    return "Leo";
  } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
    return "Virgo";
  } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
    return "Libra";
  } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
    return "Scorpio";
  } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
    return "Sagittarius";
  }
}

// Function to calculate age
function calculateAge() {
  const dob = document.getElementById('dob').value;
  if (!dob) {
    alert("Please enter your date of birth");
    return;
  }
  const dobDate = new Date(dob);
  const now = new Date();

  let years = now.getFullYear() - dobDate.getFullYear();
  let months = now.getMonth() - dobDate.getMonth();
  let days = now.getDate() - dobDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  let message = `You are ${years} years, ${months} months, and ${days} days old.`;

  if (now.getMonth() === dobDate.getMonth() && now.getDate() === dobDate.getDate()) {
    message += " 🎉 Happy Birthday! 🎂";

    const audio = document.getElementById('birthdaySong');
    audio.play();
    document.getElementById('stopButton').style.display = 'inline';
  }

  document.getElementById('result').innerText = message;

  document.getElementById('dayDisplay').innerText = dobDate.getDate();
  document.getElementById('monthDisplay').innerText = dobDate.getMonth() + 1;
  document.getElementById('yearDisplay').innerText = dobDate.getFullYear();

  const zodiacSign = calculateZodiacSign(dobDate);
  document.getElementById('zodiacSign').innerText = `Your zodiac sign is ${zodiacSign}.`;

  // Display the Buy Me a Coffee QR Code
  document.getElementById('buyMeACoffee').style.display = 'block';
}

// Function to stop the music
function stopMusic() {
  const audio = document.getElementById('birthdaySong');
  audio.pause();
  audio.currentTime = 0;
  document.getElementById('stopButton').style.display = 'none';
}

// Function to calculate the days until next birthday
function calculateNextBirthday(dobDate) {
  const now = new Date();
  const currentYear = now.getFullYear();
  let nextBirthday = new Date(dobDate);
  nextBirthday.setFullYear(currentYear);

  if (nextBirthday < now) {
    nextBirthday.setFullYear(currentYear + 1);
  }

  const diff = nextBirthday - now;
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

  return days;
}

// Ensure DOM is fully loaded before attaching the event listener
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('calculateBtn').addEventListener('click', calculateAge);
});




