const { get, post, put, del } = require("../../helpers/axiosFacade")

const createTask = (apiKey, listId, data) => {
  const url = `https://api.clickup.com/api/v2/list/${listId}/task`
  const headers = {
    "content-type": "application/json",
    authorization: apiKey
  }
  return post(url, headers, data)
}

const getTask = (apiKey, taskId) => {
  const url = `https://api.clickup.com/api/v2/task/${taskId}`
  const headers = {
    "content-type": "application/json",
    authorization: apiKey
  }
  return get(url, headers)
}

const updateTask = (apiKey, taskId, data) => {
  const url = `https://api.clickup.com/api/v2/task/${taskId}`
  const headers = {
    "content-type": "application/json",
    authorization: apiKey
  }
  return put(url, headers, data)
}

const deleteTask = (apiKey, taskId) => {
  const url = `https://api.clickup.com/api/v2/task/${taskId}`
  const headers = {
    "content-type": "application/json",
    authorization: apiKey
  }
  return del(url, headers)
}

module.exports = {
  createTask,
  getTask,
  updateTask,
  deleteTask
}
