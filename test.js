import test from 'ava';
import m from './';

test('main', t => {
	t.true(m({'foo-bar': true}).fooBar);
});

test('exclude option', t => {
	t.true(m({'--': true}, {exclude: ['--']})['--']);
	t.deepEqual(m({'foo-bar': true}, {exclude: [/^f/]}), {'foo-bar': true});
});

test('deep option', t => {
	t.deepEqual(
		// eslint-disable-next-line camelcase
		m({foo_bar: true, obj: {one_two: false, arr: [{three_four: true}]}}, {deep: true}),
		{fooBar: true, obj: {oneTwo: false, arr: [{threeFour: true}]}}
	);
});
