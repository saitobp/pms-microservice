import 'reflect-metadata'

import { app } from './app'
import { db } from './database'

const port = process.env.PORT || 5001

db.initialize()
  .then(async () => {
    console.log('Connected to db')

    try {
      app.listen(port, () => console.log(`Server running on port ${port}`))
    } catch (error: any) {
      console.error(`Error running server: ${error}`)
    }
  })
  .catch((error: any) => {
    console.error(`Error initializing database: ${error}`)
  })
