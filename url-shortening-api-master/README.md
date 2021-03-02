This project is a challenge from Frontend Mentor (see frontend-mentor.md).

It was built with HTML, SCSS and JS.
All SCSS partials are named after each HTML section, media queries are separate.

The user input if verified to be valid if it is not empty, in which case an error is displayed for 3 seconds.
Once the input is valid and sent, the fetch API is used.
The original input and the shortened URL are then stored in LocalStorage and displayed on the screen with a dynamic element.

The clipboard copy is using a temporary textarea to perform the copy operation.