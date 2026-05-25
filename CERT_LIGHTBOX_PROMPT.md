# Feature Prompt — Certificate Lightbox Modal
### Portfolio: `tanmay.dev` · `index.html` + `data.js`

---

## Overview

Add a **certificate image popup/lightbox** to the Certifications section. When a user clicks any certification card, a modal overlay opens displaying the certificate via a Google Drive embedded iframe. The feature must integrate seamlessly with the existing codebase patterns (same animation curves, same overlay system, same event delegation approach used by the terminal modal).

---

## Certificate Data

These are the three certificates and their Google Drive links. Convert all URLs from `/view?usp=sharing` → `/preview` format for iframe embedding:

| Title | Drive File ID | Preview URL |
|---|---|---|
| Python and Flask Framework | `1-LmhwVM1jZdCjBVZGXzz7kdhned1iZHM` | `https://drive.google.com/file/d/1-LmhwVM1jZdCjBVZGXzz7kdhned1iZHM/preview` |
| Full Stack JAVA (Symbiosis × Capgemini) | `1gLJVvSuzJtEgy1yXxECp-39WEgIX9Z2u` | `https://drive.google.com/file/d/1gLJVvSuzJtEgy1yXxECp-39WEgIX9Z2u/preview` |
| JAVA Programming - Beginner to Master | `1c78eooc1HbGIAjaMlELi47NvVZ29I9Xy` | `https://drive.google.com/file/d/1c78eooc1HbGIAjaMlELi47NvVZ29I9Xy/preview` |

---

## Step 1 — Update `data.js`

Add a `certificateUrl` field to each object inside the `certifications` array:

```js
certifications: [
  {
    title: "Python and Flask Framework",
    issuer: "...",         // keep existing value
    year: "...",           // keep existing value
    certificateUrl: "https://drive.google.com/file/d/1-LmhwVM1jZdCjBVZGXzz7kdhned1iZHM/preview"
  },
  {
    title: "Full Stack JAVA",
    issuer: "Symbiosis Skills & Professional University × Capgemini",
    year: "...",           // keep existing value
    certificateUrl: "https://drive.google.com/file/d/1gLJVvSuzJtEgy1yXxECp-39WEgIX9Z2u/preview"
  },
  {
    title: "JAVA Programming - Beginner to Master",
    issuer: "...",         // keep existing value
    year: "...",           // keep existing value
    certificateUrl: "https://drive.google.com/file/d/1c78eooc1HbGIAjaMlELi47NvVZ29I9Xy/preview"
  }
]
```

> Only add `certificateUrl`. Do not modify any other existing fields.

---

## Step 2 — CSS Changes in `index.html`

Add the following CSS block inside the existing `<style>` tag. Place it after the existing `/* Education & Certifications */` section and before the `/* Footer */` section.

### 2a. Cert card hover hint

Add `position: relative` to `.cert-item-card` (it is currently missing; needed for the pseudo-element). Also add the hover label:

```css
.cert-item-card {
  /* ADD to existing rule — do not replace existing properties */
  position: relative;
  cursor: pointer;
}

.cert-item-card::after {
  content: 'View Certificate ↗';
  position: absolute;
  bottom: 1rem;
  right: 1.2rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.68rem;
  color: #3b82f6;
  letter-spacing: 0.5px;
  opacity: 0;
  transform: translateY(4px);
  transition: opacity 0.25s ease, transform 0.25s ease;
  pointer-events: none;
}

.cert-item-card:hover::after {
  opacity: 1;
  transform: translateY(0);
}
```

### 2b. Lightbox modal styles

```css
/* ==========================================================================
   CERTIFICATE LIGHTBOX MODAL
   ========================================================================== */

.cert-modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 3000;
  background: rgba(4, 6, 10, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.cert-modal-overlay.open {
  opacity: 1;
  pointer-events: auto;
}

.cert-modal {
  width: 100%;
  max-width: 860px;
  background: #090e16;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(59, 130, 246, 0.05);
  overflow: hidden;
  transform: scale(0.92);
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.cert-modal-overlay.open .cert-modal {
  transform: scale(1);
}

.cert-modal-header {
  background: #121b28;
  padding: 0.85rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.cert-modal-title {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.78rem;
  color: #94a3b8;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: calc(100% - 3rem);
}

.cert-modal-close {
  color: #64748b;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
  border-radius: 4px;
  transition: color 0.2s ease, background 0.2s ease;
  flex-shrink: 0;
  min-width: 44px;
  min-height: 44px;
}

.cert-modal-close:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.06);
}

.cert-modal-body {
  width: 100%;
  background: #0b1120;
  position: relative;
}

.cert-modal-body iframe {
  display: block;
  width: 100%;
  height: 580px;
  border: none;
}

/* Fallback message shown if iframe fails to load */
.cert-iframe-fallback {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  height: 580px;
  padding: 2rem;
  text-align: center;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85rem;
  color: #64748b;
}

.cert-iframe-fallback a {
  color: #3b82f6;
  text-decoration: underline;
  text-underline-offset: 4px;
  font-size: 0.9rem;
}

.cert-iframe-fallback a:hover {
  color: #ffffff;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .cert-modal-overlay {
    padding: 1rem;
  }

  .cert-modal-body iframe {
    height: 420px;
  }

  .cert-iframe-fallback {
    height: 420px;
  }
}
```

---

## Step 3 — HTML Changes in `index.html`

Add the lightbox modal markup to the `<body>`. Place it **directly after** the closing `</div>` of the existing terminal modal overlay (the one with `id="terminal-modal-overlay"`):

```html
<!-- Certificate Lightbox Modal -->
<div class="cert-modal-overlay" id="cert-modal-overlay">
  <div class="cert-modal" id="cert-modal">
    <div class="cert-modal-header">
      <span class="cert-modal-title" id="cert-modal-title">Certificate</span>
      <button class="cert-modal-close" id="cert-modal-close" aria-label="Close certificate viewer">
        <i data-lucide="x" style="width: 16px; height: 16px;"></i>
      </button>
    </div>
    <div class="cert-modal-body">
      <iframe
        id="cert-iframe"
        src=""
        title="Certificate Viewer"
        allowfullscreen
      ></iframe>
      <div class="cert-iframe-fallback" id="cert-iframe-fallback">
        <span>Unable to load certificate preview.</span>
        <a id="cert-fallback-link" href="#" target="_blank" rel="noopener noreferrer">
          Open in Google Drive ↗
        </a>
      </div>
    </div>
  </div>
</div>
```

---

## Step 4 — JS Changes in `index.html`

All changes go inside the existing `DOMContentLoaded` callback in the `<script>` tag.

### 4a. Update cert card generation

Find the existing `data.certifications.forEach(cert => { ... })` block. Inside it, on the `certItem` div, add two `data-*` attributes:

```js
// EXISTING line (already in code):
certItem.className = "cert-item-card";

// ADD these two lines immediately after:
certItem.dataset.certificateUrl = cert.certificateUrl || "";
certItem.dataset.certTitle = cert.title;
```

> Do not change any other part of the cert generation block.

### 4b. Add lightbox open/close logic

Add this entire block **after** the line `certObserver.observe(certGrid);` and **before** the active section navigation observer block:

```js
// ==========================================================================
// CERTIFICATE LIGHTBOX MODAL
// ==========================================================================
const certModalOverlay = document.getElementById("cert-modal-overlay");
const certModalClose = document.getElementById("cert-modal-close");
const certIframe = document.getElementById("cert-iframe");
const certModalTitle = document.getElementById("cert-modal-title");
const certIframeFallback = document.getElementById("cert-iframe-fallback");
const certFallbackLink = document.getElementById("cert-fallback-link");

const openCertModal = (url, title) => {
  // Reset state
  certIframe.style.display = "block";
  certIframeFallback.style.display = "none";

  // Set content
  certModalTitle.textContent = title;
  certFallbackLink.href = url.replace("/preview", "/view");

  // Load iframe lazily (set src only on open)
  certIframe.src = url;

  // Open overlay
  certModalOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
};

const closeCertModal = () => {
  certModalOverlay.classList.remove("open");
  document.body.style.overflow = "";

  // Clear src after transition ends to stop Drive from running in background
  setTimeout(() => {
    certIframe.src = "";
  }, 350);
};

// Delegate click on the certifications grid
document.getElementById("certifications-grid").addEventListener("click", (e) => {
  const card = e.target.closest(".cert-item-card");
  if (card && card.dataset.certificateUrl) {
    openCertModal(card.dataset.certificateUrl, card.dataset.certTitle);
  }
});

// Close triggers
certModalClose.addEventListener("click", closeCertModal);
certModalOverlay.addEventListener("click", (e) => {
  if (e.target === certModalOverlay) closeCertModal();
});
```

### 4c. Update the Escape key listener

Find the **existing** `window.addEventListener("keydown", ...)` block (currently only handles the terminal modal). Replace it entirely with this unified version that handles both modals:

```js
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (certModalOverlay.classList.contains("open")) {
      closeCertModal();
    }
    if (modalOverlay.classList.contains("open")) {
      closeProjectTerminal();
    }
  }
});
```

### 4d. Hook hover events on cert cards

The existing `hookHoverEvents()` function queries `".cert-item-card"` already — no change needed there. But call it once more **after** the cert cards are generated, to pick up the newly added cards:

```js
// ADD this line at the end of the certifications population block,
// right after lucide.createIcons():
hookHoverEvents();
```

> This line likely already exists at the bottom of the DOMContentLoaded block. If so, no change needed — the existing call covers it.

---

## Step 5 — Lucide Icons

The close button `<i data-lucide="x">` in the cert modal is **static HTML** (not dynamically injected), so the existing `lucide.createIcons()` call at the top of `DOMContentLoaded` will render it on page load. No additional call needed.

---

## Behaviour Summary

| Action | Result |
|---|---|
| Click cert card | Modal opens, iframe loads Drive preview |
| Click backdrop | Modal closes, iframe src cleared after 350ms |
| Click × button | Modal closes, iframe src cleared after 350ms |
| Press `Escape` | Closes whichever modal is currently open |
| Drive blocks embed | Fallback message shown with "Open in Google Drive ↗" link |
| Mobile (`< 768px`) | Modal is `95vw`, iframe height reduced to `420px` |
| Touch device | All interactions work; custom cursor rules don't interfere |

---

## z-index Reference

| Layer | z-index |
|---|---|
| Custom cursor dot | 9999 |
| Custom cursor ring | 9998 |
| Certificate modal | **3000** |
| Terminal modal | 2000 |
| Sticky header | 1000 |
| Mobile nav drawer | 1000 |

---

## Important Notes

1. **Do not** change the Google Drive sharing permissions. The `/preview` URL works as long as the file is set to "Anyone with the link can view" in Drive.
2. **Do not** use `/uc?export=view` or direct image URLs — those break for PDFs and get blocked by Drive's CORS policy.
3. The `certItem.dataset.certificateUrl` will be an empty string `""` if `cert.certificateUrl` is missing. The click handler checks `if (card && card.dataset.certificateUrl)` so cards without a URL silently do nothing.
4. `transform-style: preserve-3d` on `.cert-item-card` (used for the flip-in animation) is fully compatible with `position: relative` being added — they do not conflict.
5. The cert modal uses `z-index: 3000` — one level above the terminal modal (`2000`) — so if both were somehow open simultaneously, the cert modal would sit on top. The Escape handler closes whichever is open.
