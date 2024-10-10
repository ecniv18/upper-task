import './style.css';
import { appendElement } from '../../helper/append-element';
import Logo from './Logo';
import createElement from '../../helper/element-creator';

export default function Header() {
  const header = createElement('header', {
    classList: 'header',
  });

  appendElement(header, Logo());

  return header;
}
