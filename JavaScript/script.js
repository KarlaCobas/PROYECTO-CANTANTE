        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        const contactForm = document.getElementById('contact-form');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formElements = contactForm.elements;
            for (let i = 0; i < formElements.length; i++) {
                if (formElements[i].type !== 'submit') {
                    formElements[i].value = '';
                }
            }
            
            const successMessage = document.createElement('div');
            successMessage.style.position = 'fixed';
            successMessage.style.top = '50%';
            successMessage.style.left = '50%';
            successMessage.style.transform = 'translate(-50%, -50%)';
            successMessage.style.backgroundColor = '#824d69';
            successMessage.style.color = '#fae5d8';
            successMessage.style.padding = '1.5rem 2.5rem';
            successMessage.style.borderRadius = '10px';
            successMessage.style.zIndex = '2000';
            successMessage.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
            successMessage.style.fontSize = '1.1rem';
            successMessage.style.fontWeight = '600';
            successMessage.textContent = '¡Mensaje enviado con éxito!';
            
            document.body.appendChild(successMessage);
            
            setTimeout(() => {
                document.body.removeChild(successMessage);
            }, 3000);
        });

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(section);
        });

        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            const main = document.querySelector('.main');
            main.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        });