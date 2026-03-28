function startSurprise() {
  document.getElementById("content").style.display = "block";

  // Play music
  var music = document.getElementById("music");
  if (music) {
    music.play();
  }

  startTyping();
  createHearts();
}

// Your message (typing effect)
const text = `Happy Birthday sunio 🥳🫂

You are the only person who loving me most in a very different way,
but which way I don't know 😅… but it's okay 😌💖

God will complete all your wishes and dreams in future ✨
Just believe on your strength 💪, stay consistent and focus on your weaknesses 💖

Once again I wish you many more Happy returns of the day MY ....... 💖`;

let index = 0;

function startTyping() {
  function type() {
    if (index < text.length) {
      document.getElementById("typing").innerHTML += text.charAt(index);
      index++;
      setTimeout(type, 40);
    }
  }
  type();
}

// Floating hearts animation
function createHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }, 500);
}