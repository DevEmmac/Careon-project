   // Get the button
   const backToTopButton = document.getElementById("backToTopBtn");

   // Show the button when the user scrolls down 300px from the top
   window.onscroll = function() {
       if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
           backToTopButton.style.display = "block";
       } else {
           backToTopButton.style.display = "none";
       }
   };

   // Scroll to the top when the button is clicked
   backToTopButton.addEventListener("click", function() {
       // For smooth scrolling
       window.scrollTo({
           top: 0,
           behavior: "smooth"
       });
   });