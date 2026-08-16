/**
 * TheCyberDev — Standalone Vanilla JavaScript Controller
 * Handles smooth scrolling, mobile nav toggle, contact form simulation, and interactive tabs.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-nav');

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
  }

  // 2. Smooth Scroll Anchor Links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        if (mobileMenu) mobileMenu.classList.remove('active');
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 3. Contact Form Submission Handling
  const contactForm = document.getElementById('thecyberdev-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending Encrypted Message...';

      setTimeout(() => {
        contactForm.innerHTML = `
          <div style="padding: 2.5rem 1rem; text-align: center; color: #10b981;">
            <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem; color: #fff;">Inquiry Received!</h3>
            <p style="color: #94a3b8; font-size: 0.95rem;">Thank you for contacting TheCyberDev. Our security and engineering team will get back to you within 12 hours.</p>
          </div>
        `;
      }, 1200);
    });
  }
});
