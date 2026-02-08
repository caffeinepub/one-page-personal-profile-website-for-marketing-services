# Specification

## Summary
**Goal:** Update the Contact section and social icon links to use the user’s provided email, phone number, and social URLs.

**Planned changes:**
- Update Contact method cards in `frontend/src/components/sections/ContactSection.tsx` to use `m.khalid.fed@gmail.com`, `+923411876543`, and `https://www.linkedin.com/in/khalid-hussain2k26/`, including correct `mailto:` and `tel:` hrefs.
- Update the “Send a Message” CTA button in the Contact section to use `mailto:m.khalid.fed@gmail.com`.
- Update social icon button/link hrefs in `frontend/src/components/sections/ContactSection.tsx` for X, GitHub, and LinkedIn, keeping external-link new-tab behavior and `rel="noopener noreferrer"`.

**User-visible outcome:** The Contact section and social icons link to the correct email, phone dialer, and social profiles using the provided URLs.
