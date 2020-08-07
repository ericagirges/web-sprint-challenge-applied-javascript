// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {

    //create required elements
    const headerDiv = document.createElement("div");
    const spanDate = document.createElement("span");
    const title = document.createElement("h1");
    const spanTemp = document.createElement("span");

    //assign classes and text content accordingly
    headerDiv.classList.add("header");
    spanDate.classList.add("date");
    spanDate.textContent = "March 28, 2020"
    title.textContent = "Lambda Times"
    spanTemp.classList.add("temp");
    spanTemp.textContent = "98\u00B0"
    
   //nest elements appropriately
   headerDiv.appendChild(spanDate);
   headerDiv.appendChild(title);
   headerDiv.appendChild(spanTemp);

   //locate div.header-container in DOM
   const headerContainer = document.querySelector(".header-container");

   //append new header component to headerContainer
   headerContainer.appendChild(headerDiv)

   return headerContainer;

}


Header();

