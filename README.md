# RightDirect – Front-End & CMS Technical Assessment

RightDirect is a responsive website built using **Astro** for the frontend and **Sanity CMS** for content management.

The implementation recreates the provided RightDirect reference website while allowing business content such as text, images, CTA buttons, navigation, testimonials, FAQs, and footer information to be managed through Sanity CMS.

---

## Tech Stack

### Frontend

- Astro
- TypeScript
- HTML5
- CSS3

### CMS

- Sanity CMS
- GROQ

### Deployment

- Vercel – Frontend
- Sanity Hosting – CMS Studio

---

## 1. Setup Instructions

### Prerequisites

Make sure the following are installed:

- Node.js
- npm
- Git

### Clone the Repository

```bash
git clone <your-github-repository-url>
cd RightDirect
```

### Frontend Setup

Navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the `frontend` directory:

```env
PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
PUBLIC_SANITY_DATASET=production
```

Start the Astro development server:

```bash
npm run dev
```

The frontend will normally run at:

```text
http://localhost:4321
```

### Sanity CMS Setup

Open another terminal and navigate to the Sanity project:

```bash
cd rightdirect-cms
```

Install dependencies:

```bash
npm install
```

Start Sanity Studio:

```bash
npm run dev
```

Sanity Studio will normally run at:

```text
http://localhost:3333
```

After editing content in Sanity Studio, click **Publish** to make the updated content available to the frontend.

### Production Build

To create a production build:

```bash
cd frontend
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 2. Project Architecture Overview

The project is separated into two main applications:

```text
RightDirect/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── lib/
│   │   ├── pages/
│   │   └── styles/
│   └── package.json
│
├── rightdirect-cms/
│   ├── schemaTypes/
│   │   ├── homePage.ts
│   │   ├── siteSettings.ts
│   │   └── index.ts
│   └── package.json
│
└── README.md
```

### Frontend Architecture

The frontend is built using **Astro** and divided into meaningful page sections such as:

- Header
- Hero
- Stats
- Services
- Process
- Success Stories
- Trusted Brands
- Testimonials
- Collaboration
- FAQ
- Bottom CTA
- Footer

Each component primarily receives CMS data through props and is responsible for presenting that data.

### CMS Architecture

Sanity CMS is used to manage the website's business content.

The CMS contains two main document types:

**Home Page**

Contains homepage-specific content including Hero, Stats, Services, Process, Success Stories, Trusted Brands, Testimonials, Collaboration, FAQ, and Bottom CTA.

**Site Settings**

Contains global content including Logo, Navigation, Header CTA, Footer, Contact Information, Social Links, and Copyright Information.

### Data Flow

```text
Sanity CMS
     ↓
GROQ Query
     ↓
Astro Page
     ↓
Component Props
     ↓
Astro Components
     ↓
Rendered Website
```

Sanity content is fetched at the page level and passed to individual Astro components through props.

This keeps data fetching centralized and keeps the components focused on presentation.

### CMS and Frontend Separation

Business content is managed through Sanity CMS, including:

- Titles and descriptions
- Images
- CTA text and URLs
- Navigation
- Testimonials
- FAQs
- Footer information

Frontend-specific concerns remain in Astro, including:

- Layout
- Spacing
- Colors
- Responsive breakpoints
- Animations
- Hover effects
- Component styling

This allows website content to be updated without modifying frontend source code.

---

## 3. Assumptions Made During Development

1. The primary scope of this assessment is recreating the provided RightDirect homepage.

2. Business content is managed through Sanity CMS rather than being hardcoded inside Astro components.

3. Visual presentation such as colors, spacing, layouts, responsive breakpoints, animations, and hover effects remains in the frontend.

4. Global content such as navigation and footer information is stored in a separate `Site Settings` document for reuse.

5. Homepage-specific content is maintained inside the `Home Page` Sanity document.

6. The public frontend displays published Sanity content rather than draft content.

7. `useCdn: false` is used during development so newly published CMS changes can be retrieved immediately while testing.

8. Components are created for meaningful page sections rather than creating unnecessary components for every heading or paragraph.

9. Optional CMS fields and arrays are handled safely to prevent unnecessary rendering errors.

10. The website is designed to support desktop, tablet, and mobile screen sizes.

---

## Deployment

### Frontend

```text
Frontend URL: Add deployed URL here
```

### Sanity Studio

```text
Sanity Studio URL: Add deployed URL here
```