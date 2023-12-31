// header

const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 100);
});

// navlist

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

// active section of the page

// Get all the links in the navbar
const navLinks = document.querySelectorAll('.navlist a');

// Add an event listener to the scroll event
window.addEventListener('scroll', function() {
  const scrollPosition = window.pageYOffset;

  // Iterate over each section and check if it is in the viewport
  document.querySelectorAll('section').forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight) {
      const targetLink = document.querySelector(`.navlist a[href="#${section.id}"]`);

      // Remove the 'active' class from all links
      navLinks.forEach(link => link.classList.remove('active'));

      // Add the 'active' class to the target link
      if (targetLink) {
        targetLink.classList.add('active');
      }
    }
  });
});

// read more 

/* commented coz I have removed the section for a while

const serviceItems = document.querySelectorAll('.read');
const read_da = document.querySelector('#data-analysis');
const read_ml = document.querySelector('#machine-learning');
const read_dl = document.querySelector('#deep-learning');


serviceItems.forEach(item => {
  item.addEventListener('click', function() {
    if(item.id === 'read-da'){
      read_da.style.display = 'block';
    }
    else if(item.id === 'read-ml'){
      read_ml.style.display = 'block';
    }
    else{
      read_dl.style.display = 'block';
    }
  });
});

read_da.addEventListener('click', function(e) {
  if (e.target === read_da) {
    read_da.style.display = 'none';
  }
});

read_ml.addEventListener('click', function(e) {
  if (e.target === read_ml) {
    read_ml.style.display = 'none';
  }
});

read_dl.addEventListener('click', function(e) {
  if (e.target === read_dl) {
    read_dl.style.display = 'none';
  }
});

*/

// remove the background image, for the project boxes


const layerDivs = document.querySelectorAll('.row');

layerDivs.forEach(layerDiv => {
  const image = layerDiv.querySelector('.project-img');

  layerDiv.addEventListener('mouseenter', function() {
    image.classList.add('hide');
    layerDiv.classList.add('hide');
  });

  layerDiv.addEventListener('mouseleave', function() {
    image.classList.remove('hide');
    layerDiv.classList.remove('hide');
  });
});

// jump between multiple pages

function navigateToPage(url) {
  window.location.href = url;
}

// to prevent page scrolling when we use arrow keys to play the game

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
  }
});