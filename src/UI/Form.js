import moment from 'moment';
import createElement from '../helper/element-creator';
import { appendElement } from '../helper/append-element';

export default (function Form() {
  const form = createElement('form', {
    classList: 'task-form',
  });
  const title = createElement('input', {
    classList: 'task-form-title',
    type: 'text',
  });

  const description = createElement('textarea', {
    classList: 'task-form-description',
  });

  const dueDate = createElement('input', {
    classList: 'task-form-date',
    type: 'date',
    value: moment().format('YYYY-M-DD'),
  });
  const priority = createElement('select', {
    classList: 'task-form-priority',
  });
  const options = ['Urgent', 'High', 'Normal'].map((opt) => {
    const option = createElement('option', {
      innerText: opt,
      value: opt.toLowerCase(),
    });
    return option;
  });
  const submit = createElement('button', {
    classList: 'task-form-submit',
    innerText: 'Submit',
  });

  const dividerLeft = createElement('div', { classList: 'task-form-div-left' });
  const dividerRight = createElement('div', {
    classList: 'task-form-div-right',
  });
  appendElement(form, [dividerLeft, dividerRight]);
  appendElement(dividerLeft, [title, description]);
  appendElement(dividerRight, [dueDate, priority, submit]);
  appendElement(priority, options);

  return form;
})();
