This project is a challenge from Frontend Mentor (see frontend-mentor.md).

This landing page was built with HMTL, SCSS and JS.
SCSS partials are named after HTML sections and main parts, media queries are separate.

The form at the bottom of the page checks user input and displays an error in case of an invalid email or empty submit form.
The mobile slider is handled in JS to fill the corresponding bubble at the bottom of the slideshow.
Using a scroll event listener, it checks which slide is currently showing by comparing the size of the slides container currently showing, to the left/right ends of the slide element.
It fills a bubble if the left end of the slide exceeds the current position (in pixels) of the container.