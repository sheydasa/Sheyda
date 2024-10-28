function openModal(element) {
    document.getElementById('myModal').style.display = 'block';
    var imgSrc = element.querySelector('img').src; // Get the image source from the clicked element
    var projectInfo = element.querySelector('.project-details').innerHTML;

    document.getElementById('modal-img').src = imgSrc; // Set it to the modal image

    document.getElementById('modal-details').innerHTML = projectInfo;

}

function closeModal(event) {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('modal-img');
    
    if (event.target !== document.getElementById('modal-img')) {
        document.getElementById('myModal').style.display = 'none';
    }
}

// Select all the side nav links
const sideNavLinks = document.querySelectorAll('#side-nav a');
const sections = document.querySelectorAll('.art-collection section');

// Function to handle link clicks
sideNavLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor click behavior
        
        // Remove active class from all links
        sideNavLinks.forEach(link => link.classList.remove('active'));
        
        // Add active class to clicked link
        this.classList.add('active');
        
        // Scroll to the appropriate section
        const sectionId = this.getAttribute('href').substring(1); // Get the section id without the '#'
        const section = document.getElementById(sectionId);

        const yOffset = -200; // Adjust this value to set how far above the section you want to scroll
        const yPosition = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

        // Scroll to the position with smooth behavior
        window.scrollTo({ top: yPosition, behavior: 'smooth' });
        
    });
});


// Highlight link based on scroll position
window.addEventListener('scroll', function() {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // Check if the section is in the viewport
        if (pageYOffset >= sectionTop - 250 && pageYOffset < sectionTop + sectionHeight - 250) {
            currentSection = section.getAttribute('id');
        }
    });

    // Highlight the corresponding navigation link
    sideNavLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

let scale = 1;

function zoomPage(factor) {
    scale *= factor;
    document.getElementById("container").style.transform = `scale(${scale})`;
}

// Example to zoom in and out
document.addEventListener("wheel", (e) => {
    if (e.ctrlKey) {
        e.preventDefault();
        zoomPage(e.deltaY > 0 ? 0.9 : 1.1);
    }
});
