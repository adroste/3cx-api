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


# Other APIs for 3CX

* Call Control API 
  * official .NET library for 3CX. Still available, but no longer supported. Documentation was unpublished recently. 
  * e.g. https://github.com/Montesuma80/3cx-web-API : dotnet core based server application to control calls (make calls, drop calls, transfer etc.)
* MyPhone API (`/MyPhone/MPWebService.asmx`)
  * Lot of useful endpoints but it uses an undocumented binary format
  * used by the official webclient


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

## Hints

* **DN Properties:** To list/manage DN properties in the Web-Interface go to *Settings -> Paramters* and set `DEVELOPMENT_DNTABLE_EXPOSE` to `1`. Refresh the page and you should see the DN properties tab.