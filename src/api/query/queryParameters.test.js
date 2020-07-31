const QueryParameters = require('./queryParameters')

describe('query parameters', () => {
  describe('constructor', () => {
    test('filters out unknown parameters', () => {
      const parameters = new QueryParameters({
        unknown: 1
      })

      expect(parameters).toEqual({})
    })

    test('filters out empty parameter values', () => {
      const parameters = new QueryParameters({
        producttype: ''
      })

      expect(parameters).toEqual({})
    })

    test('keeps known parameters', () => {
      const parameters = new QueryParameters({
        producttype: 'testProductType'
      })

      expect(parameters).toEqual({ producttype: 'testProductType' })
    })
  })
})