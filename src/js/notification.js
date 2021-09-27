import '@pnotify/core/dist/BrightTheme.css';
import { info, success, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
export const successInfo = () => {
    success({
  title: 'We found!',
  text: `There is contry description `,
  delay: 1000
  });
}
export const errorInfo = () => {
    error({
  title: 'Oh No!',
  text: 'Too many matches found.',
  delay: 500
  });
}
export const information = () => {
    info({
  title: 'Oh Yes!',
  text: `We found some countries `,
  delay: 500
  });
}