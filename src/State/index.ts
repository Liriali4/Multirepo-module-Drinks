import { create } from 'zustand'

type InformationOfModule = {
  title: string
}

export const useInformationOfModuleStore = create<InformationOfModule>((set) => ({
  title: 'Drinks',
}));

