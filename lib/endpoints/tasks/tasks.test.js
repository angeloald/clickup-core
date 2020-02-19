jest.setTimeout(30000)
const { createTask, getTask, updateTask, deleteTask } = require("./")

describe("Valid tasks CRUD", () => {
  let suiteVars = {}
  let apiKey = process.env.CLICKUP_API_KEY
  let list = process.env.CLICKUP_LIST
  data = {
    name: "Task Created From Node"
  }

  dataUpdate = {
    name: "Task Updated From Node"
  }

  test("create task", () => {
    return createTask(apiKey, list, data).then(res => {
      suiteVars["taskId"] = res.data.id
      return expect(res.status).toEqual(200)
    })
  })

  test("read task", () => {
    return getTask(apiKey, suiteVars["taskId"]).then(res =>
      expect(res.status).toEqual(200)
    )
  })

  test("update task", () => {
    return updateTask(apiKey, suiteVars["taskId"], dataUpdate).then(res =>
      expect(res.status).toEqual(200)
    )
  })

  test("delete task", () => {
    return deleteTask(apiKey, suiteVars["taskId"]).then(res =>
      expect(res.status).toEqual(200)
    )
  })
})
