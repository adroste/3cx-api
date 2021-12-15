# REST-API for 3CX

This is a fork of the last publicly available 3CX Phone API (see: https://www.npmjs.com/package/@3cx/api).
As long as we are waiting for a new public API this is all we got.
As I'm working on small side projects  that rely on this api I'll try to maintain it a bit (update dependencies, add missing APIs etc.)

I will accept pull requests that for instance
* add missing APIs,
* remove unsupported APIs,
* fix stuff,
* introduce handy utils etc.


# Related projects

* https://github.com/adroste/3cx-tools


# Getting started

Installation:
    
```bash
# npm
npm install --save @adroste/3cx-api

# yarn
yarn add @adroste/3cx-api
```

  
# Usage

```ts
import { createClient, ConsoleClient } from '@adroste/3cx-api';

async function main(){
    const http = await createClient('http://my-3cx-instance:5000', { Username: 'Admin', Password: '############' });
    const api = new ConsoleClient(http);

    console.log(await api.getSystemStatus());
}

main();
```

# Docs

Unfortunately, there are no docs available at this moment.
However, the code is very simple. 
I'll suggest you start by looking at the `lib/console-client.ts` as well as `lib/dashboard/dashboard-func.ts`. The majority of available endpoints is implemented those two files.