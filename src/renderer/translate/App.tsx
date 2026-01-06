import { useState, useEffect, useRef, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import type { TranslateState } from '../types/translate-state'
import TranslateInput from './components/TranslateInput'
import './types/window.d'

const modelNames: Record<string, string> = {
  openai: 'GPT',
  gemini: 'Gemini',
  openrouter: 'OpenRouter',
}

function App() {
  const { t } = useTranslation()
  const [text, setText] = useState('')
  const [state, setState] = useState<TranslateState>('idle')
  const [error, setError] = useState('')
  const [selectedModel, setSelectedModel] = useState('openai')
  const [refineEnglish, setRefineEnglish] = useState(false)
  const [targetLanguage, setTargetLanguage] = useState('en')
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    // Strong focus function - tries multiple times
    const forceFocus = () => {
      if (inputRef.current) {
        inputRef.current.focus()
        // Retry if focus was not acquired
        if (document.activeElement !== inputRef.current) {
          requestAnimationFrame(() => {
            inputRef.current?.focus()
          })
        }
      }
    }

    // Focus input when window opens
    forceFocus()
    // Try a few times on initial load
    setTimeout(forceFocus, 50)
    setTimeout(forceFocus, 150)

    // Get selected model
    window.electronAPI?.getSelectedModel().then((model) => {
      if (model) setSelectedModel(model)
    })

    // Get refine english setting
    window.electronAPI?.getRefineEnglish().then((value) => {
      setRefineEnglish(value)
    })

    // Get target language
    window.electronAPI?.getTargetLanguage().then((language) => {
      if (language) setTargetLanguage(language)
    })

    // Listen for focus event from main process
    window.electronAPI?.onFocusInput(() => {
      forceFocus()
      // Retry for extra reliability
      setTimeout(forceFocus, 50)
    })

    // Handle escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        window.electronAPI?.closeWindow()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleTranslate = useCallback(async () => {
    if (!text.trim() || state === 'loading') return

    setState('loading')
    setError('')

    try {
      const result = await window.electronAPI.translate(text.trim())
      
      if (result.success && result.translation) {
        await window.electronAPI.copyToClipboard(result.translation)
        setState('success')
        
        // Close window automatically after showing success message
        setTimeout(() => {
          window.electronAPI.closeWindow()
        }, 600)
      } else {
        if (result.errorCode) {
          setError(t(result.errorCode, result.errorParams))
        } else {
          setError(result.error || t('translate.error'))
        }
        setState('error')
      }
    } catch (err) {
      setError(t('translate.connectionError'))
      setState('error')
    }
  }, [text, state, t])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleTranslate()
    }
  }

  const handleOpenSettings = () => {
    window.electronAPI?.openSettings()
  }

  const handleModelChange = async (modelId: string) => {
    setSelectedModel(modelId)
    await window.electronAPI?.setSelectedModel(modelId)
  }

  const handleRefineToggle = async () => {
    const newValue = !refineEnglish
    setRefineEnglish(newValue)
    await window.electronAPI?.setRefineEnglish(newValue)
  }

  return (
    <div className="w-full h-screen flex items-center justify-center p-2">
      <TranslateInput
        ref={inputRef}
        value={text}
        onChange={setText}
        onKeyDown={handleKeyDown}
        state={state}
        error={error}
        modelName={modelNames[selectedModel] || selectedModel}
        selectedModelId={selectedModel}
        onModelChange={handleModelChange}
        onOpenSettings={handleOpenSettings}
        refineEnglish={refineEnglish}
        onRefineToggle={handleRefineToggle}
        targetLanguage={targetLanguage}
      />
    </div>
  )
}

export default App

