interface CodeBlockProps {
  children: React.ReactNode
  language?: string
}

export default function CodeBlock({ children, language }: CodeBlockProps) {
  return (
    <div className="relative my-6">
      {language && (
        <div className="absolute top-2 right-2 text-xs text-theme-text-tertiary font-mono">
          {language}
        </div>
      )}
      <pre className="bg-theme-bg-tertiary border border-theme-border-primary rounded-lg p-4 overflow-x-auto">
        <code className="text-sm font-mono text-theme-text-primary">{children}</code>
      </pre>
    </div>
  )
}

