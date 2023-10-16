// /Users/peter/Downloads/base (next-tailwind-amazona)/pages/index.js

// two lines are a comment - this doesn't affect the code

// See how I put the PATH on the very first time. This is very important when you use gpt!
// Put the path on the first line of every file you modify/plan to modify
// This will help GPT and save time with importing
// TASK: Add the path as a comment on the first line of the "TopBar" component

// Index file is the "/" home page path www.amazon.com/ is Index
// Login file is the "/login" page, path is www.amazon.com/login

// For pages you can have .js on the end
// for components I like to do .jsx
// no real difference but jsx is more suited to nextjs
// also it's easier to components from other files apart

import TopBar from "../components/TopBar";

// First thing when you get a new folder
// when you download new project (zip or git clone)
// always open terminal!
// then in terminal run "npm install"

// this installs all the dependencies
// then do "npm run dev"
// this runs the project (local repository) on local server (usually localhost:3000)
// "GPT can you please tell me about 'npm run dev' and my local repository compared to what is on github?"

export default function Home() {
  // so lets say you have taken a look at all the code
  // you want to code something
  // lets try in index page
  // You want to modify index page
  // So for GPT you would need to provide all the code from the index page
  // ALSO we see TopBar is imported, usually we would provide GPT with the code of imports
  // but in our case not really necessary. Use your judgement as you get experience
  // ALWAYS start the first prompt in the conversation with
  // "I'm working on a react, nextjs and tailwind css project on my windows computer"
  // or else gpt might give you a response back in python or some garbage.

  // prompt engineering
  // 1. Make sure you have path in first line on each file
  // 2. Use opening prompt "im working on react........."
  // 3. Tell it EXACTLY what you want.
  // 3.1 bonus: I like to finish the prompt with "Show me the full code even if it's repetitive or exactly the same"
  // try with and without 3.1 you will see why
  // 4. Copy and paste code into message
  // 5. Generate response
  return (
    <TopBar title="Home Page">
      <div>Main page</div>
    </TopBar>
  );
}
