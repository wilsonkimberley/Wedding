const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    navigation.classList.toggle('is-open', !isOpen);
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      navigation.classList.remove('is-open');
    });
  });
}

const nightsInput = document.querySelector('#nights');
const adultsInput = document.querySelector('#adults');
const totalOutput = document.querySelector('#stay-total');

function updateStayTotal() {
  if (!nightsInput || !adultsInput || !totalOutput) return;
  const nights = Number(nightsInput.value);
  const adults = Number(adultsInput.value);
  const total = nights * adults * 90;
  totalOutput.textContent = new Intl.NumberFormat('en-IE', {
    style: 'currency', currency: 'EUR', maximumFractionDigits: 0
  }).format(total);
}

nightsInput?.addEventListener('change', updateStayTotal);
adultsInput?.addEventListener('change', updateStayTotal);
updateStayTotal();

const rsvpForm = document.querySelector('#rsvp-form');
const rsvpResult = document.querySelector('#rsvp-result');
const rsvpOutput = document.querySelector('#rsvp-output');
const copyButton = document.querySelector('#copy-rsvp');
const copyStatus = document.querySelector('#copy-status');
let preparedRsvp = '';

rsvpForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(rsvpForm);
  const field = (key) => String(data.get(key) || '').trim() || 'Not provided';
  preparedRsvp = [
    'Kimberley & Brandon wedding RSVP',
    `Names: ${field('names')}`,
    `Attendance: ${field('attendance')}`,
    `Adults: ${field('adults')}`,
    `Children and ages: ${field('children')}`,
    `Arrival date: ${field('arrival')}`,
    `Departure date: ${field('departure')}`,
    `Flights: ${field('flights')}`,
    `Transport: ${field('transport')}`,
    `Dietary requirements and allergies: ${field('dietary')}`,
    `Other requirements: ${field('other')}`
  ].join('\n');
  rsvpOutput.value = preparedRsvp;
  rsvpResult.hidden = false;
  copyStatus.textContent = 'Your RSVP message is ready. Copy it and send it to Kimberley and Brandon.';
  rsvpResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

copyButton?.addEventListener('click', async () => {
  if (!preparedRsvp) return;
  try {
    await navigator.clipboard.writeText(preparedRsvp);
    copyStatus.textContent = 'Copied. You can now paste your RSVP into a WhatsApp message.';
  } catch (error) {
    rsvpOutput.focus();
    rsvpOutput.select();
    copyStatus.textContent = 'Select and copy the message above, then send it to Kimberley and Brandon.';
  }
});
