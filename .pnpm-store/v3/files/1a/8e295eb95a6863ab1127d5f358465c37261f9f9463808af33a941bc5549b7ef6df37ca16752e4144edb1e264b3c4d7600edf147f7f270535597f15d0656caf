# @qiwi/npm-registry-client

The fork of [npm/npm-registry-client](https://github.com/npm/npm-registry-client) that fixes the most vulnerabilities, brings deps from 2020 and adds some typings.

## Install
```shell script
npm i @qiwi/npm-registry-client
yarn add @qiwi/npm-registry-client
```

## Usage

```javascript
var RegClient = require('@qiwi/npm-registry-client')
var client = new RegClient(config)
var uri = "https://registry.npmjs.org/npm"
var params = {timeout: 1000}

client.get(uri, params, function (error, data, raw, res) {
  // error is an error if there was a problem.
  // data is the parsed data object
  // raw is the json string
  // res is the response from couch
})
```

See [original docs](https://github.com/npm/npm-registry-client/README.md) for details.
