// Model type for settings pages (AIModels, ModelCard)
export interface Model {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

// Model type for translate input component (simpler version)
export interface TranslateModel {
  id: string;
  name: string;
}

