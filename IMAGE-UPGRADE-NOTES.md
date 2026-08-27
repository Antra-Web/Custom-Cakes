# Image Upgrade Notes

This is the SAME Custom-Cakes website — only static illustration/placeholder
imagery was replaced with realistic cake photography. No layout, text, prices,
navigation, JS functionality, or the homepage hero animation were changed.

## What changed
- `index.html` — the 3 featured-cake emoji icons → real photos (Strawberry
  Confetti, Midnight Choco Drip, Rainbow Surprise).
- `gallery.html` — all 9 gallery-card emoji icons → real photos, each matched
  to its product (wedding, birthday, baby shower, cupcakes). The lightbox now
  shows the matching photo instead of an emoji (`js/script.js` updated to set
  `img.src` from a new `data-image` attribute per card).
- `about.html` — the 3 "behind the scenes" emoji icons → real photos (fresh
  ingredients, hand-piped buttercream detail, a finished cake ready for
  delivery).
- `css/style.css` — only additions (`.card-photo`, `.gallery-thumb img`,
  `.about-photo`, `.lightbox-photo`), all using `object-fit: cover` so images
  crop intelligently and never stretch/distort at any screen size. No existing
  rule was edited or removed.
- **Untouched, verified byte-for-byte:** the homepage hero/start animation
  (`.hero-art`, `.hero-cake`, `.sprinkle` markup and CSS), all nav/UI icons,
  the `.frosting-divider` SVG, team avatars, `contact.html`, and `order.html`.

## Important caveat — image hosting
Per your instructions, images should ideally live in the project's own
`images/` folder. My working environment only has network access to a short
allow-list of developer domains (GitHub, npm, PyPI, etc.) and can't download
binary files from photo CDNs. So the `<img>` tags currently point to Unsplash's
CDN (e.g. `https://images.unsplash.com/photo-xxxx?...`) rather than to local
files.

These are **permanent photo-ID URLs** (not disposable/temporary links) and are
commonly hotlinked this way, so they'll keep working on GitHub Pages. But if
you'd prefer everything fully self-hosted:

1. Right-click → "Save image as…" each URL listed in `index.html`,
   `gallery.html`, and `about.html` (14 unique photos total, all free under
   the Unsplash License — no attribution legally required, though appreciated).
2. Save them into a new `images/` folder in the project root.
3. Replace each `https://images.unsplash.com/photo-...` src with the local
   relative path, e.g. `images/rainbow-surprise.jpg`.

I'm happy to do this swap for you if you upload the saved image files back to
me, or if you can point me to a project setup where I have broader network
access.
