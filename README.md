<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Portfolio

A modern React + TypeScript web application for showcasing your academic profile, built with Vite.

## 🚀 Deploy to GitHub Pages

This project includes a GitHub Actions workflow that automatically builds and deploys to GitHub Pages on every push to `main`.

### Setup Instructions

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to **Pages** (under "Code and automation")
   - Under **Source**, select "GitHub Actions"

2. **Update Base Path** (if needed):
   - Edit `vite.config.ts` if your repository name differs
   - Change the base path from `/Portfolio/` to `/your-repo-name/`

3. **Push to Deploy**:
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

Your site will be available at: `https://<your-username>.github.io/Portfolio/`

## 🛠️ Run Locally

**Prerequisites:** Node.js 18+ and npm

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production**:
   ```bash
   npm run build
   npm run preview
   ```

## 📁 Project Structure

```
.
├── components/         # React components
├── data/              # Profile data and content
├── App.tsx            # Main application component
├── index.tsx          # Application entry point
├── vite.config.ts     # Vite configuration
└── .github/workflows/ # GitHub Actions workflows
```

## 🔧 Technologies

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **GitHub Actions** - CI/CD
- **GitHub Pages** - Hosting
