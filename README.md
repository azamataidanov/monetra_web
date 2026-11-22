# Monetra site

Public marketing site for **Monetra** (Google Play).

- Landing: `index.html`
- Privacy (for Play Console): `privacy.html`

## Preview locally

```bash
cd monetra-site
python3 -m http.server 5173
```

Open http://localhost:5173

## Publish on GitHub Pages

1. Create a **public** GitHub repo (e.g. `monetra-site`).
2. Push this folder to `main`.
3. GitHub → **Settings → Pages**:
   - Source: **Deploy from a branch**
   - Branch: `main` / root `/`
4. Site URL will be:
   - `https://<your-user>.github.io/monetra-site/`
   - Privacy: `https://<your-user>.github.io/monetra-site/privacy.html`

Paste the privacy URL into Play Console → App content → Privacy policy.

## Play link

https://play.google.com/store/apps/details?id=com.monetra.monetra
