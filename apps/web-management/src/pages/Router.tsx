import { Button } from '@pms-microservices/ui'
import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'

const Router: FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Button></Button>} />
        </Routes>
    )
}

export default Router
