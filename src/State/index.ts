import { create } from 'zustand'

type CategoriasState = {
  categorias: string[];
  selectedCategoria: string;
  setSelectedCategoria: (selectedCategoria: string) => void;
};

type InformationOfModule = {
  title: string
}

export const useInformationOfModuleStore = create<InformationOfModule>((set) => ({
  title: 'Drinks',
}));

export const useCategoriasStore = create<CategoriasState>((set) => ({
  categorias: [],
  selectedCategoria: '',
  setSelectedCategoria: (selectedCategoria) =>
    set((state) => ({ ...state, selectedCategoria })),
}));

