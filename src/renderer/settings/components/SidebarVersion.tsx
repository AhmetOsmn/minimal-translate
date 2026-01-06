interface SidebarVersionProps {
  version: string;
}

export function SidebarVersion({ version }: SidebarVersionProps) {
  return (
    <div className="p-4 border-t border-theme-border-primary">
      <p className="text-xs text-theme-text-muted text-center">
        {version ? `v${version}` : "v1.0.0"}
      </p>
    </div>
  );
}

