import axios from 'axios';

const Tabs = (topics) => {
	// TASK 3
	// ---------------------
	// Implement this function which takes an array of strings ("topics") as its only argument.
	// As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
	// then the function returns the markup below.
	// The tags used, the hierarchy of elements and their attributes must match the provided markup!
	// The text inside elements will be set using their `textContent` property (NOT `innerText`).
	//
	// <div class="topics">
	//   <div class="tab">javascript</div>
	//   <div class="tab">bootstrap</div>
	//   <div class="tab">technology</div>
	// </div>
	//
	// Creates an element that will be the container for the tab divs as per the template
	const topicsDiv = document.createElement('div');
	// Sets the appropriate classes
	topicsDiv.classList.add('topics');

	topics.forEach((topic) => {
		// Loops over the topics array
		let tabDiv = document.createElement('div'); // Creating new div elements
		tabDiv.classList.add('tab'); // Assigning appropriate classes for styling
		topicsDiv.appendChild(tabDiv); // Appends that div to the above tabs container div
		tabDiv.textContent = topic; // Inserts the content of the tab div
	});

	return topicsDiv;
};

const tabsAppender = (selector) => {
	// TASK 4
	// ---------------------
	// Implement this function which takes a css selector as its only argument.
	// It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
	// Find the array of topics inside the response, and create the tabs using the Tabs component.
	// Append the tabs to the element in the DOM that matches the selector passed to the function.
	//
	// Creates an anchor-point for the tabs components
	const tabAnchor = document.querySelector(selector);
	// Axios get request to the topics endpoint
	axios
		.get('https://lambda-times-api.herokuapp.com/topics')
		.then((res) => {
			tabAnchor.appendChild(Tabs(res.data.topics)); // Appends a Tabs component to its anchor-point
		})
		.catch((err) => {
			console.log(err);
		});
};

export { Tabs, tabsAppender };
