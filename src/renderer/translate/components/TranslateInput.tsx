import { forwardRef, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { TranslateState } from '../../types/translate-state'
import type { TranslateModel } from '../../types/model'

const models: TranslateModel[] = [
  { id: 'openai', name: 'GPT' },
  { id: 'gemini', name: 'Gemini' },
  { id: 'openrouter', name: 'OpenRouter' },
]

interface TranslateInputProps {
  value: string
  onChange: (value: string) => void
  onKeyDown: (e: React.KeyboardEvent) => void
  state: TranslateState
  error?: string
  modelName: string
  selectedModelId: string
  onModelChange: (modelId: string) => void
  onOpenSettings: () => void
  refineEnglish: boolean
  onRefineToggle: () => void
  targetLanguage: string
}

// Format language code for display (max 3 characters, uppercase)
function formatLanguageCode(code: string): string {
  return code.substring(0, 3).toUpperCase()
}


const TranslateInput = forwardRef<HTMLTextAreaElement, TranslateInputProps>(
  ({ value, onChange, onKeyDown, state, error, modelName, selectedModelId, onModelChange, onOpenSettings, refineEnglish, onRefineToggle, targetLanguage }, ref) => {
    const { t } = useTranslation()
    const textareaRef = useRef<HTMLTextAreaElement | null>(null)
    const [showModelPicker, setShowModelPicker] = useState(false)
    const modelPickerRef = useRef<HTMLDivElement>(null)

    // Close model picker when clicking outside
    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (modelPickerRef.current && !modelPickerRef.current.contains(e.target as Node)) {
          setShowModelPicker(false)
        }
      }
      if (showModelPicker) {
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [showModelPicker])

    // Auto-resize textarea
    useEffect(() => {
      const textarea = textareaRef.current
      if (textarea) {
        textarea.style.height = 'auto'
        const newHeight = Math.min(textarea.scrollHeight, 150) // Max 150px
        textarea.style.height = `${newHeight}px`
      }
    }, [value])

    // Merge refs
    const setRefs = (el: HTMLTextAreaElement | null) => {
      textareaRef.current = el
      if (typeof ref === 'function') {
        ref(el)
      } else if (ref) {
        ref.current = el
      }
    }

    return (
      <div className="w-[360px] animate-fade-in">
        <div className="card p-2 shadow-2xl shadow-black/50">
          {/* Draggable header with model info */}
          <div className="flex items-center justify-between px-2 pb-1.5 border-b border-theme-border-primary/50 mb-2 draggable cursor-grab active:cursor-grabbing">
            <div className="relative flex items-center gap-1.5 text-[10px] text-theme-text-secondary" ref={modelPickerRef}>
              <button
                onClick={() => setShowModelPicker(!showModelPicker)}
                className="flex items-center gap-1 px-1.5 py-0.5 bg-accent-500/20 text-accent-400 rounded font-medium hover:bg-accent-500/30 transition-colors"
              >
                {modelName}
                <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Model picker dropdown */}
              {showModelPicker && (
                <div className="absolute top-full left-0 mt-1 py-1 bg-theme-bg-tertiary border border-theme-border-primary rounded-lg shadow-xl z-50 min-w-[100px] animate-fade-in">
                  {models.map((model) => (
                    <button
                      key={model.id}
                      onClick={() => {
                        onModelChange(model.id)
                        setShowModelPicker(false)
                      }}
                      className={`w-full px-3 py-1.5 text-left text-xs transition-colors flex items-center justify-between ${
                        selectedModelId === model.id
                          ? 'bg-accent-500/20 text-accent-400'
                          : 'text-theme-text-tertiary hover:bg-theme-bg-hover'
                      }`}
                    >
                      {model.name}
                      {selectedModelId === model.id && (
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}
              
              <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <span className="font-medium">{formatLanguageCode(targetLanguage)}</span>
              
              {/* Refine toggle */}
              <button
                onClick={onRefineToggle}
                title={refineEnglish ? t('translate.refineActive') : t('translate.refineInactive')}
                className={`ml-1 px-1.5 py-0.5 rounded text-[9px] font-medium transition-all flex items-center gap-0.5 ${
                  refineEnglish
                    ? 'bg-violet-500/30 text-violet-300 hover:bg-violet-500/40'
                    : 'bg-theme-bg-tertiary/50 text-theme-text-secondary hover:bg-theme-border-secondary/50'
                }`}
              >
                <span>✨</span>
                {refineEnglish && (
                  <svg className="w-2 h-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            </div>
            
            {/* Right side: status + settings */}
            <div className="flex items-center gap-2">
              {/* Status indicator */}
              {state === 'loading' && (
                <div className="w-3 h-3 border-[1.5px] border-accent-400 border-t-transparent rounded-full animate-spin" />
              )}
              {state === 'success' && (
                <svg className="w-3.5 h-3.5 text-green-400 animate-check" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              )}
              {state === 'error' && (
                <svg className="w-3.5 h-3.5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
              {state === 'idle' && value.trim() && (
                <kbd className="px-1.5 py-0.5 bg-theme-button-secondary-bg/80 rounded text-[9px] text-theme-text-secondary">↵</kbd>
              )}

              {/* Settings button */}
              <button
                onClick={onOpenSettings}
                className="p-1 text-theme-text-muted hover:text-theme-text-tertiary transition-colors rounded hover:bg-theme-bg-hover/50"
                title={t('translate.settings')}
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Textarea or Success message */}
          {state === 'success' ? (
            <div className="flex items-center justify-center gap-2 py-3 animate-fade-in">
              <svg className="w-5 h-5 text-green-400 animate-check" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-sm text-green-300 font-medium">{t('translate.success')}</p>
            </div>
          ) : (
            <textarea
              ref={setRefs}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder={t('translate.placeholder')}
              disabled={state === 'loading'}
              rows={1}
              className="w-full bg-transparent text-theme-text-primary text-sm px-2 py-1
                       placeholder-theme-text-placeholder outline-none disabled:opacity-50
                       resize-none overflow-y-auto leading-relaxed"
              style={{ maxHeight: '150px', minHeight: '24px' }}
              autoFocus
            />
          )}
        </div>

        {/* Error message */}
        {state === 'error' && error && (
          <div className="mt-2 animate-fade-in">
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-2 flex items-start gap-2">
              <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-red-300 leading-relaxed">{error}</p>
                {error.includes(t('translate.apiKeyError')) && (
                  <button 
                    onClick={onOpenSettings}
                    className="mt-1.5 text-[10px] text-red-400 hover:text-red-300 underline"
                  >
                    {t('translate.openSettings')}
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
)

TranslateInput.displayName = 'TranslateInput'

export default TranslateInput
