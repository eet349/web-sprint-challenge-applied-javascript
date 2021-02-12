const Header = (title, date, temp) => {
	// TASK 1
	// ---------------------
	// Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
	// The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
	// The text inside elements will be set using their `textContent` property (NOT `innerText`).
	//
	//  <div class="header">
	//    <span class="date">{ date }</span>
	//    <h1>{ title }</h1>
	//    <span class="temp">{ temp }</span>
	//  </div>
	//
	// Create the elements we need for the Header component
	const headerDiv = document.createElement('div');
	const dateSpan = document.createElement('span');
	const titleH1 = document.createElement('h1');
	const tempSpan = document.createElement('span');
	// Set up the structure of the Header component according to the template
	headerDiv.appendChild(dateSpan);
	headerDiv.appendChild(titleH1);
	headerDiv.appendChild(tempSpan);
	// Add any classes based off the template
	dateSpan.classList.add('date');
	tempSpan.classList.add('temp');
	// Set the content of the elements as per the template
	dateSpan.textContent = date;
	titleH1.textContent = title;
	tempSpan.textContent = temp;

	return headerDiv;
};

const headerAppender = (selector) => {
	// TASK 2
	// ---------------------
	// Implement this function taking a css selector as its only argument.
	// It should create a header using the Header component above, passing arguments of your choosing.
	// It should append the header to the element in the DOM that matches the given selector.
	//
	// Grabs the anchor-point for attaching the Header component
	const headerAnchor = document.querySelector(selector);
	// Creates and appends a header component
	headerAnchor.appendChild(
		Header(
			'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur.',
			'Feb 12, 2021',
			'36°'
		)
	);
};

export { Header, headerAppender };
