import axios from "axios"

// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

//GET request for data
axios.get("https://lambda-times-api.herokuapp.com/topics")
.then(function(response) {
    console.log(response)
    //iterate over each topic to create new tabs
    response.data.topics.forEach(title => {
        const newTab = document.createElement("div")
        newTab.classList.add("tab")
        newTab.textContent = title
        const topicsDiv = document.querySelector(".topics")
        topicsDiv.appendChild(newTab)
    })
})
.catch(function(error) {
    debugger
  })


