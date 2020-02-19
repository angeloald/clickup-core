jest.setTimeout(30000)

const { getTeam } = require("./")

describe("Valid tasks CRUD", () => {
  const apiKey = process.env.CLICKUP_API_KEY
  test("get team", () => {
    return getTeam(apiKey).then(res => expect(res.status).toEqual(200))
  })
})
