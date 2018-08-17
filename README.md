<<<<<<< HEAD
# JLB Skills Assessment - for Sean Cramer
Copyright © 2018 JLB All rights reserved.

Methods
---------
  - I placed the mockup in another browser window to check against as I worked.
  - All looks and acts as it should when the browser window is maximized at a 1920px width.  The page breaks when the browser window is less than 1920px, but responsiveness wasn't considered as that was not listed as a requirement.
  - I used a JS library called AOS (http://michalsnik.github.io/aos/) for the animate-on-scroll feature.
  - A link to a Jquery CDN was added to allow the `$(document).ready` function (in js/scripts.js) to work.
  - I used flexbox to help with laying out the animated images, video, and text block.
  - I had to remove white space from asset file names for them to work.

Known Issues
---------
  - In IE, the sizing/placement of the animated images isn't quite right.  Also, the largest of these images was overflowing its container, so I added `overflow: hidden` to the css to fix the issue, but now the animation for that image slides inside of the container rather than sliding in as a whole like it does in other browsers.
  - I don't own a Mac, so I'm unable to test in a current version of Safari.  I used the most recent Windows version I could find (2012), but the page doesn't work as desired.
  - I'm sure there are more elegant ways to create this layout.  I used more "margin hacking" and inline styles than I would have liked.
>>>>>>> 049d816bbf903ae1e0ea4d6b792ff1360f28d959
