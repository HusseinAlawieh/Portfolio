(function() {
    emailjs.init('bE3k9PtdJuRwuRFwn');//public api
})();
window.onload = function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_07wy674', 'template_3oje24f', this)//service id and template id
            .then(function() {
                Swal.fire('Message Sent', 'Your message has been sent successfully!', 'success');
            }, function(error) {
                Swal.fire('Error', 'Failed to send email. Please try again.', 'error');
            });
    });
}