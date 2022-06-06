var userCurrentVoteValue = 0;

function registerStarEventListeners() {
  const starElements = document.getElementsByClassName("star");
  for (let star of starElements) {
    star.addEventListener("click", (e) => {
      userCurrentVoteValue = parseInt(e.target.id);
      updateVote();
    });
  }
}

function updateVote() {
  for (let star of document.getElementsByClassName("star")) {
    if (parseInt(star.id) <= userCurrentVoteValue) {
      star.classList.replace("bi-star", "bi-star-fill");
      star.classList.add("selected");
    } else {
      star.classList.replace("bi-star-fill", "bi-star");
      star.classList.remove("selected");
    }
  }
}

function submitFeedback() {
  const brachIdElement = document.getElementById("branchId");
  const ratingElement = document.getElementById("rating");
  const commentsElement = document.getElementById("comments-recommands");
  const phoneElement = document.getElementById("phoneNumber");
  const payload = {
    branch: parseInt(brachIdElement.value),
    rating: parseFloat(ratingElement.value),
    comments: commentsElement.value,
    phone: phoneElement.value,
  };
  console.log(payload);
  axios
    .post("https://eo4j9elgq5ug71d.m.pipedream.net", payload)
    .then(function (res) {
      console.log(res);
      alert("نظر شما با موفقیت ثبت شد");
    })
    .catch(function (error) {
      console.log(error);
      alert("خطایی پیش آمده");
    });
}

registerStarEventListeners();