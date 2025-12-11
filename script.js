document.addEventListener('DOMContentLoaded', function () {

    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger-wrap');
    const menuOverlay = document.getElementById('menu-overlay');
    const menuLinks = document.querySelectorAll('.mobile-menu-list a');

    if (hamburger && menuOverlay) {
        hamburger.addEventListener('click', function () {
            menuOverlay.classList.toggle('active');
            hamburger.classList.toggle('is-active');
            document.body.style.overflow = menuOverlay.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when a link is clicked
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuOverlay.classList.remove('active');
                hamburger.classList.remove('is-active');
                document.body.style.overflow = '';
            });
        });
    }

    // Accordion Functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const content = header.nextElementSibling;

            // Close other items for exclusive accordion behavior
            document.querySelectorAll('.accordion-item').forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.accordion-content').style.maxHeight = null;
                }
            });

            // Toggle current
            item.classList.toggle('active');

            if (item.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
            }
        });
    });

    // Sticky Header on Scroll
    const header = document.querySelector('.page-header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth Scroll for Anchor Links (using Lenis)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                lenis.scrollTo(targetElement, {
                    offset: -90 // Header offset
                });
            }
        });
    });

    // Scroll Animations (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Select elements to animate
    const animateElements = document.querySelectorAll('.hero-content, .value-item, .bento-item, .review-card, .competence-card, .section-headline, .section-header, .google-widget-container');

    animateElements.forEach(el => {
        el.classList.add('fade-up');
        observer.observe(el);
    });

    // Dropdown Toggle
    const dropdownToggle = document.getElementById('rechtliches-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownParent = document.querySelector('.dropdown');

    if (dropdownToggle && dropdownMenu) {
        dropdownToggle.addEventListener('click', function (e) {
            e.preventDefault();
            dropdownMenu.classList.toggle('show');
            dropdownParent.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function (e) {
            if (!dropdownParent.contains(e.target)) {
                dropdownMenu.classList.remove('show');
                dropdownParent.classList.remove('active');
            }
        });
    }

    // Parallax Hero Effect
    const heroSection = document.querySelector('.hero-section');
    const heroImage = document.querySelector('.hero-img-real');
    const heroContent = document.querySelector('.hero-content');

    if (heroSection && heroImage && window.innerWidth > 992) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            if (scrolled < heroSection.offsetHeight) {
                // Image moves slower (0.2 speed)
                heroImage.style.transform = `translateY(${scrolled * 0.2}px)`;
                // Content moves slightly faster than normal scroll for depth (0.1 speed)
                heroContent.style.transform = `translateY(${scrolled * 0.1}px)`;
            }
        });
    }

    /* -------------------------------------------------------------
       Chat Widget Logic
       ------------------------------------------------------------- */
    const chatBtn = document.getElementById('dennin-chat-btn');
    const chatContainer = document.getElementById('dennin-chat-container');
    const chatIframe = document.getElementById('dennin-chat-iframe');
    let isChatLoaded = false;

    if (chatBtn && chatContainer) {

        // Toggle Function
        function toggleChat() {
            const isVisible = chatContainer.classList.contains('active');

            if (!isVisible) {
                // OPEN
                chatContainer.style.display = 'block';
                // Small timeout to allow display:block to apply before opacity transition
                setTimeout(() => {
                    chatContainer.classList.add('active');
                    chatContainer.style.opacity = '1';
                    chatContainer.style.transform = 'translateY(0)';
                }, 10);


                chatBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
                chatBtn.classList.remove('pulse'); // Stop pulsing once interaction happens

                // Lazy Load: Only load iframe source on first open
                if (!isChatLoaded && chatIframe) {
                    const src = chatIframe.getAttribute('data-src');
                    if (src) {
                        chatIframe.src = src;
                        isChatLoaded = true;
                    }
                }

            } else {
                // CLOSE
                chatContainer.style.opacity = '0';
                chatContainer.style.transform = 'translateY(20px)';
                chatContainer.classList.remove('active');

                // Wait for transition to finish before hiding
                setTimeout(() => {
                    if (!chatContainer.classList.contains('active')) {
                        chatContainer.style.display = 'none';
                    }
                }, 300);

                chatBtn.innerHTML = '💬';
            }
        }

        chatBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent document click from immediately closing it
            toggleChat();
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (chatContainer.classList.contains('active') &&
                !chatContainer.contains(e.target) &&
                e.target !== chatBtn) {

                // Manually trigger close
                chatContainer.style.opacity = '0';
                chatContainer.style.transform = 'translateY(20px)';
                chatContainer.classList.remove('active');
                setTimeout(() => {
                    if (!chatContainer.classList.contains('active')) {
                        chatContainer.style.display = 'none';
                    }
                }, 300);
                chatBtn.innerHTML = '💬';
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && chatContainer.classList.contains('active')) {
                chatContainer.style.opacity = '0';
                chatContainer.style.transform = 'translateY(20px)';
                chatContainer.classList.remove('active');
                setTimeout(() => {
                    if (!chatContainer.classList.contains('active')) {
                        chatContainer.style.display = 'none';
                    }
                }, 300);
                chatBtn.innerHTML = '💬';
            }
        });
    }

});
