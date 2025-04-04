import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import RoutesApp from './routes/routes'
import Footer from './components/Footer'
import Header from './components/Header'
function App() {
    return (
        <Router>
            <main className="layout">
                <div className="mains">
                    <Header />
                    <RoutesApp />
                </div>
                <Footer />
            </main>
        </Router>
    )
}

export default App
