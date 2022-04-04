import 'reflect-metadata'

import { app } from './app'
import { Database } from './database/database'

const port = 5001 || process.env.PORT

Database.initialize()
  .then(async () => {
    try {
      app.listen(port, () => console.log(`Server running on port ${port}`))
    } catch (error) {
      console.error(`Error occoured: ${error.message}`)
    }
  })
  .catch(error => {
    console.error(`Error occoured: ${error.message}`)
  })
