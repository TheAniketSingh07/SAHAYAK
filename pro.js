        document.querySelectorAll('nav a').forEach(anchor => {
          anchor.addEventListener('click', function(e) {
              e.preventDefault();
  
              const targetId = this.getAttribute('href');
              const targetElement = document.querySelector(targetId);
  
              targetElement.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
              });
          });
      });

      
      document.querySelector('.newslettercontainer input[type="text"]').addEventListener('keypress', function(e) {
          if (e.key === 'Enter') {
              e.preventDefault();
              const email = this.value;
              if (validateEmail(email)) {
                  alert(`Thank you for subscribing with ${email}!`);
                  this.value = ''; // Clear the input field
              } else {
                  alert('Please enter a valid email address.');
              }
          }
      });

      function validateEmail(email) {
          const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return re.test(String(email).toLowerCase());
      }

      // Join us button functionality
      document.querySelector('.joinnow').addEventListener('click', function() {
          alert('Thank you for your interest in joining us!');
      });

      // Volunteer button functionality
      document.querySelectorAll('.volunteerbox button').forEach(button => {
          button.addEventListener('click', function() {
              alert('Thank you for your interest in volunteering!');
          });
      });