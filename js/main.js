// Photo Blog Theme - Main JavaScript
// =====================================

(function() {
    'use strict';

    // Navigation scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    function handleScroll() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    }

    window.addEventListener('scroll', handleScroll);

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            if (menuToggle) {
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');

    function updateActiveNavLink() {
        const scrollY = window.pageYOffset;

        sections.forEach(function(section) {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector('.nav-link[href="#' + sectionId + '"]');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(function(l) {
                    l.classList.remove('active');
                });
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink);

    // Portfolio filter
    const portfolioFilters = document.querySelectorAll('#portfolio .filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    portfolioFilters.forEach(function(btn) {
        btn.addEventListener('click', function() {
            // Update active button
            portfolioFilters.forEach(function(b) {
                b.classList.remove('active');
            });
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            // Filter items
            portfolioItems.forEach(function(item) {
                const category = item.getAttribute('data-category');

                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeInUp 0.5s ease';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Articles filter
    const articleFilters = document.querySelectorAll('#articles .filter-btn');
    const articleCards = document.querySelectorAll('.article-card');

    articleFilters.forEach(function(btn) {
        btn.addEventListener('click', function() {
            // Update active button
            articleFilters.forEach(function(b) {
                b.classList.remove('active');
            });
            btn.classList.add('active');

            const filter = btn.getAttribute('data-type');

            // Filter articles
            articleCards.forEach(function(card) {
                const type = card.getAttribute('data-type');

                if (filter === 'all' || type === filter) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.5s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            if (href === '#' || href === '') {
                return;
            }

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const offsetTop = target.offsetTop - 60;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Here you would normally send the data to a server
            // For demo purposes, we'll just show an alert
            alert('感谢您的消息，' + name + '！我们会尽快回复您。');

            // Reset form
            contactForm.reset();
        });
    }

    // Lazy loading images with fallback
    if ('loading' in HTMLImageElement.prototype) {
        // Browser supports lazy loading
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(function(img) {
            img.addEventListener('error', function() {
                // Skip homepage article fallback images that already point to external photos
                if (this.classList.contains('article-image') && this.classList.contains('image-fallback')) {
                    return;
                }

                // Fallback placeholder with gradient and text
                const width = this.getAttribute('width') || 800;
                const height = this.getAttribute('height') || 600;
                const alt = this.getAttribute('alt') || '图片';
                this.src = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"%3E%3Cdefs%3E%3ClinearGradient id="grad" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23667eea;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%23764ba2;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill="url(%23grad)" width="${width}" height="${height}"/%3E%3Ctext fill="%23ffffff" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle" font-family="Arial, sans-serif" font-size="24"%3E${encodeURIComponent(alt)}%3C/text%3E%3C/svg%3E`;
                this.classList.add('image-fallback');
            });
        });
    }

    // Handle all images error
    document.querySelectorAll('img').forEach(function(img) {
        if (!img.complete || img.naturalWidth === 0) {
            img.dispatchEvent(new Event('error'));
        }
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.portfolio-item, .article-card');
    animatedElements.forEach(function(el) {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // Add fadeInUp animation if not exists
    if (!document.querySelector('#fadeInUp-style')) {
        const style = document.createElement('style');
        style.id = 'fadeInUp-style';
        style.textContent = `
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Image lightbox (optional)
    const portfolioImages = document.querySelectorAll('.portfolio-item img');
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = '<span class="lightbox-close">&times;</span><img src="" alt="">';

    // Add lightbox styles
    if (!document.querySelector('#lightbox-style')) {
        const lightboxStyle = document.createElement('style');
        lightboxStyle.id = 'lightbox-style';
        lightboxStyle.textContent = `
            .lightbox {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.9);
                display: none;
                justify-content: center;
                align-items: center;
                z-index: 9999;
                cursor: pointer;
            }

            .lightbox.active {
                display: flex;
                animation: fadeIn 0.3s ease;
            }

            .lightbox img {
                max-width: 90%;
                max-height: 90%;
                object-fit: contain;
            }

            .lightbox-close {
                position: absolute;
                top: 20px;
                right: 30px;
                font-size: 40px;
                color: white;
                cursor: pointer;
                z-index: 10000;
            }

            .lightbox-close:hover {
                opacity: 0.8;
            }

            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
        `;
        document.head.appendChild(lightboxStyle);
    }

    document.body.appendChild(lightbox);

    portfolioImages.forEach(function(img) {
        img.addEventListener('click', function(e) {
            e.preventDefault();
            const lightboxImg = lightbox.querySelector('img');
            lightboxImg.src = this.src;
            lightbox.classList.add('active');
        });
    });

    lightbox.addEventListener('click', function() {
        lightbox.classList.remove('active');
    });

    lightbox.querySelector('.lightbox-close').addEventListener('click', function(e) {
        e.stopPropagation();
        lightbox.classList.remove('active');
    });

    // Escape key to close lightbox
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
        }
    });

})();
