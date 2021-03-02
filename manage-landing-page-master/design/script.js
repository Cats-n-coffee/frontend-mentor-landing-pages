// Mobile open/close menu

const openMenuBtn = document.getElementById('open-menu');
const closeMenuBtn = document.getElementById('close-menu');
const menuWrapper = document.getElementById('mobile-menu-wrapper');
const menu = document.getElementsByClassName('header-nav')[0];
const mainContainer = document.getElementById('container');

openMenuBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);

function openMenu() {
    openMenuBtn.style.display = 'none';
    menuWrapper.style.display = 'block';
    closeMenuBtn.style.display = 'block';
    menu.style.display = 'flex';
    mainContainer.style.position = 'fixed';
    mainContainer.style.overflowY = 'hidden';
}

function closeMenu() {
    openMenuBtn.style.display = 'block';
    menuWrapper.style.display = 'none';
    closeMenuBtn.style.display = 'none';
    menu.style.display = 'none';
    mainContainer.style.position = 'relative';
    mainContainer.style.overflowX = 'hidden';
    mainContainer.style.overflowY = 'scroll';
}

// Email validation/error display
const newsletter = document.getElementById('newsletter');
const form = document.getElementsByTagName('form')[0];
const errorDiv = document.getElementById('error-div');

form.addEventListener('submit', verifyEmail);

function verifyEmail(e) {
    e.preventDefault();

    let userEmail = newsletter.value;

    if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(userEmail)) {
        console.log(userEmail)
        newsletter.value = '';
        return 
    }

    else if(userEmail === '') {
        errorDiv.innerText = 'Please enter an email address';
        newsletter.style.border = 'solid 1px #f25f3a';
        newsletter.style.color = '#f25f3a';
        setTimeout(clearDiv, 3000);
        return
    }

    else {
        errorDiv.innerText = 'Please insert a valid email';
        newsletter.style.border = 'solid 1px #f25f3a';
        newsletter.style.color = '#f25f3a';
        setTimeout(clearDiv, 3000);
        return
    }
}

function clearDiv() {
    newsletter.style.border = '';
    newsletter.style.color = '#9095a7';
    errorDiv.innerText = '';
    newsletter.value = '';
    
}

// Horizontal mobile scroll for testimonials
const sliderDiv = document.getElementsByClassName('review-slider')[0];
const slides = document.querySelectorAll('.review');
const scrollBubbles = document.querySelectorAll('.slide-circle');

sliderDiv.addEventListener('scroll', changeSlide);

function changeSlide() {
    let leftSideContainer = sliderDiv.scrollLeft;
    let rightSideContainer = leftSideContainer + sliderDiv.clientWidth;
    var leftSideSlide = 0;
    var rightSideSlide = 0;
 
    slides.forEach(slide => {
        leftSideSlide = slide.offsetLeft - sliderDiv.offsetLeft;
        rightSideSlide = leftSideSlide + slide.clientWidth;
     
        let isShowing = (leftSideSlide >= leftSideContainer && rightSideSlide <= rightSideContainer);

        if (isShowing) {
            showHideBubble(slide.dataset.slide);
        }
    })
}

function showHideBubble(number) {
    scrollBubbles.forEach(bubble => {
        if (bubble.dataset.slide === number) {
            bubble.style.backgroundColor = '#f25f3a';
        }
        else if (bubble.dataset.slide !== number) {
            bubble.style.backgroundColor = 'white';
        }
    })
}



