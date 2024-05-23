import Main from './pages/main/Main'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './App.css'

export const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Main />
        </QueryClientProvider>
    )
}

export default App
