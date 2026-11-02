const contactForm = document.getElementById('contact-form');

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!contactForm.reportValidity()) return;

  const formData = new FormData(contactForm);
  const subject = encodeURIComponent('Hair salon enquiry - ' + formData.get('service'));
  const body = encodeURIComponent(
    'Name: ' + formData.get('name') + '\n' +
    'Email: ' + formData.get('email') + '\n' +
    'Service: ' + formData.get('service') + '\n\n' +
    formData.get('message')
  );

  document.getElementById('form-status').textContent =
    'Opening your email app with your message. Review it there and choose Send.';
  window.location.href = 'mailto:?subject=' + subject + '&body=' + body;
});
