// @ts-check

import { normalizedClasses } from "./../"

describe("classes", () => {
  it("returns null for empty array", () => {
    expect(normalizedClasses([])).toBeNull()
  })

  it("returns null for array with empty string", () => {
    expect(normalizedClasses([""])).toBeNull()
  })

  it("returns null for array with null", () => {
    expect(normalizedClasses([null])).toBeNull()
  })
  it("returns null for array with undefined", () => {
    expect(normalizedClasses([undefined])).toBeNull()
  })
  it("returns null for array with just empty strings", () => {
    expect(normalizedClasses(["", "", ""])).toBeNull()
  })
  it("returns null for array with just nulls", () => {
    expect(normalizedClasses([null, null, null])).toBeNull()
  })
  it("returns null for array with just undefined", () => {
    expect(normalizedClasses([undefined, undefined, undefined])).toBeNull()
  })
  it("returns null for array with just undefined, empty strings or null", () => {
    expect(normalizedClasses([undefined, "", null, undefined, "", null])).toBeNull()
  })

  it("returns removes null", () => {
    expect(normalizedClasses([null, "hello"])).toEqual(["hello"])
  })

  it("returns removes undefined", () => {
    expect(normalizedClasses([undefined, "hello"])).toEqual(["hello"])
  })

  it("returns removes empty string", () => {
    expect(normalizedClasses(["", "hello"])).toEqual(["hello"])
  })

  it("removes undefined, empty strings and null from array", () => {
    expect(normalizedClasses([undefined, "", null, "hello", undefined, "", null])).toEqual(["hello"])
  })
})
