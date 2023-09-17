export default function scroll(x) {
  const activeElement = document.querySelector(`[data-name="${x}"]`);
  if (!activeElement) return;
  return activeElement.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}
