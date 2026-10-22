# Sanjana — MERN Portfolio

A modern, animated personal portfolio built with the **MERN stack** (MongoDB, Express.js, React, Node.js).
The contact form saves every message (name, email, phone, message) into MongoDB.

## Folder structure

```
portfolio/
├── client/                  # React (Vite) + Tailwind CSS + Framer Motion
│   └── src/
│       ├── components/      # Reusable UI: Button, Navbar, ContactForm, WhatsAppButton, ...
│       ├── sections/        # Page sections: Hero, About, Skills, Projects, Contact
│       ├── config/          # siteConfig.js  <-- edit your links / WhatsApp number here
│       ├── data/            # projects.js, skills.js
│       ├── hooks/           # useActiveSection.js
│       └── services/        # api.js (talks to backend)
└── server/                  # Express + Mongoose API
    ├── config/db.js
    ├── models/Contact.js
    ├── controllers/contactController.js
    ├── routes/contactRoutes.js
    ├── middleware/errorHandler.js
    └── server.js
```

## 1. Edit your details

Open `client/src/config/siteConfig.js`:

- `whatsappNumber` — your number with country code, digits only (e.g. `919876543210`).
- `social.instagram / facebook / linkedin` — currently the generic site URLs; replace them with your **profile** URLs.

Open `client/src/data/projects.js` and put the exact GitHub repo and live links for each project.

## 2. Run locally

You need Node.js 18+ and MongoDB (local, or a free MongoDB Atlas cluster).

**Backend**
```bash
cd server
npm install
cp .env.example .env      # then set MONGO_URI
npm run dev               # http://localhost:5000
```

**Frontend** (new terminal)
```bash
cd client
npm install
cp .env.example .env      # VITE_API_URL=http://localhost:5000
npm run dev               # http://localhost:5173
```

Submit the contact form, then check the `contacts` collection in MongoDB (Compass or Atlas) to see the saved data.

## 3. Deploy

Cloudflare Pages hosts only the **frontend**. The Express backend needs a Node host (for example Render, Railway or a VPS) and a MongoDB Atlas database.

**Backend (e.g. Render)**
1. Push the project to GitHub.
2. Create a Web Service from the `server` folder. Build command: `npm install`. Start command: `npm start`.
3. Add environment variables: `MONGO_URI` (Atlas connection string) and `CLIENT_URL` (your Cloudflare site URL, e.g. `https://your-site.pages.dev`; separate several with commas).
4. In Atlas, allow network access from your host (Network Access → add IP).

**Frontend (Cloudflare Pages)**
1. Cloudflare dashboard → Workers & Pages → Create → Pages → connect your GitHub repo.
2. Root directory: `client`. Build command: `npm run build`. Output directory: `dist`.
3. Add environment variable `VITE_API_URL` = your deployed backend URL (no trailing slash).
4. Deploy, then put the Pages link in your Instagram bio.

If you add a custom domain later, add it to `CLIENT_URL` on the backend too.
