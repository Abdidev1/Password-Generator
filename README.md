# Password-Generator

## Description:
 A Simple tool to create random passwords, no adds,no bloat, just get the password you need.

## Tech Stack:
 * HTML: The core of the page (buttons,boxes,etc).
 * CSS: Styling giving it bold, contrast look.
 * Javascript: used in logic that handles button clicks,maths & copy to clipboard.

## Why I Built this:
I Built this to get better at web development. it was a great way to practice DOM Manipulation and basic logic without huge framworks.
i wanted to build something browser based.
 
## How it works:
 The logic is pretty simple, when you click generate, the code reads the setting and pulls characters from charSet Object.

 it uses guaranteedChars.push() to make sure you get atleast on of evry type you picked. A for loop fills the rest of the length, and shuffleArray() mixes allthat up so it's random.finally it uses navigator.clipboard.writeText() so you can copy result with one click!

## How to contribute:
 if you have any idea add it & feel free to send Pull Request
* Steps:
 1. Fork the repo
 2. make your changes
 3. open pull request and send them.