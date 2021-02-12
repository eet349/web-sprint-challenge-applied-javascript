import axios from 'axios';

const Card = (article) => {
	// TASK 5
	// ---------------------
	// Implement this function, which should return the markup you see below.
	// It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
	// The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
	// The text inside elements will be set using their `textContent` property (NOT `innerText`).
	// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
	//
	// <div class="card">
	//   <div class="headline">{ headline }</div>
	//   <div class="author">
	//     <div class="img-container">
	//       <img src={ authorPhoto }>
	//     </div>
	//     <span>By { authorName }</span>
	//   </div>
	// </div>
	//
	// De-structure the data we will be working with
	const { headline, authorPhoto, authorName } = article;
	// Create the elements we need for the cards
	const cardDiv = document.createElement('div');
	const headlineDiv = document.createElement('div');
	const authorDiv = document.createElement('div');
	const imgContainerDiv = document.createElement('div');
	const authorPhotoImg = document.createElement('img');
	const authorNameSpan = document.createElement('span');
	// Add on any classes specified in the card template
	cardDiv.classList.add('card');
	headlineDiv.classList.add('headline');
	authorDiv.classList.add('author');
	imgContainerDiv.classList.add('img-container');
	// Structure the Card according to the template
	cardDiv.appendChild(headlineDiv);
	cardDiv.appendChild(authorDiv);
	authorDiv.appendChild(imgContainerDiv);
	authorDiv.appendChild(authorNameSpan);
	imgContainerDiv.appendChild(authorPhotoImg);
	// Set the content to the appropriate elements
	authorPhotoImg.setAttribute('src', authorPhoto);
	headlineDiv.textContent = headline;
	authorNameSpan.textContent = `By ${authorName}`;

	cardDiv.addEventListener('click', (event) => {
		console.log(event.target.outerText);
	});

	return cardDiv;
};

const cardAppender = (selector) => {
	// TASK 6
	// ---------------------
	// Implement this function that takes a css selector as its only argument.
	// It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
	// However, the articles do not come organized in a single, neat array. Inspect the response closely!
	// Create a card from each and every article object in the response, using the Card component.
	// Append each card to the element in the DOM that matches the selector passed to the function.
	//
	// Create the anchor-point for the Card elements we are going to create
	const cardAnchor = document.querySelector(selector);
	// Make a get request with axios to the articles endpoint
	axios
		.get('https://lambda-times-api.herokuapp.com/articles')
		.then((res) => {
			// The data sends back an object with keys equal to the arrays we want to iterate on
			const keys = Object.keys(res.data.articles); // This sets keys to an array of all the keys on the articles object that was returned from the articles endpoint
			keys.forEach((key) => {
				res.data.articles[key].forEach((article) => {
					// Reference each key and access/iterate on its array
					cardAnchor.appendChild(Card(article)); // For each element in the array create a Card and append it to the anchor point.
				});
			});
		})
		.catch((err) => {
			// Catch any rejected requests and console.log the errors
			console.log(err);
		});
};

export { Card, cardAppender };
