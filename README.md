# Sudhanshu Vijay Narayane — Portfolio

A responsive personal portfolio showcasing my projects, technical skills, experience, and learning journey across data analytics, artificial intelligence, machine learning, and software development.

**Live website:** https://sido-dev.github.io/  
**GitHub repository:** https://github.com/Sido-dev/Sido-dev.github.io

## About the website

This portfolio is built as a lightweight static website using HTML, CSS, and vanilla JavaScript. It does not require a backend, database, Node.js, or a build tool.

The website includes:

- Introduction and profile section
- About section
- Featured project cards with interactive project details
- Skills grouped by technical area
- Experience and milestone timeline for 2023, 2024, and 2025
- Contact and social links
- Responsive layouts for desktop, tablet, and mobile screens

## Technology stack

| Technology | Usage |
|---|---|
| HTML5 | Page structure and content |
| CSS3 | Layout, styling, animations, and responsive design |
| JavaScript (Vanilla) | Project interactions, filters, and detail dialog |
| Google Fonts | DM Sans and Space Grotesk typography |
| GitHub Pages | Static website hosting |

## Repository structure

```text
Sido-dev.github.io/
├── index.html   # Portfolio sections and content
├── style.css    # Visual design and responsive styles
├── app.js       # Interactive project features
└── README.md    # Project documentation
```

Keep these files together in the repository root. GitHub Pages must be able to find `index.html` at the root of the published directory.

## Run locally

No dependencies or installation are required.

1. Clone the repository:

   ```bash
   git clone https://github.com/Sido-dev/Sido-dev.github.io.git
   ```

2. Open the project folder:

   ```bash
   cd Sido-dev.github.io
   ```

3. Start a local web server with Python:

   ```bash
   python -m http.server 8000
   ```

4. Visit **http://localhost:8000** in your browser.

You can also open `index.html` directly, but using a local server is recommended while testing.

## Deploy with GitHub Pages

This is a static website, so there is no build command and no output folder such as `dist`.

1. Push the website files to the `main` branch of this repository.
2. Open the repository's **Settings → Pages** page.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select the `main` branch and the `/(root)` folder, then save.
5. Open the **Actions** tab and confirm that the Pages deployment workflow completes successfully.
6. Visit **https://sido-dev.github.io/**.

After future commits to the configured publishing branch, GitHub Pages will build and publish the updated static files.

## Update the portfolio

| What to update | File |
|---|---|
| Text, sections, project cards, navigation, and links | `index.html` |
| Colours, fonts, spacing, layout, animations, and mobile styles | `style.css` |
| Project filtering and project detail interactions | `app.js` |

When adding or renaming a file, update its reference in `index.html` and make sure the file is committed to the repository.

## Notes

- The site is static and does not use a server-side API or database.
- The Google Fonts stylesheet is loaded from Google Fonts, so those fonts require an internet connection. System fallback fonts are used if they cannot be reached.
- Do not place the website files inside an extra nested folder when publishing from `/(root)`.

---

Made by **Sudhanshu Vijay Narayane**.
