// @ts-check
const normalize = require('./../normalize')
const { join } = require('path')

describe('normalize options', () => {
  it('normalizes undefined', () => {
    const options = normalize()
    expect(options).toMatchObject({
      examplesPattern: '**/__examples__/**/*.vue'
    })
  })

  it('packageNameFromPath works', () => {
    const cwd = '/home/packages'
    const options = normalize({ cwd })
    expect(options).toMatchObject({
      cwd,
      examplesPattern: '**/__examples__/**/*.vue'
    })
    expect(
      options.packageNameFromPath(join(cwd, 'package-a', '__examples__', 'hello.vue'))
    ).toStrictEqual('package-a')

    expect(
      options.packageNameFromPath(join(cwd, 'package-a', '__examples__', 'themes', 'clean.vue'))
    ).toStrictEqual('package-a')
  })

  it('exampleNameFromPath works', () => {
    const cwd = '/home/packages'
    const options = normalize({ cwd })
    expect(options).toMatchObject({
      cwd,
      examplesPattern: '**/__examples__/**/*.vue'
    })
    expect(
      options.exampleNameFromPath(join(cwd, 'package-a', '__examples__', 'hello.vue'))
    ).toEqual('hello')

    expect(
      options.exampleNameFromPath(join(cwd, 'package-a', '__examples__', 'themes', 'clean.vue'))
    ).toStrictEqual('clean')
  })

  it('normalizes {}', () => {
    expect(normalize({})).toMatchObject({
      cwd: process.cwd(),
      examplesPattern: '**/__examples__/**/*.vue'
    })
  })

  it('respects dir', () => {
    const dir = '/hello/world'
    expect(normalize({ cwd: dir })).toMatchObject({
      cwd: dir,
      examplesPattern: '**/__examples__/**/*.vue'
    })
  })

  it('respects patterns', () => {
    const examplesPattern = '**/xxx/*.vue'
    expect(normalize({ examplesPattern })).toMatchObject({
      examplesPattern,
      cwd: process.cwd()
    })
  })
})
