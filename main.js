window.onload = function() {  
    const mainContent = document.querySelector('.main_content');  
    const fadeIns = document.querySelectorAll('.fade-in');  

    // Show the main content  
    mainContent.style.opacity = 1;  

    // Trigger fade-in for each element, including nav items  
    fadeIns.forEach((el, index) => {  
        setTimeout(() => {  
            el.style.opacity = 1;  
            el.style.transform = 'translateY(0)'; // Move into place  
        }, index * 300); // Delay for each element  
    });  
}; 