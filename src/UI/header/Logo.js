import createElement from '../../helper/element-creator';

export default function Logo() {
  const element = createElement('h1', {
    innerText: 'Upper T^ask',
    classList: 'header-logo',
  });

  return element;
}
