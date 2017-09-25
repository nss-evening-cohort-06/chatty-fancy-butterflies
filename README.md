# Chatty Daddy Chat App
___

>Chat with dirty dads anytime, anywhere

### Part 1
##### Requirements for the project:

- Use Bootstrap
- Complete 1 of the bonus items
- Balanced github contributions
- Completed Readme
- No grunt errors
- Use Browserify

###### Browserify

Create multiple Browserify modules, following the Single Responsibility Principle, that perform the following functions:
- main.js - initialize XHR, activate events, and populate DOM
- Appropriately named modules to:
	- Get messages
	- Delete messages
	- Add messages
	- Other modules as needed

###### Navigation
- Create an element to serve as the navigation bar for your application.
- Create an element to hold the logo for your application. It can be as simple as text, but if you want to find an image, that's fine.
- Create a input field for a user to enter in a message.
- Add an event listener for "keypress" and detect when then return key has been pressed in the message field.
- When return key is detected, you'll create a new message (see details below).
- Create a button to clear all messages.
- When the user clicks the clear messages button, all current chat messages should be removed from the application.
- If there are no messages, then the clear messages button should be disabled (see example above).
- The navigation bar should remain at the top of the screen, even if the contents of the page start to scroll.

###### Page Options
- Create two checkboxes below the message input field. One labeled "Dark theme" and the other labeled "Large text".
- When the user clicks on the dark theme checkbox, change the background color of your application to a dark gray, and the font color for messages should be white(ish)... you pick.
- If the user unchecks the box, the background color should change back to white with black text for messages.

###### Messages
- When the page is first loaded, you must load 5 messages from a local JSON file and pre-fill a message area `<div>` below the input field that will also hold all new messages as they get created.
- When the user presses the return key in the message field, the new message should be inserted into the message area.
- The message should have a button displayed after it with the text "Delete" inside of it.
- When the delete button next to a message is clicked, only that message should be removed from the DOM.

### Part 2
##### Bonus functions:
>Timestamp
- Put a timestamp on each message.
- Again, this will change the structure of your JSON file.
- To help with displaying times check out MomentJS

>Emoji's
- Can include emojis in the text of your message
- User types in :smile: your code interprets that and puts in the appropriate unicode.

>Multiple Users
- Create an object in your JavaScript that holds an array of names (see example below).
- Next to the message input box, there should be a radio button group for each name in the list.
- When a user enters a message, it should be prepended with the chosen user's name, in bold text.

>Editing
- Let users edit an existing message. 
- Add an edit button next to the delete button that, when clicked, will take the message and put it back in the message input at the top.
- Once user edits the message and presses the return key again, the message text in the list should be updated.

>Custom Themes
- Add a button/link to the UI labeled "Change Theme".
- Remove the existing elements for changing the theme.
- When user click on Change Theme element, show a Bootstrap modal dialog box.
- Inside the modal, show two color picker fields - one for background color and one for font color.
- Add a Save and Cancel button to modal.
- When user clicks Save apply the chosen colors.

### Part 3
##### How to run the app and live demo
>Package installs

You will need to install some packages after pulling down the code:
```
cd lib
npm install
````

Dependencies:
```
cd lib
npm init
npm install grunt grunt-contrib-jshint matchdep grunt-contrib-watch grunt-browserify jshint-stylish --save-dev
npm install jquery bootstrap --save
```
- run `Grunt` by typing "grunt" while in the lib folder in the command line. This will compile the whole project down into a single `app.js` file.

Emoji picker install:
```
npm install vanilla-emoji-picker --save
```

Timestamp install:
```
npm install moment --save
```

##### Live demo







