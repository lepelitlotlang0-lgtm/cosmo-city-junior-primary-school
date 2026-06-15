// ======================
// MOBILE MENU
// ======================
const menuBtn = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

// ======================
// STICKY NAVBAR
// ======================
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (header) {
    header.classList.toggle("sticky", window.scrollY > 50);
  }
});

// ======================
// SMOOTH SCROLL
// ======================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// ======================
// REVEAL ON SCROLL
// ======================
const revealItems = document.querySelectorAll(".reveal");

function revealElements() {
  revealItems.forEach(item => {
    const top = item.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealElements);
revealElements();

// ======================
// COUNTER ANIMATION
// ======================
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

  const updateCounter = () => {

    const target = +counter.dataset.target;
    const current = +counter.innerText;

    const increment = target / 100;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);

      setTimeout(updateCounter, 20);

    } else {

      counter.innerText = target;

    }
  };

  updateCounter();
});

// ======================
// DARK MODE
// ======================
const darkModeBtn = document.getElementById("darkModeToggle");

if (darkModeBtn) {

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }

  darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark")
        ? "dark"
        : "light"
    );

  });
}

// ======================
// ANNOUNCEMENTS
// ======================
const announcementBox =
  document.getElementById("announcement");

const announcements = [
  "Admissions for 2027 are now open.",
  "Parent meeting this Friday.",
  "Sports day next month.",
  "Welcome to Cosmo City Junior Primary."
];

let announcementIndex = 0;

if (announcementBox) {

  setInterval(() => {

    announcementBox.textContent =
      announcements[announcementIndex];

    announcementIndex++;

    if (announcementIndex >= announcements.length) {
      announcementIndex = 0;
    }

  }, 4000);

}

// ======================
// EVENTS
// ======================
const eventBox = document.getElementById("eventTicker");

const events = [
  "Sports Day - 12 July",
  "Parent Meeting - 20 July",
  "Cultural Day - 5 August",
  "Science Expo - 15 August"
];

let eventIndex = 0;

if (eventBox) {

  setInterval(() => {

    eventBox.textContent = events[eventIndex];

    eventIndex++;

    if (eventIndex >= events.length) {
      eventIndex = 0;
    }

  }, 5000);

}

// ======================
// BACK TO TOP
// ======================
const topButton = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

  if (!topButton) return;

  if (window.scrollY > 400) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }

});

if (topButton) {

  topButton.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

}

// ======================
// CONTACT FORM
// ======================
const contactForm =
  document.getElementById("contactForm");

if (contactForm) {

  contactForm.addEventListener("submit", e => {

    e.preventDefault();

    const name =
      document.getElementById("name").value;

    const email =
      document.getElementById("email").value;

    const message =
      document.getElementById("message").value;

    if (!name || !email || !message) {

      alert("Please complete all fields.");

      return;
    }

    alert("Message submitted successfully.");

    contactForm.reset();

  });

}

// ======================
// NEWSLETTER
// ======================
const newsletterForm =
  document.getElementById("newsletterForm");

if (newsletterForm) {

  newsletterForm.addEventListener("submit", e => {

    e.preventDefault();

    alert("Thank you for subscribing!");

    newsletterForm.reset();

  });

}

// ======================
// LIVE CLOCK
// ======================
const liveClock =
  document.getElementById("liveClock");

if (liveClock) {

  setInterval(() => {

    liveClock.textContent =
      new Date().toLocaleTimeString();

  }, 1000);

}

// ======================
// GREETING
// ======================
const greeting =
  document.getElementById("greeting");

if (greeting) {

  const hour = new Date().getHours();

  if (hour < 12) {

    greeting.textContent =
      "Good Morning";

  } else if (hour < 18) {

    greeting.textContent =
      "Good Afternoon";

  } else {

    greeting.textContent =
      "Good Evening";

  }

}

// ======================
// VISITOR COUNTER
// ======================
let visitors =
  localStorage.getItem("visitors") || 0;

visitors++;

localStorage.setItem(
  "visitors",
  visitors
);

const visitorCount =
  document.getElementById("visitorCount");

if (visitorCount) {
  visitorCount.textContent = visitors;
}

// ======================
// AUTO COPYRIGHT YEAR
// ======================
const year =
  document.getElementById("year");

if (year) {
  year.textContent =
    new Date().getFullYear();
}

// ======================
// LOADING SCREEN
// ======================
window.addEventListener("load", () => {

  const loader =
    document.querySelector(".loader");

  if (loader) {

    loader.classList.add("hide");

    setTimeout(() => {
      loader.remove();
    }, 1000);

  }

});