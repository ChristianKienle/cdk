// @ts-check
const normalize = require('./../normalize')
const { join } = require('path')

describe('normalize options', () => {
  it('normalizes undefined', () => {
    const options = normalize()
    expect(options).toMatchObject({
      examplesPattern: '**/__examples__/**/*.vue',
      playground: false
    })
  })

  it('packageNameFromPath works', () => {
    const cwd = '/home/packages'
    const options = normalize({ cwd })
    expect(options).toMatchObject({
      cwd,
      examplesPattern: '**/__examples__/**/*.vue',
      playground: false
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
      examplesPattern: '**/__examples__/**/*.vue',
      playground: false
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
      examplesPattern: '**/__examples__/**/*.vue',
      playground: false
    })
  })

  it('respects dir', () => {
    const dir = '/hello/world'
    expect(normalize({ cwd: dir })).toMatchObject({
      cwd: dir,
      examplesPattern: '**/__examples__/**/*.vue',
      playground: false
    })
  })

  it('respects playground', () => {
    const dir = '/hello/world'
    expect(
      normalize({
        cwd: dir,
        playground: {
          package: {}
        }
      })
    ).toMatchObject({
      cwd: dir,
      examplesPattern: '**/__examples__/**/*.vue',
      playground: {
        package: {}
      }
    })
  })

  it('respects patterns', () => {
    const examplesPattern = '**/xxx/*.vue'
    expect(normalize({ examplesPattern })).toMatchObject({
      examplesPattern,
      cwd: process.cwd(),
      playground: false
    })
  })
})
