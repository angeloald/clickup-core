# Clickup-Core

A wrapper for the ClickUp API.

## Features

- CRUD operations for ClickUp tasks

## Installing

```
npm install clickup-core
```

## Example

```javascript
const clickupCore = require("clilckup")
const apiKey = process.env.CLICKUP_API_KEY
const list = process.env.CLICKUP_LIST

clickupCore
  .createTask(apiKey, list, data)
  .then(res => console.log(`Task ${res.data.id} created`))
  .catch(err => console.log(`An error occured: ${err.response.data}`))

clickupCore
  .getTask(apiKey, suiteVars["taskId"])
  .then(res => console.log(`Task ${res.data.id} created`))
  .catch(err => console.log(`An error occured: ${err.response.data}`))
```
