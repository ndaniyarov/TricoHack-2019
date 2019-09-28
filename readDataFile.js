function readData(){
const app = document.getElementById('root')
const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container)
// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'eventList.json', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
      data.forEach(myObj => {
        // Create a div with a card class
        const partyBlock = document.createElement('div')
        partyBlock.setAttribute('class', 'card')

        // Create an partyName and set the text content to the film's title
        const partyName1 = document.createElement('h1')
        partyName1.textContent = myObj.partyName

        // Create a p and set the text content to the film's description
        const description1 = document.createElement('p')
        myObj.description = myObj.description.substring(0, 300) // Limit to 300 chars
        description1.textContent = `${myObj.description}...` // End with an ellipses

        // Append the cards to the container element
        container.appendChild(partyBlock)

        // Each card will contain an partyName1 and a description1
        card.appendChild(partyName1)
        card.appendChild(description1)
        //console.log(myObj.name)
      })
    } else {
      console.log('error')
    }
 }

// Send request
request.send()
}


