export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>
      <div id="wd-h-tag">
        <h4>Heading Tags</h4>
        ...
      </div>
      <div id="wd-p-tag">
        <h4>Paragraph Tag</h4>
        <p id="wd-p-1"> ... </p>
        <p>This is the first paragraph. The paragraph tag is used to format vertical gaps between long pieces of text like this one.</p>
        <p>This is the second paragraph. Even though there is a deliberate white gap between the paragraph above and this paragraph, by default browsers render them as one contiguous piece of text as shown here on the right.</p>
        <p>This is the third paragraph. Wrap each paragraph with the paragraph tag to tell browsers to render the gaps.</p>
      </div>
      <div id="wd-lists">
        <h4>List Tags</h4>
        <h5>Ordered List Tag</h5>
        <p>How to make pancakes:</p>
        <ol id="wd-pancakes">
          <li>Mix dry ingredients.</li>
          <li>Add wet ingredients.</li>
          <li>Stir to combine.</li>
          <li>Heat a skillet or griddle.</li>
          <li>Pour batter onto the skillet.</li>
          <li>Cook until bubbly on top.</li>
          <li>Flip and cook the other side.</li>
          <li>Serve and enjoy!</li>
        </ol>
        <p>My favorite recipe:</p>
        <ol id="wd-my-favorite-recipe">
          <li>Grind Dry Coconut with Onion and Ginger </li>
          <li>Heat and add masalas(salt too)</li>
          <li>Add the grinded stuff for the gravy</li>
          <li>Add paneer/chicken</li>
          <li>Add water and cream for flavor</li>
        </ol>
        <h5>Unordered List Tag</h5>
        <p>My favorite books (in no particular order):</p>
        <ul id="wd-my-books">
          <li>Dune</li>
          <li>Lord of the Rings</li>
          <li>Ender's Game</li>
          <li>Red Mars</li>
          <li>The Forever War</li>
        </ul>
        <p>Your favorite books (in no particular order):</p>
        <ul id="wd-your-books"> 
          <li>THe maze runner</li>
          <li>Goosebumps</li>
          <li>Percy Jackson</li>
          <li>Harry Potter</li>
        </ul>
      </div>
     

      {/* LOGIN format */}
      <div id="wd-forms">
        <h4>Form Elements</h4>
        <form id="wd-text-fields">
          <h5>Text Fields</h5>
          <label htmlFor="wd-text-fields-username">Username:</label>
          <input id="wd-text-fields-username" placeholder="jdoe" /> <br />
          <label htmlFor="wd-text-fields-password">Password:</label>
          <input type="password" id="wd-text-fields-password" value="123@#$asd" />
          <br />
          <label htmlFor="wd-text-fields-first-name">First name:</label>
          <input type="text" id="wd-text-fields-first-name" title="John" /> <br />
          <label htmlFor="wd-text-fields-last-name">Last name:</label>
          <input type="text" id="wd-text-fields-last-name" placeholder="Doe" value="Wonderland" title="The last name" />
          {/* copy rest of form elements here */}
        </form>
      </div>

      <h5>Text boxes</h5>
      <label>Biography:</label><br />
      <textarea id="wd-textarea" cols={30} rows={10}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>

      <h5 id="wd-buttons">Buttons</h5>
      <button id="wd-all-good" onClick={() => alert("Life is Good!")} type="button">
        Hello World!
      </button>

      <h5>File upload</h5>
      <input id="wd-upload" type="file" />


    </div>
  );
}
