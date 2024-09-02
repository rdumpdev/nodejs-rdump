# My Node Package

A simple Node.js package for debugging with a remotely dump utility, based on rdump.dev.

## Installation

1. Navigate to the root of your Node.js project.
2. Add the package

```bash
npm install rdump
```

### Usage

Once installed, you can use the package as follows:

```js
import { rdump } from 'rdump';

const action = 'action';
const data = { foo: 'bar', baz: [1, 2, 3] };
rdump(action, data);
