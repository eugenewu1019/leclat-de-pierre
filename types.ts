export type Language = 'zh' | 'en';

export interface ContentText {
  zh: string;
  en: string;
}

export interface NavItem {
  id: string;
  label: ContentText;
}

export interface StructureLayer {
  name: ContentText;
  thickness: string; // e.g., "4mm"
  texture: ContentText; // e.g., "Crispy", "Velvety"
  temperature: string; // e.g., "4°C"
}

export interface FlavorProfile {
  sweetness: number; // 0-100
  acidity: number;
  bitterness: number;
  texture: number; // Complexity
}

export interface ConstructionStep {
  step: string; // "01", "02"
  action: ContentText;
  time?: string; // e.g. "48h"
  details: ContentText;
}

export interface DessertItem {
  id: string;
  name: ContentText;
  description: ContentText;
  ingredients: ContentText;
  imageUrl: string;
  blueprintUrl?: string; // New: for the sketch version
  year: string; // Like an art piece year
  price: number;

  // Detailed Structure Data
  structure: {
    layers: StructureLayer[];
    flavor: FlavorProfile;
    construction: ConstructionStep[];
    mechanics: ContentText; // The "Architectural Logic"
  };
}

export interface ChefProfile {
  name: ContentText;
  title: ContentText;
  bio: ContentText[];
  philosophy: ContentText;
}
