import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Installation from './pages/Installation'
import TranslateWindow from './pages/TranslateWindow'
import HowToUse from './pages/Settings/HowToUse'
import AIModels from './pages/Settings/AIModels'
import APIKeys from './pages/Settings/APIKeys'
import Translation from './pages/Settings/Translation'
import Shortcuts from './pages/Settings/Shortcuts'
import Prompts from './pages/Settings/Prompts'
import Notifications from './pages/Settings/Notifications'

function App() {
  const basename = import.meta.env.PROD ? '/minimal-translate' : '/'
  
  return (
    <BrowserRouter basename={basename}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/translate-window" element={<TranslateWindow />} />
          <Route path="/settings/how-to-use" element={<HowToUse />} />
          <Route path="/settings/ai-models" element={<AIModels />} />
          <Route path="/settings/api-keys" element={<APIKeys />} />
          <Route path="/settings/translation" element={<Translation />} />
          <Route path="/settings/shortcuts" element={<Shortcuts />} />
          <Route path="/settings/prompts" element={<Prompts />} />
          <Route path="/settings/notifications" element={<Notifications />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App

