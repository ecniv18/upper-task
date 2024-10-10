export default function createElement(
  element,
  { classList, id, innerText, innerHTML, value, placeholder, name, type }
) {
  const el = document.createElement(element);

  if (classList) el.classList = classList;
  if (id) el.id = id;
  if (innerText) el.innerText = innerText;
  if (innerHTML) el.innerHTML = innerHTML;
  if (value) el.value = value;
  if (placeholder) el.placeholder = placeholder;
  if (name) el.name = name;
  if (type) el.type = type;
  if (type) el.type = type;

  return el;
}
