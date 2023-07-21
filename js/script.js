
import AOS from "aos";
import "aos/dist/aos.css";


// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});

const emailLink = document.getElementById('emailLink');

        emailLink.addEventListener('click', function(event) {
            // Optional: Show a confirmation message before opening the email client
            const confirmMsg = 'Are you sure you want to open your email client?';
            if (!window.confirm(confirmMsg)) {
                event.preventDefault(); // Prevent the default action (opening email client)
            }

            // You can also perform other actions here if needed

        });

    
