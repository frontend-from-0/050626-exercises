// Helpers shared by all pages (index, create, update).
// Must be loaded with a <script> tag BEFORE the page's own script.

// Letters (any language), optionally separated by a single space, hyphen or apostrophe.
// Examples that pass: "Ilker", "Mary-Jane", "O'Connor", "Ayşe Nur"
const NAME_PATTERN = /^\p{L}+(?:[ '’-]\p{L}+)*$/u;

// Returns an error message, or an empty string when the value is valid.
// The value must already be trimmed by the caller.
function validateName(value, label) {
  if (value === '') {
    return `${label} is required.`;
  }
  if (value.length < 2) {
    return `${label} must be at least 2 characters long.`;
  }
  if (value.length > 50) {
    return `${label} must be at most 50 characters long.`;
  }
  if (!NAME_PATTERN.test(value)) {
    return `${label} can contain only letters, spaces, hyphens and apostrophes.`;
  }
  return '';
}

// Shows (or clears, when message is empty) the error under a form field
// and marks the input as invalid for assistive technologies.
function setFieldError(input, errorElement, message) {
  errorElement.textContent = message;
  if (message) {
    input.setAttribute('aria-invalid', 'true');
  } else {
    input.removeAttribute('aria-invalid');
  }
}

// Writes a message into a status element (the element has role="status",
// so screen readers announce the new text automatically).
// type: 'success' | 'error' | 'info' (anything else clears the colour).
function showStatus(element, message, type) {
  element.textContent = message;
  element.classList.remove('status--success', 'status--error', 'status--info');
  if (type) {
    element.classList.add(`status--${type}`);
  }
}
