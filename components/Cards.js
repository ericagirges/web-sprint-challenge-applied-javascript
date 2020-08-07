import axios from "axios";

// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

//GET Request
axios
  .get("https://lambda-times-api.herokuapp.com/articles")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
      throw error;
    // debugger;
  });

//function to create article components
const createArticle = function (object) {
  //create new elements
  const cardDiv = document.createElement("div");
  const headline = document.createElement("div");
  const authorDiv = document.createElement("div");
  const imgContainer = document.createElement("div");
  const image = document.createElement("img");
  const authorName = document.createElement("span");

  //add classes and text content accordingly
  cardDiv.classList.add("card");
  headline.classList.add("headline");
  headline.textContent = object.headline;
  authorDiv.classList.add("author");
  imgContainer.classList.add("img-container");
  image.setAttribute("src", object.authorPhoto);
  authorName.textContent = `By ${object.authorName}`;

  //append elements appropriately to mimic markup template
  cardDiv.appendChild(headline);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgContainer);
  imgContainer.appendChild(image);
  authorDiv.appendChild(authorName);

  //add click event listener
  cardDiv.addEventListener("click", (event) => {
    console.log(object.headline);
  });

  return cardDiv;
};


//using function to create card for each article and append to the DOM
axios
  .get("https://lambda-times-api.herokuapp.com/articles")
  .then((response) => {
    //locate topics tabs
    const articlesContainer = document.querySelector(".cards-container")

    // iterate over the object. we need to use for in for this
    for (const key in response.data.articles) {
      // get the current list of articles by key (javascript, bootstrap, etc)
      const topicArticles = response.data.articles[key];

      // iterate over the articles
      topicArticles.forEach((article) => {
          console.log("article", article)
        // create an article component
        const articleElement = createArticle(article);

        //append article element to cards container
        articlesContainer.appendChild(articleElement)
      });
    }
  })
  .catch((error) => {
      //stretch error message for user
      const cardContainer = document.querySelector(".cards-container")
      const errorMessage = document.createElement("h3")
      errorMessage.textContent = "Requested articles failed to load properly."

      if(error){
          cardContainer.appendChild(errorMessage)
      }    
  });
