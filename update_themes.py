import re

# Update style.css
with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

new_themes = '''
[data-theme="emerald"] {
  --theme-bg: #091a13;
  --theme-bg-alt: #10261d;
  --theme-card: #153326;
  --theme-card-alt: #1a4232;
  --theme-primary: #34d399;
  --theme-secondary: #059669;
  --theme-text: #ecfdf5;
  --theme-muted: #a7f3d0;
  --theme-blue: #10b981;
}
[data-theme="synthwave"] {
  --theme-bg: #1a0820;
  --theme-bg-alt: #2b1136;
  --theme-card: #3f1952;
  --theme-card-alt: #5e2a78;
  --theme-primary: #f0abfc;
  --theme-secondary: #d946ef;
  --theme-text: #fdf4ff;
  --theme-muted: #f5d0fe;
  --theme-blue: #22d3ee;
}
[data-theme="crimson"] {
  --theme-bg: #2a0808;
  --theme-bg-alt: #401010;
  --theme-card: #661a1a;
  --theme-card-alt: #8c2626;
  --theme-primary: #fbbf24;
  --theme-secondary: #f59e0b;
  --theme-text: #fffbeb;
  --theme-muted: #fef3c7;
  --theme-blue: #ef4444;
}
[data-theme="amethyst"] {
  --theme-bg: #0c081e;
  --theme-bg-alt: #150f2f;
  --theme-card: #201844;
  --theme-card-alt: #302462;
  --theme-primary: #c084fc;
  --theme-secondary: #9333ea;
  --theme-text: #faf5ff;
  --theme-muted: #e9d5ff;
  --theme-blue: #60a5fa;
}
'''

if '[data-theme="emerald"]' not in css:
    css = css.replace('}\n\n*', '}\n' + new_themes + '\n*', 1)

new_switcher_css = '''/* Theme Switcher */
.theme-switcher {
    position: fixed;
    bottom: 30px;
    left: 30px;
    z-index: 999999;
}

.theme-options {
    background: rgba(17, 17, 34, 0.9);
    backdrop-filter: blur(10px);
    border: 1px solid #22c55e;
    padding: 15px;
    border-radius: 16px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-bottom: 15px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px) scale(0.9);
    transform-origin: bottom left;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    width: max-content;
}

.theme-options.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0) scale(1);
}

.theme-pill {
    padding: 10px 18px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    font-size: 13px;
    font-weight: 600;
    color: white;
    background: linear-gradient(135deg, var(--tc1), var(--tc2));
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    transition: 0.3s;
    text-shadow: 0 1px 2px rgba(0,0,0,0.5);
    text-align: center;
}

.theme-pill:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px var(--tc2);
}

.theme-pill.active {
    box-shadow: 0 0 15px var(--tc2), inset 0 0 0 2px white;
}

.theme-toggle {
    width: 60px;
    height: 60px;
    background: var(--theme-primary, #a855f7);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    transition: 0.3s;
}

.theme-toggle:hover {
    transform: rotate(15deg) scale(1.1);
}
'''
css = re.sub(r'/\* Theme Switcher \*/.*', new_switcher_css, css, flags=re.DOTALL)
with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)

# Update script.js
with open('script.js', 'r', encoding='utf-8') as f:
    js = f.read()

new_switcher_js = '''/* =========================
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
                    "emerald": { p: "#34d399", l: "#10b981" },
                    "synthwave": { p: "#22d3ee", l: "#d946ef" },
                    "crimson": { p: "#fbbf24", l: "#ef4444" },
                    "amethyst": { p: "#60a5fa", l: "#9333ea" }
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
});
'''
js = re.sub(r'/\* =========================\s+THEME SWITCHER\s+========================= \*/.*', new_switcher_js, js, flags=re.DOTALL)
with open('script.js', 'w', encoding='utf-8') as f:
    f.write(js)

print("Updated style.css and script.js!")
