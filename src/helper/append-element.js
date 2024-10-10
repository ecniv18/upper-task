export function appendElement(parent, children) {
  if (Array.isArray(children)) {
    children.forEach((child) => {
      parent.appendChild(child);
    });
  } else {
    parent.appendChild(children);
  }
}
