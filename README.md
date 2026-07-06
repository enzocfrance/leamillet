# Léa Millet — Psychologue Clinicienne D.E

Site vitrine de **Léa Millet**, psychologue clinicienne D.E spécialisée dans
l'autisme et les troubles neurodéveloppementaux (Miramas).

Site statique construit avec **Astro** + **Tailwind CSS**, déployé sur **OVH**
via **GitHub Actions** (SFTP).

## 🧱 Stack

- [Astro](https://astro.build/) — génération statique (`output: 'static'`)
- [Tailwind CSS](https://tailwindcss.com/) — design system
- Nginx (Docker) pour un déploiement conteneurisé alternatif

## 📁 Architecture

```
src/
├── components/      # Sections réutilisables (Navbar, Hero, Pratiques…)
├── layouts/         # Base.astro — <head> SEO, JSON-LD, scripts globaux
├── pages/           # index.astro, mentions.astro (routing par fichier)
├── styles/          # global.css — tokens, animations, styles partagés
└── env.d.ts
public/              # Assets copiés tels quels (pictures, robots, sitemap…)
```

## 🚀 Développement

```bash
npm install       # installe les dépendances
npm run dev       # serveur local → http://localhost:4321
npm run build     # build de production dans dist/
npm run preview   # prévisualise le build
```

## 🔁 CI/CD

Le workflow [`.github/workflows/ci-cd.yml`](.github/workflows/ci-cd.yml) :

1. **build** — installe les dépendances et construit le site Astro.
2. **deploy** — déploie `dist/` sur OVH par SFTP (uniquement sur `push` vers `main`).

### Secrets GitHub requis

| Secret               | Description                        |
| -------------------- | ---------------------------------- |
| `SFTP_HOST`          | Hôte SFTP OVH                      |
| `SFTP_USERNAME`      | Identifiant SFTP                   |
| `SFTP_PASSWORD`      | Mot de passe SFTP                  |
| `SFTP_PORT`          | Port SFTP (ex. 22)                |
| `SFTP_REMOTE_PATH`   | Chemin distant (ex. `/www`)       |

## 🐳 Docker (optionnel)

```bash
docker build -t leamillet .
docker run -p 3000:3000 leamillet
```

---

Site réalisé par [Enzo Chamanier](mailto:enzo.chamanier.pro@gmail.com).
