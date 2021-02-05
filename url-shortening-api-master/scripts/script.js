// Toggle mobile menu
const hamburgerMenu = document.getElementById('hamburger-menu');
const headerMenu = document.getElementsByClassName('header-menu')[0];
const container = document.getElementById('container');

hamburgerMenu.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    headerMenu.classList.toggle('show');
    document.body.classList.toggle('stop-scroll');
}

// ------------------------------- URL SHORTENING ------------------------------- //

const userInput = document.getElementById('enter-url'); // input tag
const labelInput = document.getElementById('label-input') // label tag 
const form = document.getElementById('shortening-form'); // form tag
const resultsDiv = document.getElementById('user-results'); // div tag for results inserted dynamically

form.addEventListener('submit', getUserInput);

// Retrieves user input and verifies it
function getUserInput(e) {
    e.preventDefault();

    if (userInput.value === '') {

        // if user submits empty form, display red message and box for 3 seconds
        labelInput.classList.toggle('error');
        userInput.classList.toggle('error');
        setTimeout(removeErrors, 3000);
    }

    var cleanInput = userInput.value;

    console.log(cleanInput)
    shortenUrlWithApi(cleanInput)

    userInput.value = '';
}

// Connects to URL shortner Api
function shortenUrlWithApi(userURL) {
    fetch(`https://api.shrtco.de/v2/shorten?url=${userURL}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        createResultsList(data);
    });
}

// Dynamically creates list of results to display
function createResultsList(data) {
    var longLink = data.result.original_link;
    var shortLink = data.result.full_short_link2;

    var storageItem = {
        search: longLink,
        result: shortLink
    }

    placeInLocalStorage(storageItem);

    resultsDiv.style.display = "flex";

    var itemResult = `<li>
                        <span class="long-link">${longLink}</span>
                        <span class="short-link">${shortLink}</span>
                        <button class="green-button copy-button" data-link="link-">Copy</button>
                      </li>`;

    resultsDiv.innerHTML = itemResult;
    
    const copyButtons = document.querySelectorAll('.copy-button');
    copyButtons.forEach(button => button.addEventListener('click', copyLink))

    console.log(shortLink)
}

// Gives the 'copy link' button its active color
function copyLink() {
    console.log('copy link');

    let copyColor = this.style.backgroundColor;
    this.style.backgroundColor = copyColor ? '' : "#3B3054"; 
    this.style.outline = 'none';
    this.innerText = 'Copied!';

 
    const shortLinkCopied = this.previousElementSibling.innerText;
    var textArea = document.createElement('textarea');
    textArea.value = shortLinkCopied;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();

    console.log(shortLinkCopied);
}

function placeInLocalStorage(item) {
    console.log(item)
    // var items;
    // if (localStorage.getItem('sSearchResults') === null) {
    //     items = [];
    //     console.log('continue')
    // }
    // else {
    //     console.log('else')
    //     items = JSON.parse(localStorage.getItem('sSearchResults'));
    // }

    // console.log(typeof items)
    // items.push(item);
    // localStorage.setItem('sSearchResults', JSON.stringify(items));
    // console.log('item stored');

    // if (localStorage) {
    //     var json = localStorage.getItem('sStorage') || '{"products": []}';
    //     var cart = JSON.parse(json);
    //     cart.products.push(item);
    //     localStorage.setItem("sStorage", JSON.stringify(cart))
    // }

    localStorage.setItem('cats', 'chichi');
}

function removeErrors() {
    labelInput.classList.toggle('error');
    userInput.classList.toggle('error');
    return;
}