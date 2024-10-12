import './style.css';
import { appendElement } from '../../helper/append-element';
import createElement from '../../helper/element-creator';
import SideBar from '../sidebar/Sidebar';

export default function Main() {
  const main = createElement('main', {
    classList: 'main',
  });

  appendElement(main, SideBar());

  return main;
}
