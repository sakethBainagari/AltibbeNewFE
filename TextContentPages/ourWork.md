# Our Work (route: /our-work)

## Section 1 – Work Hero (component: WorkHero.jsx)
- **Headline:** Altibbe in Action — Building Trust, Delivering Clarity
- **Subtext:** From national transparency programs to AI-driven policy tools, our work advances health integrity and market confidence worldwide.
- **Primary CTA:** See Hedamo System → (/hedamo)
- **Secondary CTA:** Contact for Collaboration → (/contact?type=collaboration)
- **Image:** Montage of real-world deployments, data overlays, and global trade scenes.
- **Design:** Prestige hero, dark overlay, serif headline, animated gold accents.

---

## Section 2 – Impact Metrics (component: ImpactMetrics.jsx)
- **Section Title:** Impact at a Glance
- **Metrics (examples, update as needed):**
  - 10+ National Programs
  - 50M+ Products Traced
  - 8 Languages Supported
  - 100+ Agency & Producer Partners
- **Design:** Large, animated numbers; gold/green highlights.

---

## Section 3 – Case Studies (component: CaseStudies.jsx)
- **Section Title:** Case Studies
- **Cards (3–4):**
  - **UAE:** CEPA-aligned transparency for food imports; live agency dashboards.
  - **USA:** USDA/FDA pilots; AI-driven compliance signals for producers.
  - **India:** Export enablement; multilingual QR-linked reports for producers.
  - **KSA:** Vision 2030 pilots; market access and consumer trust programs.
- **Design:** Card grid, real data visuals, country flag accents.

---

## Section 4 – How We Work (component: HowWeWork.jsx)
- **Section Title:** Our Approach
- **Bullets:**
  - Policy-Ready Reporting
  - AI-Driven Insights
  - Multilingual Access
  - Secure, Scalable Infrastructure
- **Paragraph:** We partner with ministries, agencies, and producers to localize solutions for national priorities—delivering clarity, efficiency, and trust at every step.
- **Design:** Two-column, icon bullets, gold dividers.

---

## Section 5 – Testimonials (component: Testimonials.jsx)
- **Section Title:** Voices from the Field
- **Quotes (2–3, anonymized or with permission):**
  - “Altibbe’s system gave us real-time clarity and confidence in our import programs.” — Agency Official, UAE
  - “The multilingual reports made compliance and market access much easier.” — Producer, India
  - “AI insights helped us prioritize and plan with precision.” — Policy Advisor, USA
- **Design:** Pull-quote cards, gold/green accent lines.

---

## Section 6 – Partners & Recognition (component: PartnersRecognition.jsx)
- **Section Title:** Partners & Recognition
- **Copy:** Trusted by ministries, standards bodies, and leading producers worldwide.
- **Logo row:** Placeholder logos (monochrome).
- **Design:** Neutral background, gold accent line.

---

## Section 7 – Closing CTA (component: CTASection.jsx)
- **Headline:** Ready to Advance Health Integrity?
- **Subtext:** Connect with Altibbe to explore a pilot, partnership, or tailored solution for your region.
- **Primary CTA:** Start a Conversation → (/contact?type=collaboration)
- **Secondary CTA:** See Hedamo System → (/hedamo)
- **Design:** Dark band, gold headline, twin buttons.

---

## Design System Notes (for this page)
- **Typography:** Headings: Playfair Display; Body: Inter
- **Palette:** Charcoal, Ivory, Muted Gold, Deep Green (for Hedamo references)
- **Tone:** Institutional, results-focused, confident
- **Imagery:** Real deployments, data overlays, no stock “smiles/handshakes”
- **Accessibility:** 4.5:1 contrast, alt text for all images

---

## Optional: Our Work Page Content JSON (Cursor-friendly)
```json
{
  "hero": {
    "headline": "Altibbe in Action — Building Trust, Delivering Clarity",
    "subtext": "From national transparency programs to AI-driven policy tools, our work advances health integrity and market confidence worldwide.",
    "ctaPrimary": { "label": "See Hedamo System", "href": "/hedamo" },
    "ctaSecondary": { "label": "Contact for Collaboration", "href": "/contact?type=collaboration" },
    "image": "/images/ourwork/hero_montage.jpg"
  },
  "metrics": {
    "title": "Impact at a Glance",
    "items": [
      { "label": "National Programs", "value": "10+" },
      { "label": "Products Traced", "value": "50M+" },
      { "label": "Languages Supported", "value": "8" },
      { "label": "Agency & Producer Partners", "value": "100+" }
    ]
  },
  "caseStudies": {
    "title": "Case Studies",
    "cards": [
      { "country": "UAE", "body": "CEPA-aligned transparency for food imports; live agency dashboards.", "flag": "🇦🇪" },
      { "country": "USA", "body": "USDA/FDA pilots; AI-driven compliance signals for producers.", "flag": "🇺🇸" },
      { "country": "India", "body": "Export enablement; multilingual QR-linked reports for producers.", "flag": "🇮🇳" },
      { "country": "KSA", "body": "Vision 2030 pilots; market access and consumer trust programs.", "flag": "🇸🇦" }
    ]
  },
  "howWeWork": {
    "title": "Our Approach",
    "bullets": [
      "Policy-Ready Reporting",
      "AI-Driven Insights",
      "Multilingual Access",
      "Secure, Scalable Infrastructure"
    ],
    "paragraph": "We partner with ministries, agencies, and producers to localize solutions for national priorities—delivering clarity, efficiency, and trust at every step."
  },
  "testimonials": {
    "title": "Voices from the Field",
    "quotes": [
      { "text": "Altibbe’s system gave us real-time clarity and confidence in our import programs.", "author": "Agency Official, UAE" },
      { "text": "The multilingual reports made compliance and market access much easier.", "author": "Producer, India" },
      { "text": "AI insights helped us prioritize and plan with precision.", "author": "Policy Advisor, USA" }
    ]
  },
  "partners": {
    "title": "Partners & Recognition",
    "copy": "Trusted by ministries, standards bodies, and leading producers worldwide."
  },
  "closingCta": {
    "headline": "Ready to Advance Health Integrity?",
    "subtext": "Connect with Altibbe to explore a pilot, partnership, or tailored solution for your region.",
    "primary": { "label": "Start a Conversation", "href": "/contact?type=collaboration" },
    "secondary": { "label": "See Hedamo System", "href": "/hedamo" }
  }
}
```
