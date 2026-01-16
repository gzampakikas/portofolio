import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import Content from './components/content'

function App() {
  return (
    <div className="flex flex-col min-h-screen m-0">
      <Header />
      
      {/* Main Content */}
      <Content />
      <Footer />
    </div>
  )
}

export default App
