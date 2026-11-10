# Kimberley & Brandon — Italian wedding website

A simple, responsive, single-page wedding website built with HTML, CSS and vanilla JavaScript. No framework, package manager or build step is required.

## Preview on your Mac

1. Download and unzip the project folder.
2. Open the folder in Visual Studio Code.
3. Open `index.html` in your browser. You can also install the VS Code **Live Server** extension and choose **Open with Live Server**.

## Main files

- `index.html` — page content and sections
- `styles.css` — colours, layout, responsive desktop/mobile styling
- `script.js` — mobile navigation, accommodation calculator and RSVP message builder

## Before publishing

1. Connect the RSVP form to a service that securely stores responses (for example, Formspree, Netlify Forms or a small backend). The current form only prepares a message for guests to copy; it does not send or store responses.
2. Add your WhatsApp contact link once decided.
3. Confirm the group coach, payment deadline, laundry access, baby equipment quantities, pool safety and babysitting arrangements.
4. Confirm local recommendations and opening details before publishing.
5. The hero photograph currently loads from a website associated with the venue. For a more reliable published site, use a photo you have permission to use and save it locally in an `assets` folder, then update the image URL in `styles.css`.
6. Check the accommodation arrangement, wording and all dates before sharing with guests.

## Update the accommodation price

The calculator uses €90 per adult per night. If the price changes, update the `90` in `script.js` and the visible price in `index.html`.

## Notes

This is a front-end starter website. It is not connected to a database, payment system, or RSVP provider yet. The accommodation calculator and RSVP message builder work in the browser.
