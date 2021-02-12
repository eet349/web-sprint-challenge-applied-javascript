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
	const { headline, authorPhoto, authorName } = article;

	const cardDiv = document.createElement('div');
	const headlineDiv = document.createElement('div');
	const authorDiv = document.createElement('div');
	const imgContainerDiv = document.createElement('div');
	const authorPhotoImg = document.createElement('img');
	const authorNameSpan = document.createElement('span');

	cardDiv.classList.add('card');
	headlineDiv.classList.add('headline');
	authorDiv.classList.add('author');
	imgContainerDiv.classList.add('img-container');

	imgContainerDiv.setAttribute('src', authorPhoto);

	cardDiv.appendChild(headlineDiv);
	cardDiv.appendChild(authorDiv);
	authorDiv.appendChild(imgContainerDiv);
	authorDiv.appendChild(authorNameSpan);
	imgContainerDiv.appendChild(authorPhotoImg);

	headlineDiv.textContent = headline;
	authorNameSpan.textContent = `By ${authorName}`;

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
	const cardAnchor = document.querySelector(selector);

	axios
		.get('https://lambda-times-api.herokuapp.com/articles')
		.then((res) => {
			console.log('res.data: ', res.data.articles);
			const keys = Object.keys(res.data.articles);
			console.log('keys: ', keys);
			keys.forEach((key) => {
				res.data.articles[key].forEach((article) => {
					cardAnchor.appendChild(Card(article));
				});
			});
		})
		.catch((err) => {
			console.log(err);
		});
};

export { Card, cardAppender };
