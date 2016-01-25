import test from 'ava';
import parser from '../';

test('Read config.ini and return content', t => {
	return parser('config.ini').then(data => {
		t.is(data, 'key=value');
	});
});
