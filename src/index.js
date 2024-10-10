import './css/main.css';
import { appendElement } from './helper/append-element';
import Header from './UI/header/Header';

const body = document.querySelector('.wrapper');

appendElement(body, Header());
