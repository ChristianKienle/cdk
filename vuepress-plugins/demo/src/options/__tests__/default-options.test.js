// @ts-check
const {
  exampleFilenameBaseFromPath,
  packageNameFromPath,
  collectionPathComponentsFromPath,
  exampleNameFromPath
} = require('./../default')

describe('default options', () => {
  describe('exampleFilenameBaseFromPath', () => {
    it('works', () => {
      expect(exampleFilenameBaseFromPath('/home/packages/button/__examples__/hello.vue')).toEqual(
        'hello.vue'
      )
    })
  })

  describe('exampleNameFromPath', () => {
    it('works', () => {
      expect(exampleNameFromPath('/home/packages/button/__examples__/hello.vue')).toEqual('hello')
    })
  })

  describe('packageNameFromPath', () => {
    it('returns correct name for simple valid path', () => {
      expect(packageNameFromPath('/home/packages/button/__examples__/hello.vue')).toEqual('button')
    })

    it('returns undefined for path without __examples__ dir', () => {
      expect(packageNameFromPath('/home/packages/button/hello.vue')).toBeUndefined()
    })

    it('returns undefined path with __examples__ at the beginning', () => {
      expect(packageNameFromPath('__examples__/packages/button/hello.vue')).toBeUndefined()
    })

    it('returns correct name for valid path with nested collection', () => {
      expect(packageNameFromPath('/home/packages/button/__examples__/themes/clean.vue')).toEqual(
        'button'
      )
    })
  })

  describe('collectionPathComponentsFromPath', () => {
    it('returns empty array for example that is directly inside __examples__ directory', () => {
      expect(
        collectionPathComponentsFromPath('/home/packages/button/__examples__/hello.vue')
      ).toEqual([])
    })

    it('returns undefined for invalid path', () => {
      expect(collectionPathComponentsFromPath('/home/packages/button/hello.vue')).toBeUndefined()
    })

    it('returns valid path for simple valid path', () => {
      expect(
        collectionPathComponentsFromPath('/home/packages/button/__examples__/themes/clean.vue')
      ).toEqual(['themes'])
    })

    it('returns valid path for nested collection', () => {
      expect(
        collectionPathComponentsFromPath(
          '/home/packages/button/__examples__/themes/light/clean.vue'
        )
      ).toEqual(['themes', 'light'])
    })
  })
})
