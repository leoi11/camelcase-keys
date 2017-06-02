# camelcase-keys (forked)

> Convert object keys to camelCase using [`camelcase`](https://github.com/sindresorhus/camelcase)

## About this fork
This fork diverges from the author's repo,
and only included a very useful feature provided
in the original package added in v4.0.0.

There were another breaking change in v4.0.0
which is upgrading to es6:
When used by our react app, we don't transpile
es6 in the node_modules dir.
When the es6 syntax is read by Uglify,
things break.

Therefore, our solution is to maintain our own fork
without the breaking change.


## Install

```
$ npm install --save https://github.com/leoi11/camelcase-keys
```


## Usage

```js
const camelcaseKeys = require('camelcase-keys');

camelcaseKeys({'foo-bar': true});
//=> {fooBar: true}

camelcaseKeys({'foo-bar': true, nested: {unicorn_rainbow: true}}, {deep: true});
//=> {fooBar: true, nested: {unicornRainbow: true}}
```

```js
const camelcaseKeys = require('camelcase-keys');

const argv = require('minimist')(process.argv.slice(2));
//=> {_: [], 'foo-bar': true}

camelcaseKeys(argv);
//=> {_: [], fooBar: true}
```


## API

### camelcaseKeys(input, [options])

#### input

Type: `Object`

Object to camelCase.

#### options

Type: `Object`

##### exclude

Type: `Array` of (`string`|`RegExp`)<br>
Default: `[]`

Exclude keys from being camelCased.

##### deep

Type: `boolean`<br>
Default: `false`

Recurse nested objects and objects in arrays.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
