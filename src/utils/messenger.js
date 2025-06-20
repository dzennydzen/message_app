import sendMessage from '../services/api.js';

// Функция, которую тестируем
export function notifyUser(user, message) {
  if (!user || !message) {
    throw new Error('User and message are required!');
  }

  const result = sendMessage(`[${user}]: ${message}`);

  if (result.status !== 'ok') {
    throw new Error('Message sending failed!');
  }

  return 'SUCCESS';
}