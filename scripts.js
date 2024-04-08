/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */

/*
    Snap Academy Project
    Charlie Kaing
*/


//const FRESH_PRINCE_URL = "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
//const CURB_POSTER_URL = "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
//const EAST_LOS_HIGH_POSTER_URL = "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";


//object for csv
//Class that has each show title along with their images and bullet points
//File Reader for the csv

csvstring = "";

function parseCSV(str) {
    const arr = [];
    let quote = false;  // 'true' means we're inside a quoted field

    // Iterate over each character, keep track of current row and column (of the returned array)
    for (let row = 0, col = 0, c = 0; c < str.length; c++) {
        let cc = str[c], nc = str[c+1];        // Current character, next character
        arr[row] = arr[row] || [];             // Create a new row if necessary
        arr[row][col] = arr[row][col] || '';   // Create a new column (start with empty string) if necessary

        // If the current character is a quotation mark, and we're inside a
        // quoted field, and the next character is also a quotation mark,
        // add a quotation mark to the current column and skip the next character
        if (cc == '"' && quote && nc == '"') { arr[row][col] += cc; ++c; continue; }

        // If it's just one quotation mark, begin/end quoted field
        if (cc == '"') { quote = !quote; continue; }

        // If it's a comma and we're not in a quoted field, move on to the next column
        if (cc == ',' && !quote) { ++col; continue; }

        // If it's a newline (CRLF) and we're not in a quoted field, skip the next character
        // and move on to the next row and move to column 0 of that new row
        if (cc == '\r' && nc == '\n' && !quote) { ++row; col = 0; ++c; continue; }

        // If it's a newline (LF or CR) and we're not in a quoted field,
        // move on to the next row and move to column 0 of that new row
        if (cc == '\n' && !quote) { ++row; col = 0; continue; }
        if (cc == '\r' && !quote) { ++row; col = 0; continue; }

        // Otherwise, append the current character to the current column
        arr[row][col] += cc;
    }
    return arr;
}

class Netflix {
    constructor(title,image,bullet1)
    {
        this.title = title;
        this.image = image;
        this.bullet1 = bullet1;
        this.bullet2 = "Bullet Point";
        this.bullet3 = "Bullet Point";
    }
    /*
    constructor(title,image,bullet1)
    {
        this.title = title;
        this.image = image;
        this.bullet1 = bullet1;
        this.bullet2 = "Bullet Point";
        this.bullet3 = "Bullet Point";
    }
    constructor(title,image,bullet1,bullet2)
    {
        this.title = title;
        this.image = image;
        this.bullet1 = bullet1;
        this.bullet2 = bullet2;
        this.bullet3 = "Bullet Point";
    }
    */
    gettitle(){
        return this.title;
    }
    getimage(){
        return this.image;
    }
    getremove()
    {
        
    }
}
const Fresh = new Netflix("Fresh Prince of Bel Air","https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg");
const curb = new Netflix("Curb Your Enthusiasm","https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg");
const east = new Netflix("East Los High","https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg");
// Array of Classes
let titles = [
    Fresh,
    curb,
    east,
   
];
// This is an array of strings (TV show titles)
/*
let titles = [
    "Fresh Prince of Bel Air",
    "Curb Your Enthusiasm",
    "East Los High",
    "Test2",
];
*/

// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.



// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    for (let i = 0; i < titles.length; i++) {
        let title = titles[i].gettitle();

        // This part of the code doesn't scale very well! After you add your
        // own data, you'll need to do something totally different here.
        
        let imageURL = "";
      
        imageURL = titles[i].getimage()
        /*
        * Original function replaced by changing constant string to classes with their associated images

        if (i == 0) {
            imageURL = FRESH_PRINCE_URL;
        } else if (i == 1) {
            imageURL = CURB_POSTER_URL;
        } else if (i == 2) {
            imageURL = EAST_LOS_HIGH_POSTER_URL;
        }
        */
        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, title, imageURL); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

function editCardContent(card, newTitle, newImageURL) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";
   
    const cardbulletpoint = card.querySelector("li")
    cardbulletpoint.textContent = "Test"

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
    console.log("Button Clicked!")
    alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

function removeLastCard() {
    titles.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}

/*
    New functions that I added
*/
// Add additional titles
function Add()
{
    newtitle = prompt("Enter A new Title");
    newimage = prompt("Enter A image url");
    bulletpoint = prompt("Enter A description");
    const temp = new Netflix(newtitle,newimage,bulletpoint);
    
    titles.push(temp);
    showCards();
}
// Sorts the titles array
function sort()
{
    titles.sort(function (a,b){
        if (a.gettitle() < b.gettitle()) {
            return -1;
          }
          if (a.gettitle() > b.gettitle()) {
            return 1;
          }
          return 0;
    });
    showCards();
}

//removes the card when clicked
function remove()
{
    let cardHeader = card.querySelector("h2");
    target = cardHeader.textContent();
    alert(target);
    for (i in titles) {
        if (titles[i].gettitle() == target)
        {
            index = i; 
            found = true;
        }
    }
    titles.splice(index,index);
    showCards();
}

//Removes a card based on the title 
function removeSpecfic()
{
    target = prompt("Enter the title to remove");
    found = false;
    for (i in titles) {
        if (titles[i].gettitle() == target)
        {
            index = i; 
            found = true;
        }
    }
    if(found == true)
    {
        titles.splice(index,index);
        showCards();
    }
    else
    {
        alert("Title not found")
    }
    
   
    

}

// Search Function
let myButton = document.querySelector("button")
function search() {
    const searchtarget = prompt("Enter Search target");
    localStorgate.setItem("target",searchtarget);
}