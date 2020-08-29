
## Available Scripts

In the project directory, you can run:

Run:- 
npx create-react-app trello-clone
cd trello-clone
### `npm start`(here used)


Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Dependencies used here
I used only basic libraries of react.js------
redux: to manage the global state of the app
react-textarea-autosize: Component of react that is responsible for render a textarea that capable in resize itself when needed.
shortid: Responsible to generate unique ids.
react-beautiful-dnd: A beautiful library to implement drag and drop functionalities.

start:-
npm start

Clean structure of project:

Create the folders components and styles and move the files App.js and App.css:

mkdir src/components src/styles
mv src/App.js src/components/App.js
mv src/App.css src/styles/App.css
Now your project structure is:-

.
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── components
    |     └── App.js
    |     ├── AddList.js
    |     ├── card.js
    |     |        .
    |     |        .
    |     |        .
    |     └── ListEditors.js
    ├── index.css
    ├── index.js
    ├── serviceWorker.js
    └── styles
          └── App.css
          ├── AddList.css
          ├── card.css
          |        .
          |        .
          |        .
          └── ListEditors.css


          Please install neccessary dependencise before moving forward.