export default function sendMessage(message) {
  console.log(`Сообщение отправлено: "${message}"`);
  return { status: 'ok' };
}