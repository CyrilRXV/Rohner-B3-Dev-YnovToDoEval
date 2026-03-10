export interface Category {
  id: number;
  name: string;
  color: string;
}

export const categories: Category[] = [
  { id: 1, name: 'Projet', color: '#cfd3ff' },
  { id: 2, name: 'Travail', color: '#c8ece4' },
  { id: 3, name: 'Journalier', color: '#d57bff' },
  { id: 4, name: 'Autres', color: '#f1dcc3' },
];
