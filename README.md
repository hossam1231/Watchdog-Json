# React JSON Lens

The beautiful JSON viewer for React.

<img width="1470" alt="image" src="https://github.com/hossam1231/Watchdog-Json/assets/93336567/c6f86aa9-9fec-41be-9f2b-541837dbe453">

## Usage

First run the server `react-json-lens` using your favourite package manager:

```bash
yarn server
```

> `server` peer dependencies must also be installed

Take it away!

```bash
cd server
yarn install
```

<img width="979" alt="image" src="https://github.com/hossam1231/Watchdog-Json/assets/93336567/845a98b8-bd98-455a-b89f-9f0cfa49a3e8">

^ increase the match case to 300 to match most json lines or increase if you need more !


To use the iterm2 regex feature simply create a `trigger` prop along with `annotate`.


<img width="1044" alt="image" src="https://github.com/hossam1231/Watchdog-Json/assets/93336567/8d5655d6-3039-47d3-86fd-eeede171dd9c">

<img width="1055" alt="Screenshot 2024-03-16 at 17 16 17" src="https://github.com/hossam1231/Watchdog-Json/assets/93336567/724b375f-446e-4208-8ee0-eee41ad8d70e">

trigger the script by console logging something similar to 

```tsx

 console.log(
    `$: ------------------------------------------------------------------------------------`
  );
  console.log(`line 63 $: Builder -> form `, `@jsonWatchdog`, form);
  console.log(
    `$: ------------------------------------------------------------------------------------`
  );


```

## License

The MIT License (MIT)

Copyright (c) 2023 Twilio

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
