const contactForm = document.querySelector('form');
const successMessage = document.querySelector('.success-message');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const email = document.getElementById('email');
  const queryType = document.querySelector('input[name="query-type"]:checked');
  const message = document.getElementById('message');
  const consent = document.getElementById('consent');

  let isValid = true;

  const toggleError = (element, isError) => {
    const errorSpan = element.closest('.form-group').querySelector('.error');
    if (isError) {
      errorSpan.classList.add('visible');
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.classList.add('invalid');
      }
      isValid = false;
    } else {
      errorSpan.classList.remove('visible');
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.classList.remove('invalid');
      }
    }
  };

  toggleError(firstName, firstName.value.trim() === '');

  toggleError(lastName, lastName.value.trim() === '');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  toggleError(email, !emailRegex.test(email.value.trim()));

  const radioGroup = document.querySelector('.radio-group');
  const queryError = radioGroup.closest('.form-group').querySelector('.error');
  if (!queryType) {
    queryError.classList.add('visible');
    isValid = false;
  } else {
    queryError.classList.remove('visible');
  }


  toggleError(message, message.value.trim() === '');


  const consentError = consent.closest('.checkbox-group').querySelector('.error');
  if (!consent.checked) {
    consentError.classList.add('visible');
    isValid = false;
  } else {
    consentError.classList.remove('visible');
  }

  if (isValid) {
    successMessage.classList.add('visible');
    contactForm.reset();
    

    document.querySelectorAll('.invalid').forEach(el => el.classList.remove('invalid'));

    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
      successMessage.classList.remove('visible');
    }, 5000);
  }
});

