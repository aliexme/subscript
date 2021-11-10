const { startCli } = require('@tramvai/test-integration')

describe('subscript', () => {
  let app

  beforeAll(async () => {
    app = await startCli('subscript')
  }, 80000)

  afterAll(() => {
    return app.close()
  })

  it('request to main page return status 200', async () => {
    return app.request('/').expect(200)
  })
})
