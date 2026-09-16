document.addEventListener("DOMContentLoaded", () => {
/* =========================
   PARTICLES JS INIT
========================= */
if(typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
        "particles": {
            "number": {"value": 80, "density": {"enable": true, "value_area": 800}},
            "color": {"value": "#a855f7"},
            "shape": {"type": "circle", "stroke": {"width": 0, "color": "#000000"}, "polygon": {"nb_sides": 5}},
            "opacity": {"value": 0.5, "random": false, "anim": {"enable": false, "speed": 1, "opacity_min": 0.1, "sync": false}},
            "size": {"value": 3, "random": true, "anim": {"enable": false, "speed": 40, "size_min": 0.1, "sync": false}},
            "line_linked": {"enable": true, "distance": 150, "color": "#22c55e", "opacity": 0.4, "width": 1},
            "move": {"enable": true, "speed": 3, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": {"enable": false, "rotateX": 600, "rotateY": 1200}}
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {"enable": true, "mode": "repulse"},
                "onclick": {"enable": true, "mode": "push"},
                "resize": true
            },
            "modes": {
                "grab": {"distance": 140, "line_linked": {"opacity": 1}},
                "bubble": {"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3},
                "repulse": {"distance": 150, "duration": 0.4},
                "push": {"particles_nb": 4},
                "remove": {"particles_nb": 2}
            }
        },
        "retina_detect": true
    });
}

/* =========================
   TYPING EFFECT
========================= */

const typingElement = document.getElementById("typing");

if (typingElement) {

const text = [
"Data Science Enthusiast",
"Machine Learning Learner",
"Data Scientist",
"Data Analyst",
"Software Developer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

if(count === text.length){
count = 0;
}

currentText = text[count];
letter = currentText.slice(0, ++index);

typingElement.textContent = letter;

if(letter.length === currentText.length){

count++;
index = 0;

setTimeout(type, 1200);

}else{

setTimeout(type, 80);

}

})();

}



/* =========================
   PRELOADER
========================= */
const hidePreloader = () => {
    const preloader = document.querySelector('.preloader');
    if(preloader) {
        setTimeout(() => {
            preloader.classList.add('hidden');
            // Remove from DOM to prevent blocking interaction
            setTimeout(() => preloader.remove(), 600);
        }, 600);
    }
};

if (document.readyState === 'complete') {
    hidePreloader();
} else {
    window.addEventListener('load', hidePreloader);
}


/* =========================
   AOS ANIMATIONS (SCROLL REVEAL)
========================= */

const addAOS = (selector, animation, delayStep = 100) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el, index) => {
        el.setAttribute('data-aos', animation);
        el.setAttribute('data-aos-delay', (index * delayStep).toString());
        el.setAttribute('data-aos-duration', '800');
    });
};

addAOS('.project-card', 'fade-up', 150);
addAOS('.skill-pill', 'zoom-in', 50);
addAOS('.skills-card', 'flip-left', 150);
addAOS('.achievement-card', 'fade-right', 150);
addAOS('.cert-image-card', 'zoom-in-up', 150);
addAOS('.timeline-item', 'fade-left', 200);
addAOS('.donut-card', 'zoom-in', 150);
addAOS('.ds-card', 'fade-up', 150);
addAOS('.section-title', 'fade-down', 0);
addAOS('.section-subtitle', 'fade-up', 0);

if (typeof AOS !== 'undefined') {
    AOS.init({
        once: false,
        mirror: true,
        offset: 50
    });
}



/* =========================
   NAVBAR ACTIVE LINK
========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

if(sections.length > 0){

window.addEventListener("scroll", ()=>{

let current = "";

sections.forEach(section=>{

const sectionTop = section.offsetTop;
const sectionHeight = section.clientHeight;

if(window.scrollY >= sectionTop - 200){
current = section.getAttribute("id");
}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){
link.classList.add("active");
}

});

});

}



/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

if(target){
target.scrollIntoView({
behavior:"smooth"
});
}

});

});

/* =========================
   THEME SWITCHER
========================= */

const themeToggle = document.querySelector(".theme-toggle");
const themeOptions = document.querySelector(".theme-options");
const themePills = document.querySelectorAll(".theme-pill");

if(themeToggle && themeOptions) {
    themeToggle.addEventListener("click", () => {
        themeOptions.classList.toggle("show");
    });

    themePills.forEach(btn => {
        btn.addEventListener("click", () => {
            // Remove active class from all
            themePills.forEach(b => b.classList.remove("active"));
            // Add active class to clicked
            btn.classList.add("active");
            
            // Get theme name
            const theme = btn.getAttribute("data-theme");
            
            // Set data-theme on body
            if(theme === "default") {
                document.body.removeAttribute("data-theme");
            } else {
                document.body.setAttribute("data-theme", theme);
            }
            
            // Update particles color based on theme
            if(typeof window.pJSDom !== "undefined" && window.pJSDom.length > 0) {
                const map = {
                    "default": { p: "#a855f7", l: "#22c55e" },
                    "sunset": { p: "#FDE047", l: "#F97316" },
                    "ocean": { p: "#67E8F9", l: "#06B6D4" },
                    "midnight": { p: "#8B5CF6", l: "#3B82F6" },
                    "forest": { p: "#4ADE80", l: "#16A34A" },
                    "cyberpunk": { p: "#F472B6", l: "#DB2777" },
                    "rose": { p: "#FDA4AF", l: "#E11D48" },
                    "lavender": { p: "#A78BFA", l: "#7C3AED" }
                };
                
                const pColor = map[theme].p;
                const lColor = map[theme].l;
                
                window.pJSDom[0].pJS.particles.color.value = pColor;
                window.pJSDom[0].pJS.particles.line_linked.color = lColor;
                window.pJSDom[0].pJS.fn.particlesRefresh();
            }
        });
    });
}

/* =========================
   SHORTCUT POPUP LOGIC
========================= */
const shortcutPopup = document.getElementById("themeShortcutPopup");
const closePopupBtn = document.getElementById("closeShortcutPopup");

if (closePopupBtn && shortcutPopup) {
    closePopupBtn.addEventListener("click", () => {
        shortcutPopup.classList.add("hide");
    });
}

// Handle Ctrl+K
document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        if(themeToggle) {
            themeToggle.click();
        }
    }
});

/* =========================
   DONUT CHART ANIMATION
========================= */
const donuts = document.querySelectorAll('.donut');
if(donuts.length > 0) {
    donuts.forEach(donut => {
        const val = donut.style.getPropertyValue('--value');
        if(val) {
            donut.setAttribute('data-target', val);
            donut.style.setProperty('--value', '0');
            const span = donut.querySelector('span');
            if(span) span.textContent = '0%';
        }
    });

    const donutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const donut = entry.target;
                if(donut.classList.contains('animated')) return;
                donut.classList.add('animated');
                
                const targetStr = donut.getAttribute('data-target');
                if(!targetStr) return;
                const targetValue = parseInt(targetStr);
                const duration = 1500; // ms
                const startTime = performance.now();
                
                function animateDonut(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    
                    const easeOut = 1 - Math.pow(1 - progress, 3); // cubic ease out
                    const currentValue = Math.floor(easeOut * targetValue);
                    
                    donut.style.setProperty('--value', currentValue);
                    const span = donut.querySelector('span');
                    if(span) span.textContent = currentValue + '%';
                    
                    if(progress < 1) {
                        requestAnimationFrame(animateDonut);
                    } else {
                        donut.style.setProperty('--value', targetValue);
                        if(span) span.textContent = targetValue + '%';
                    }
                }
                
                requestAnimationFrame(animateDonut);
            }
        });
    }, {
        threshold: 0.5
    });

    donuts.forEach(donut => {
        donutObserver.observe(donut);
    });
}

/* =========================
   NUMBER COUNTER ANIMATION
========================= */
const counters = document.querySelectorAll('.ds-number');
if (counters.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetElement = entry.target;
                if (targetElement.classList.contains('counted')) return;
                targetElement.classList.add('counted');
                
                const targetStr = targetElement.innerText.trim();
                const match = targetStr.match(/(\d+)(.*)/);
                if (match) {
                    const targetNum = parseInt(match[1]);
                    const suffix = match[2];
                    const duration = 2000;
                    const startTime = performance.now();
                    
                    targetElement.innerText = '0' + suffix;
                    
                    function updateCounter(currentTime) {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        
                        const easeOut = 1 - Math.pow(1 - progress, 3);
                        const currentNum = Math.floor(easeOut * targetNum);
                        
                        targetElement.innerText = currentNum + suffix;
                        
                        if (progress < 1) {
                            requestAnimationFrame(updateCounter);
                        } else {
                            targetElement.innerText = targetNum + suffix;
                        }
                    }
                    requestAnimationFrame(updateCounter);
                }
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => counterObserver.observe(counter));
}

/* =========================
   CONTACT FORM SUBMISSION WITH CONFETTI & WEB3FORMS
========================= */
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault(); // Prevent page reload
        
        const submitBtn = this.querySelector('.submit-btn');
        const originalHTML = submitBtn ? submitBtn.innerHTML : '';
        if (submitBtn) {
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
        }

        // Prepare data for Web3Forms
        const formData = new FormData(this);
        formData.append("access_key", "f7b67418-cff2-44b4-8b27-74798ab8391c"); // <-- Setup your Key here
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            });

            const result = await response.json();

            if (response.status === 200) {
                // Show confetti animation
                var duration = 3 * 1000;
                var end = Date.now() + duration;

                (function frame() {
                    confetti({
                        particleCount: 5,
                        angle: 60,
                        spread: 55,
                        origin: { x: 0 },
                        colors: ['#a855f7', '#22C55E', '#3B82F6']
                    });
                    confetti({
                        particleCount: 5,
                        angle: 120,
                        spread: 55,
                        origin: { x: 1 },
                        colors: ['#a855f7', '#22C55E', '#3B82F6']
                    });

                    if (Date.now() < end) {
                        requestAnimationFrame(frame);
                    }
                }());
                
                // Clear the form
                contactForm.reset();
                
                // Change button text temporarily to show success
                if (submitBtn) {
                    submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> Sent Successfully!';
                    submitBtn.style.background = 'var(--theme-secondary)';
                    
                    setTimeout(() => {
                        submitBtn.innerHTML = originalHTML;
                        submitBtn.style.background = '';
                        submitBtn.disabled = false;
                    }, 3000);
                }
            } else {
                console.log(result);
                if (submitBtn) {
                    submitBtn.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Error Sending';
                    submitBtn.style.background = '#ef4444'; // red theme
                    
                    setTimeout(() => {
                        submitBtn.innerHTML = originalHTML;
                        submitBtn.style.background = '';
                        submitBtn.disabled = false;
                    }, 3000);
                }
            }
        } catch (error) {
            console.log(error);
            if (submitBtn) {
                submitBtn.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Error Sending';
                submitBtn.style.background = '#ef4444'; // red theme
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalHTML;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 3000);
            }
        }
    });
}

/* =========================
   VANILLA TILT 3D EFFECT
========================= */
if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll(".project-card, .skills-card, .cert-image-card, .achievement-card"), {
        max: 8,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
        scale: 1.02
    });
}

/* =========================
   SCROLL PROGRESS BAR
========================= */
const scrollProgress = document.getElementById('scroll-progress');

window.addEventListener('scroll', () => {
    if (scrollProgress) {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    }
});

/* =========================
   MAGNETIC BUTTONS
========================= */
const magneticButtons = document.querySelectorAll('.btn-primary, .github-btn, .demo-btn, .btn-outline, .btn-download');

magneticButtons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;
        
        btn.style.transform = `translate(${deltaX * 10}px, ${deltaY * 10}px) scale(1.05)`;
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
    });
});

});
