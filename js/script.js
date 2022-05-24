var vote = 0;
for (let star of document.getElementsByClassName("star")) {
  star.addEventListener("click", (e) => {
    vote = parseInt(e.target.id);
    updateVote();
  });
}

function updateVote() {
  for (let star of document.getElementsByClassName("star")) {
    if (parseInt(star.id) <= vote) {
      star.classList.replace("bi-star", "bi-star-fill");
      star.classList.add("selected");
    } else {
      star.classList.replace("bi-star-fill", "bi-star");
      star.classList.remove("selected");
    }
  }
}
