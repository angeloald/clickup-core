const { get } = require("../../helpers/axiosFacade")

const getTeam = apiKey => {
  const url = "https://api.clickup.com/api/v2/team"
  const headers = {
    "content-type": "application/json",
    authorization: apiKey
  }
  return get(url, headers)
}

module.exports = {
  getTeam
}
