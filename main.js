// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Portfolio filtering logic
const filterItems = document.querySelectorAll('.filter-item');
const portfolioItems = document.querySelectorAll('.portfolio-item');

if (filterItems.length > 0) {
    filterItems.forEach(item => {
        item.addEventListener('click', function () {
            // Remove active class from all filters
            filterItems.forEach(i => i.classList.remove('active'));
            // Add active class to clicked filter
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            portfolioItems.forEach(portfolioItem => {
                if (filterValue === 'all' || portfolioItem.getAttribute('data-category') === filterValue) {
                    portfolioItem.style.display = 'block';
                    setTimeout(() => {
                        portfolioItem.style.opacity = '1';
                        portfolioItem.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    portfolioItem.style.opacity = '0';
                    portfolioItem.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        portfolioItem.style.display = 'none';
                    }, 400);
                }
            });
        });
    });
}

// Event Modal Logic
const modal = document.getElementById('eventModal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close-modal');
const eventCards = document.querySelectorAll('.event-card, .webinar-card');

const eventDetails = {
    show: {
        title: "Annual Fashion Show 2026",
        content: `
            <h2 style="margin-bottom: 1.5rem;">Grand Annual Fashion Show</h2>
            <img src="hero.png" style="width: 100%; border-radius: 15px; margin-bottom: 1.5rem;">
            <p>Our annual fashion show at NIFT Hyderabad is the highlights of the year. Featuring over 50 exclusive bridal and couture designs by Smt. Lakshmi Prassanna, the show attracts industry leaders and fashion enthusiasts from across India.</p>
            <div style="margin-top: 1.5rem; display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
                <div>
                    <h4>Location</h4>
                    <p>Grand Ballroom, Taj Krishna</p>
                </div>
                <div>
                    <h4>Dates</h4>
                    <p>December 15-18, 2026</p>
                </div>
            </div>
        `
    },
    exhibition: {
        title: "Craft & Couture Exhibition",
        content: `
            <h2 style="margin-bottom: 1.5rem;">Luxury Couture Exhibition</h2>
            <img src="bridal.png" style="width: 100%; border-radius: 15px; margin-bottom: 1.5rem;">
            <p>Join us for a 3-day exhibition showcasing the intricate craftsmanship of Indian bridal wear. We will be displaying limited edition collections and offering interactive design sessions.</p>
            <ul style="margin-top: 1rem; padding-left: 1.5rem;">
                <li>Exclusive preview of Spring 2026 Bridal line</li>
                <li>Custom consultation with Lakshmi Ma'am</li>
                <li>Live embroidery demonstrations</li>
            </ul>
        `
    },
    press: {
        title: "Press & Recognition",
        content: `
            <h2 style="margin-bottom: 1.5rem;">In the Spotlight</h2>
            <p>Prassannaa Fashion Institute has been featured in leading national and regional publications for our contribution to fashion education and women's empowerment.</p>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1.5rem;">
                <div style="background: #f0f0f0; padding: 1rem; border-radius: 10px;">Vogue India</div>
                <div style="background: #f0f0f0; padding: 1rem; border-radius: 10px;">The Hindu</div>
                <div style="background: #f0f0f0; padding: 1rem; border-radius: 10px;">Times Fashion</div>
            </div>
        `
    },
    webinar: {
        title: "Project Proposal: Phase 1",
        content: `
            <div style="padding: 1rem;">
                <span style="color: var(--secondary-color); font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Development Roadmap</span>
                <h2 style="margin: 1rem 0; font-size: 2rem;">Option 1: MVP / Phase-1</h2>
                <p style="color: var(--text-muted); margin-bottom: 2rem;">(Most Common & Practical approach for initial launch)</p>
                
                <div style="background: #f9f9f9; padding: 2rem; border-radius: 20px; margin-bottom: 2rem; border-left: 5px solid var(--primary-color);">
                    <h4 style="margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;">
                        <span style="font-size: 1.2rem;">🚀</span> Scope Included:
                    </h4>
                    <ul style="padding-left: 1rem; list-style: none;">
                        <li style="margin-bottom: 1rem; display: flex; align-items: center; gap: 10px;">
                            <span style="color: #4CAF50;">✔</span> Homepage (sales-focused)
                        </li>
                        <li style="margin-bottom: 1rem; display: flex; align-items: center; gap: 10px;">
                            <span style="color: #4CAF50;">✔</span> Registration page (no login)
                        </li>
                        <li style="margin-bottom: 1rem; display: flex; align-items: center; gap: 10px;">
                            <span style="color: #4CAF50;">✔</span> Razorpay integration
                        </li>
                        <li style="margin-bottom: 1rem; display: flex; align-items: center; gap: 10px;">
                            <span style="color: #4CAF50;">✔</span> Webinar access page
                        </li>
                        <li style="margin-bottom: 1rem; display: flex; align-items: center; gap: 10px;">
                            <span style="color: #4CAF50;">✔</span> Portfolio / trust page
                        </li>
                        <li style="margin-bottom: 1rem; display: flex; align-items: center; gap: 10px;">
                            <span style="color: #4CAF50;">✔</span> Basic admin panel
                        </li>
                        <li style="margin-bottom: 1rem; display: flex; align-items: center; gap: 10px;">
                            <span style="color: #4CAF50;">✔</span> Email + WhatsApp confirmations
                        </li>
                    </ul>
                </div>

                <div style="display: flex; align-items: center; justify-content: space-between; background: #111; color: white; padding: 1.5rem 2rem; border-radius: 15px;">
                    <div>
                        <span style="display: block; opacity: 0.7; font-size: 0.9rem; text-transform: uppercase;">Estimated Timeline</span>
                        <span style="font-size: 1.4rem; font-weight: 700;">⏱️ 3–5 Weeks</span>
                    </div>
                    <a href="https://wa.me/919876543210?text=I'd%20like%20to%20discuss%20the%20MVP%20Phase-1%20proposal" class="btn btn-primary" style="padding: 0.8rem 1.5rem; font-size: 0.8rem;">Let's Get Started</a>
                </div>
            </div>
        `
    },
    foundation: {
        title: "Fashion Design Foundation",
        content: `
            <div style="padding: 1rem;">
                <span style="color: var(--secondary-color); font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">3 Months Program</span>
                <h2 style="margin: 1rem 0;">Fashion Design Foundation</h2>
                <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80" style="width: 100%; border-radius: 15px; margin-bottom: 1.5rem; height: 250px; object-fit: cover;">
                <p>This course is designed for beginners who want to build a strong foundation in fashion design. We cover everything from sketching to basic garment construction.</p>
                <div style="background: #f9f9f9; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
                    <h4 style="margin-bottom: 1rem;">Curriculum Includes:</h4>
                    <ul style="padding-left: 1.2rem; display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
                        <li>Fashion Illustration</li>
                        <li>Textile Science</li>
                        <li>Pattern Making</li>
                        <li>Garment Construction</li>
                        <li>Color Theory</li>
                        <li>History of Fashion</li>
                    </ul>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 2rem; background: var(--primary-color); color: white; padding: 1.5rem; border-radius: 12px;">
                    <div>
                        <span style="display: block; opacity: 0.8; font-size: 0.9rem;">Course Fee</span>
                        <span style="font-size: 1.5rem; font-weight: 800;">₹14,999</span>
                    </div>
                    <a href="https://wa.me/919876543210?text=I'm%20interested%20in%20the%20Foundation%20Course" class="btn btn-secondary" style="background: white; color: var(--primary-color); border: none;">Inquire on WhatsApp</a>
                </div>
            </div>
        `
    },
    advanced: {
        title: "Advanced Couture & Bridal",
        content: `
            <div style="padding: 1rem;">
                <span style="color: var(--secondary-color); font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">6 Months Professional</span>
                <h2 style="margin: 1rem 0;">Advanced Couture & Bridal</h2>
                <img src="bridal.png" style="width: 100%; border-radius: 15px; margin-bottom: 1.5rem; height: 250px; object-fit: cover;">
                <p>An intensive program focusing on the intricate world of luxury bridal wear and high-fashion couture techniques. Learn to create masterpieces from scratch.</p>
                <div style="background: #f9f9f9; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
                    <h4 style="margin-bottom: 1rem;">Advanced Modules:</h4>
                    <ul style="padding-left: 1.2rem; display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
                        <li>Bridal Draping</li>
                        <li>Advanced Embroidery</li>
                        <li>Sustainable Couture</li>
                        <li>Runway Design</li>
                        <li>Boutique Management</li>
                        <li>Portfolio Showcase</li>
                    </ul>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 2rem; background: var(--secondary-color); color: white; padding: 1.5rem; border-radius: 12px;">
                    <div>
                        <span style="display: block; opacity: 0.8; font-size: 0.9rem;">Course Fee</span>
                        <span style="font-size: 1.5rem; font-weight: 800;">₹29,999</span>
                    </div>
                    <a href="https://wa.me/919876543210?text=I'm%20interested%20in%20the%20Advanced%20Couture%20Course" class="btn btn-primary" style="background: white; color: var(--secondary-color); border: none;">Inquire on WhatsApp</a>
                </div>
            </div>
        `
    },
    specialization: {
        title: "Bridal Specialization",
        content: `
            <div style="padding: 1rem;">
                <span style="color: var(--secondary-color); font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">1 Month Intensive</span>
                <h2 style="margin: 1rem 0;">Bridal Specialization</h2>
                <img src="hero.png" style="width: 100%; border-radius: 15px; margin-bottom: 1.5rem; height: 250px; object-fit: cover;">
                <p>A fast-paced workshop for designers looking to master the specific skills required for the Indian bridal market. Focuses on premium silhouettes and surface ornamentation.</p>
                <div style="background: #f9f9f9; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
                    <h4 style="margin-bottom: 1rem;">Workshop Highlights:</h4>
                    <ul style="padding-left: 1.2rem;">
                        <li>Traditional Zardosi Techniques</li>
                        <li>Modern Bridal Silhouette Design</li>
                        <li>Fabric Selection and Sourcing</li>
                        <li>Pricing & Marketing for Bridal Brands</li>
                    </ul>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 2rem; background: #333; color: white; padding: 1.5rem; border-radius: 12px;">
                    <div>
                        <span style="display: block; opacity: 0.8; font-size: 0.9rem;">Course Fee</span>
                        <span style="font-size: 1.5rem; font-weight: 800;">₹7,499</span>
                    </div>
                    <a href="https://wa.me/919876543210?text=I'm%20interested%20in%20the%20Bridal%20Specialization" class="btn btn-primary" style="background: white; color: #333; border: none;">Inquire on WhatsApp</a>
                </div>
            </div>
        `
    }
};

if (modal && modalBody) {
    const triggerModal = (type) => {
        const detail = eventDetails[type];
        if (detail) {
            modalBody.innerHTML = detail.content;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Stop scrolling
        }
    };

    eventCards.forEach(card => {
        card.addEventListener('click', (e) => {
            const type = card.getAttribute('data-event');
            triggerModal(type);
        });

        // Ensure buttons inside cards also work explicitly
        const btn = card.querySelector('.btn');
        if (btn) {
            btn.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent double triggering
                const type = card.getAttribute('data-event');
                triggerModal(type);
            });
        }
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}
// Mobile Menu Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}
