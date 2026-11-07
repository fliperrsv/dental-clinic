// Бургер-меню
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Закрыть меню после клика по ссылке
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

// Плавный скролл по якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Форма записи: валидация + подтверждение
const form = document.getElementById('bookingForm');
const success = document.getElementById('formSuccess');
const phoneInput = document.getElementById('phone');

// Простая маска телефона: только цифры, скобки, дефисы, плюс
phoneInput.addEventListener('input', () => {
  phoneInput.value = phoneInput.value.replace(/[^\d()+\-\s]/g, '');
});

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = phoneInput.value.trim();
  const date = document.getElementById('date').value;

  if (name.length < 2) {
    alert('Введите имя (минимум 2 буквы).');
    return;
  }
  const digits = phone.replace(/\D/g, '');
  if (digits.length < 10) {
    alert('Введите телефон полностью — минимум 10 цифр.');
    return;
  }
  if (!date) {
    alert('Выберите дату визита.');
    return;
  }

  success.hidden = false;
  form.reset();
  setTimeout(() => { success.hidden = true; }, 6000);
});
