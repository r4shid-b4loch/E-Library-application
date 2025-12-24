
export enum Category {
  CS = 'Computer Science',
  BUSINESS = 'Business',
  ISLAMIC = 'Islamic Studies',
  LITERATURE = 'Literature'
}

export interface Book {
  id: number;
  title: string;
  category: Category;
  author: string;
  description: string;
  pdfUrl: string;
}
