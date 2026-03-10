export type Priority = 'low' | 'medium' | 'high';

export interface Task {
  id: number | undefined;
  name: string;
  date: string;
  time: string;
  priority: Priority;
  categoryId: number | undefined;
  description: string | undefined;
  done: boolean;
}
