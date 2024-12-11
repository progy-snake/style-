// Отримуємо елементи
const form = document.getElementById('styleForm');
const thankYouMessage = document.getElementById('thankYouMessage');
const responsesList = document.getElementById('responsesList');

// Обробка подання форми
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Отримуємо значення з форми
  const name = document.getElementById('name').value;
  const selectedStyle = document.getElementById('styleSelect').value;

  // Відображаємо подяку
  thankYouMessage.innerHTML = `Thank you, ${name}! You have chosen <strong>${selectedStyle}</strong> as your favorite style.`;

  // Зберігаємо відповідь користувача
  const responseItem = document.createElement('p');
  responseItem.innerHTML = `<strong>${name}:</strong> ${selectedStyle}`;
  responsesList.appendChild(responseItem);

  // Очищаємо форму
  form.reset();
});
