/* global test */
import { fakeVat, verifyVat } from '../src'

test('fake vat', () => {
  expect(fakeVat('1111111111')).toBe('11111111115')
  expect(fakeVat('0917164096')).toBe('09171640965')
  const fake = fakeVat()
  expect(verifyVat(fake)).toBeTruthy()
})

test('vat checker', () => {
  expect(verifyVat('09171640965')).toBeTruthy()
  expect(verifyVat('11111111111')).toBeFalsy()
})
