# 🇮🇹 Italian Vat Better 🇮🇹

A little utility to generate fake vat code and also to check if they are [valid](http://it.wikipedia.org/wiki/Partita_IVA)

## Install

`yarn add italian-vat-better`

and then

`import { fakeVat, verifyVat } from 'italian-vat-better'`

## Usage

### Fake vat

```js
fakeVat() // A random valid vat code
```

or

```js
fakeVat('1111111111') // 11111111115
```

### Verify Vat

```js
verifyVat('09171640965') // true
verifyVat('11111111111') // false
```
