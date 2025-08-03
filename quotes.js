 window.onload = function () {
  const quoteElement = document.getElementById("quoteText");

  const quotes = {
    "gallery.html": "Every photo tells a story of love and legacy.",
    "dues.html": "Together, we build a stronger tomorrow.",
    "contact.html": "Communication is the heart of family unity.",
    "tree.html": "Roots hold us together, branches help us grow.",
    "index.html": "Unity is strength."
  };

  const currentPage = window.location.pathname.split("/").pop();
  const quote = quotes[currentPage] || "The Edozie Family – Bound by love, driven by unity.";

  let showing = false;

  function showQuote() {
    quoteElement.textContent = quote;
    quoteElement.classList.add("slide-in");
    quoteElement.classList.remove("slide-out");
    showing = true;

    setTimeout(() => {
      quoteElement.classList.remove("slide-in");
      quoteElement.classList.add("slide-out");
      showing = false;
    }, 5000);
  }

  showQuote();
  setInterval(showQuote, 8000);
};
