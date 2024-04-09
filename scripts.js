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




//object for csv
//Class that has each show title along with their images and bullet points
//File Reader for the csv
// Replace individual bulletpoints with description
class Netflix {
    constructor(title,image,bullet1)
    {
        this.title = title;
        this.image = image;
        this.bullet1 = bullet1;

    }
    gettitle(){
        return this.title;
    }
    getimage(){
        return this.image;
    }
    getbullet()
    {
        return this.bullet1;
    }
    editbullet(newstring){
        this.bullet1 = newstring;
    }
    editname(newstring)
    {
        this.title = newstring;
    }
    editimage(newstring)
    {
        this.image = newstring;
    }

}
/*
* Current dataset of netflix shows
*/


const squid = new Netflix("Squid Game","https://upload.wikimedia.org/wikipedia/en/d/dd/Squid_Game.jpg","Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes.");
const blood = new Netflix("Blood & Water","https://upload.wikimedia.org/wikipedia/en/0/0a/Blood_and_water_title_card.png","A painful past meets an uncertain present as Fiks struggles with her identity. Meanwhile, a shocking request threatens to hamper Puleng's progress.");
const angry = new Netflix("Angry Birds","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRPTlr_zCFaCUWfdWl9ZwkxFufMLACF8ws-daxlEbv58UCFAg4K","The feud between the flock of birds and the egg-stealing pigs continues in this animated series based on the popular video game.");
const turning = new Netflix("Turning Point: 9/11 and the War on Terror","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS2Mxof7cx-0J07nPOn5iKwpCtej74eWRkMWmG_CfBd7dYJJfca","This unflinching series documents the 9/11 terrorist attacks, from Al Qaeda's roots in the 1980s to America's response, both at home and abroad.");
const money = new Netflix("Money Heist: From Tokyo to Berlin","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTrIHZTjT5PB3jZfE5rLnX0KN73uz3QXymJPVvX23lRKwOhLk_L","It's the end of an era for the showrunners and actors behind \"Money Heist\" who share secrets about filming while saying goodbye to the beloved series.");
const wheel = new Netflix("Wheel of Fortune","https://m.media-amazon.com/images/M/MV5BMjFhMmUyZmQtYThhMC00YTJlLTllMzMtZDIzYjQ0MmQ0MTVhXkEyXkFqcGdeQXVyNTU2NDQ3NjU@._V1_.jpg","Pat Sajak and Vanna White host one of TV's most popular, long-running game shows, where players spin a wheel for prizes and solve mystery phrases.");
const hit = new Netflix("Hit & Run","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS5N8ZVJsgvhXKHYIjrwiaxjePD1KJP-HylId_gayCpw_jDT5Yc","A man searching for the truth behind his wife's death becomes caught up in a dangerous web of secrets and intrigue stretching from New York to Tel Aviv.")
const dead = new Netflix("The Walking Dead","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRthRY_pgm7ohLz6pspqsoS64OqQHaWfh37lUjRvFZhfQ&s","In the wake of a zombie apocalypse, survivors hold on to the hope of humanity by banding together to wage a fight for their own survival.")
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

// Original titles has been turned to a array of objects
let titles = [

    squid,
    blood,
    angry,
    turning,
    money,
    wheel,
    hit,
 
];


// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    for (let i = 0; i < titles.length; i++) {
        // Original has been replaced with objects with their own titles and images
        let title = titles[i].gettitle();
        let imageURL = "";
        imageURL = titles[i].getimage()
    
        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, title, imageURL,titles[i].getbullet()); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

function editCardContent(card, newTitle, newImageURL,descrip) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";
   
    const cardbulletpoint = card.querySelector("li")
    cardbulletpoint.textContent = descrip

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
    index = 0;
    for (i in titles) {
        if (titles[i].gettitle() == target)
        {
            index = i; 
            found = true;
        }
    }
    if(found == true)
    {
        titles.splice(index,1);
        showCards();
    }
    else
    {
        alert("Title not found");
    }
    
   
    

}

//Search
function search() {
    searchtarget = prompt("Enter Search target");
    found = false;
    index = 0;
    for(i in titles)
    {
        if(titles[i].gettitle() == searchtarget)
        {
            index = i;
            found = true;
        }
    }
    if(found == false)
    {
        alert("title not found");
    }
    else
    {
  
        titles.unshift(titles[index]);
        titles.splice(index,1);

    }
    showCards();
}