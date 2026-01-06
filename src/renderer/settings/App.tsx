import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { Page } from '../types/page'
import type { AppConfig } from '../types/app-config'
import './types/window.d'
import Sidebar from './components/Sidebar'
import HowToUse from './pages/HowToUse'
import AIModels from './pages/AIModels'
import APIKeys from './pages/APIKeys'
import Shortcuts from './pages/Shortcuts'
import TranslationSettings from './pages/TranslationSettings'
import Prompts from './pages/Prompts'
import Notifications from './pages/Notifications'

// Re-export for backward compatibility
export type { Page } from '../types/page'
export type { AppConfig } from '../types/app-config'
export type { OpenRouterModel } from '../types/openrouter-model'

function App() {
  const { t } = useTranslation()
  const [currentPage, setCurrentPage] = useState<Page>('howto')

  const renderPage = () => {
    switch (currentPage) {
      case 'howto':
        return <HowToUse />
      case 'models':
        return <AIModels />
      case 'apikeys':
        return <APIKeys />
      case 'shortcuts':
        return <Shortcuts />
      case 'translation':
        return <TranslationSettings />
      case 'prompts':
        return <Prompts />
      case 'notifications':
        return <Notifications />
      default:
        return <HowToUse />
    }
  }

  return (
    <div className="h-screen flex flex-col bg-theme-bg-primary">
      {/* macOS Traffic Light Buttons Area */}
      <div className="h-12 flex-shrink-0 flex items-center bg-theme-bg-secondary border-b border-theme-border-primary draggable">
        <div className="w-20" /> {/* Space for traffic light buttons */}
        <div className="flex-1 flex items-center justify-center">
          <span className="text-sm text-theme-text-secondary font-medium">{t('settings.title')}</span>
        </div>
        <div className="w-20" /> {/* Balance */}
      </div>
      
      <div className="flex-1 flex overflow-hidden">
        <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
        <main className="flex-1 overflow-y-auto">
          <div className="p-8">
            {renderPage()}
          </div>
        </main>
      </div>
    </div>
  )
}

export default App

