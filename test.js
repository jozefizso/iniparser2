import test from 'ava';
import parser from './';

test('Placeholder unit test', t => {
	t.is(parser('config.ini'), null);
});
