import re

with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Add variables at the top
root_vars = '''
:root {
  --theme-bg: #060B1A;
  --theme-bg-alt: #0a0a12;
  --theme-card: #111122;
  --theme-card-alt: #1f1f35;
  --theme-primary: #A855F7;
  --theme-secondary: #22C55E;
  --theme-text: #E5E7EB;
  --theme-muted: #9ca3af;
  --theme-blue: #3B82F6;
}

[data-theme=\"sunset\"] {
  --theme-bg: #1A0B0C;
  --theme-bg-alt: #2A1112;
  --theme-card: #1C0A0B;
  --theme-card-alt: #2D1416;
  --theme-primary: #F97316;
  --theme-secondary: #EF4444;
  --theme-text: #F3F4F6;
  --theme-muted: #9ca3af;
  --theme-blue: #EA580C;
}

[data-theme=\"ocean\"] {
  --theme-bg: #04151F;
  --theme-bg-alt: #062335;
  --theme-card: #082F49;
  --theme-card-alt: #0C4A6E;
  --theme-primary: #06B6D4;
  --theme-secondary: #14B8A6;
  --theme-text: #ECFEFF;
  --theme-muted: #67E8F9;
  --theme-blue: #0CA5A5;
}

[data-theme=\"midnight\"] {
  --theme-bg: #0B0F19;
  --theme-bg-alt: #111827;
  --theme-card: #1F2937;
  --theme-card-alt: #374151;
  --theme-primary: #EAB308;
  --theme-secondary: #FDE047;
  --theme-text: #FEF08A;
  --theme-muted: #D1D5DB;
  --theme-blue: #B45309;
}
'''

replacements = {
    r'#05050f': 'var(--theme-bg)',
    r'#0f0f1a': 'var(--theme-bg)',
    r'#060610': 'var(--theme-bg)',
    r'#0a0a12': 'var(--theme-bg-alt)',
    r'#111122': 'var(--theme-card)',
    r'#1f1f35': 'var(--theme-card-alt)',
    r'#a855f7': 'var(--theme-primary)',
    r'#22c55e': 'var(--theme-secondary)',
    r'#3b82f6': 'var(--theme-blue)',
    r'white': 'var(--theme-text)',
    r'#9ca3af': 'var(--theme-muted)',
    r'#d1d5db': 'var(--theme-muted)'
}

for old, new in replacements.items():
    # Only replace exact color matches not part of other strings
    # We use regex to handle case insensitivity
    css = re.sub(f'(?i)(?<![a-zA-Z0-9_-]){old}(?![a-zA-Z0-9_-])', new, css)

# add ROOT at top
css = root_vars + '\n' + css

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)

print('Updated style.css with CSS variables.')
