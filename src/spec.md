# Specification

## Summary
**Goal:** Remove the IMC Objectives and IMC Plan sections and any related navigation from the website.

**Planned changes:**
- Remove the “IMC Objectives” section from the home page so it no longer renders (including its DOM anchor/id).
- Remove the “IMC Plan” section from the home page so it no longer renders (including its DOM anchor/id).
- Update site navigation (desktop and mobile) to remove links/buttons that point to the removed IMC sections.
- Remove/cleanup unused frontend code and imports related to the removed IMC sections to avoid build/lint warnings.

**User-visible outcome:** The home page and navigation no longer show “IMC Objectives” or “IMC Plan”, and the site has no visible IMC-related copy or broken navigation links to those sections.
