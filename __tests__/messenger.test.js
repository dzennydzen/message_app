import { notifyUser } from '../src/utils/messenger.js';
import sendMessage from '../src/services/api.js';

jest.mock('../src/services/api.js');

describe('notifyUser', () => {
    test('notifyUser returns SUCCESS when status is ok', () => {
        sendMessage.mockReturnValue({ status: 'ok' });

        expect(notifyUser('name','test')).toBe('SUCCESS');
    });

    test('notifyUser throws error when there is no user or no message', () => {
        expect(() => notifyUser('test')).toThrow('User and message are required!');
        expect(() => notifyUser('name')).toThrow('User and message are required!');
    });

    test('notifyUser throws error when sendMessage return error', () => {
        sendMessage.mockReturnValue({ status: 'error' });

        expect(() => notifyUser('name', 'test')).toThrow('Message sending failed!');
    });
});

