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
                "onhover": {"enable": true, "mode": "grab"},
                "onclick": {"enable": true, "mode": "push"},
                "resize": true
            },
            "modes": {
                "grab": {"distance": 140, "line_linked": {"opacity": 1}},
                "bubble": {"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3},
                "repulse": {"distance": 200, "duration": 0.4},
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
"Data Analyst"
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
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if(preloader) {
        setTimeout(() => {
            preloader.classList.add('hidden');
            // Remove from DOM to prevent blocking interaction
            setTimeout(() => preloader.remove(), 600);
        }, 600);
    }
});

/* =========================
   SCROLL REVEAL & STAGGER
========================= */

const reveals = document.querySelectorAll(".reveal, .donut-section, .hero");

if(reveals.length > 0){
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add("active");
                
                const children = entry.target.querySelectorAll('.stagger-child:not(.show)');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('show');
                    }, index * 120);
                });
            }
        });
    },{
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(section=>{
        const staggerTargets = section.querySelectorAll('.skill-pill, .project-card, .timeline-item, .skills-card, .achievement-card, .cert-card, .contact-box, .ds-card, .donut-card');
        staggerTargets.forEach(child => child.classList.add('stagger-child'));
        observer.observe(section);
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

});
