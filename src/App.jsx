import Home from './pages/Home'
import useSmoothScroll from './hooks/useSmoothScroll'
import CustomCursor from './components/CustomCursor'

function App() {
  useSmoothScroll()

  return (
    <>
      <CustomCursor />
      <div className="grain-overlay" />
      <Home />
    </>
  )
}

export default App
