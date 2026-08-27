# Whisk & Wonder — Custom Cakes Website

A 5-page, animated, mobile-responsive website for a custom cake business. Pure HTML/CSS/JS — no build step, no dependencies to install.

## Pages
- `index.html` — Home
- `about.html` — About Us
- `gallery.html` — Cake Gallery (filterable + lightbox)
- `order.html` — Custom Order form
- `contact.html` — Contact & FAQ

## Run it locally
Just double-click `index.html`, or serve it with any static server, e.g.:
```
npx serve .
```

## Publish free on GitHub Pages
1. Create a new repository on GitHub (e.g. `whisk-and-wonder`).
2. Upload all files in this folder to the repo, keeping the same structure (`css/`, `js/`, and the `.html` files at the root).
   - Easiest way: on the repo page, click **Add file → Upload files**, drag in everything, then commit.
3. Go to the repo's **Settings → Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`. Save.
5. Wait 1–2 minutes — GitHub will give you a live URL like:
   `https://your-username.github.io/whisk-and-wonder/`

That's it — no build tools, frameworks, or servers required.

## Customizing
- **Text & prices:** edit directly inside each `.html` file.
- **Colors:** all defined as CSS variables at the top of `css/style.css` (`:root { ... }`) — change once, updates everywhere.
- **Images:** currently uses emoji as lightweight placeholder art so the site works instantly with zero setup. Swap any `🎂`/`🍰` etc. for real `<img>` tags once you have product photography.
- **Forms:** the order and contact forms currently show a success message in-browser only (no backend). To actually receive submissions, connect them to a form service like Formspree, Netlify Forms, or your own backend — just add the appropriate `action`/`endpoint` per that service's docs.
