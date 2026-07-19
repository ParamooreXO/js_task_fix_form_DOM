'use strict';

const input = document.querySelectorAll('input');

input.forEach((el) => {
  const label = document.createElement('label');

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', el.getAttribute('id'));
  label.textContent = el.getAttribute('name');

  el.setAttribute('placeholder', el.getAttribute('name').toUpperCase());

  el.parentNode.appendChild(label);
});
// write code here
