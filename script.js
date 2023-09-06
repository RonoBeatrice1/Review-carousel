let rev = 0; //This variable is used to keep track of the currently displayed review.
carousel(rev); // This line calls the carousel function with the initial value of rev (which is 0). This likely sets the initial state of the carousel.

function previousReview() {
  rev = rev - 1;
  carousel(rev);
}

function nextReview() {
  rev = rev + 1; //Increases the rev variable by 1 and then calls the carousel function with the updated rev value.
  carousel(rev);
}

function carousel(review) {
  let reviews = document.getElementsByClassName("review_items");

  if (review >= reviews.length) {
    review = 0;
    rev = 0;
  }

  if (review < 0) {
    //f the review is less than 0, it sets the review index and rev variable to the index of the last review in the list, allowing for backward looping.
    review = reviews.length - 1;
    rev = reviews.length - 1;
  }

  for (let i = 0; i < reviews.length; i++) {
    reviews[i].style.display = "none";
  }
  reviews[review].style.display = "block";
}

//"review" is a parameter representing the currently displayed review.
// "rev" is a variable that keeps track of the index of the currently displayed review.
// "reviews" is a collection of all review elements on the page, and it is used to access and manipulate these individual review elements within the carousel.
