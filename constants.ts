
import { Book, Category } from './types';

// Placeholder PDF link
const DUMMY_PDF = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';

export const BOOKS: Book[] = [
  {
    id: 1,
    title: 'Modern Web Development',
    category: Category.CS,
    author: 'John Doe',
    description: 'A beginner guide to learning HTML, CSS, and JS.',
    pdfUrl: DUMMY_PDF
  },
  {
    id: 2,
    title: 'Principles of Management',
    category: Category.BUSINESS,
    author: 'Jane Smith',
    description: 'Learn the core values of business management.',
    pdfUrl: DUMMY_PDF
  },
  {
    id: 3,
    title: 'History of Islamic Art',
    category: Category.ISLAMIC,
    author: 'Ahmed Ali',
    description: 'Exploring the rich culture of Islamic architecture.',
    pdfUrl: DUMMY_PDF
  },
  {
    id: 4,
    title: 'The Great Gatsby',
    category: Category.LITERATURE,
    author: 'F. Scott Fitzgerald',
    description: 'A classic novel set in the Roaring Twenties, exploring themes of wealth and love.',
    pdfUrl: DUMMY_PDF
  },
  {
    id: 5,
    title: 'Data Structures & Algorithms',
    category: Category.CS,
    author: 'Robert Martin',
    description: 'Master the foundations of computer science and logic.',
    pdfUrl: DUMMY_PDF
  },
  {
    id: 6,
    title: 'Global Marketing',
    category: Category.BUSINESS,
    author: 'Sarah Johnson',
    description: 'How to market products across international borders.',
    pdfUrl: DUMMY_PDF
  },
  {
    id: 7,
    title: 'Don Quixote',
    category: Category.LITERATURE,
    author: 'Miguel de Cervantes',
    description: 'The adventures of a noble who reads too many chivalric romances.',
    pdfUrl: DUMMY_PDF
  },
  {
    id: 8,
    title: 'The Odyssey',
    category: Category.LITERATURE,
    author: 'Homer',
    description: 'An ancient Greek epic poem following Odysseus on his journey home.',
    pdfUrl: DUMMY_PDF
  },
  {
    id: 9,
    title: 'Hamlet',
    category: Category.LITERATURE,
    author: 'William Shakespeare',
    description: 'The tragic story of the Prince of Denmark seeking revenge.',
    pdfUrl: DUMMY_PDF
  },
  {
    id: 10,
    title: 'Pride and Prejudice',
    category: Category.LITERATURE,
    author: 'Jane Austen',
    description: 'A romantic novel of manners following Elizabeth Bennet.',
    pdfUrl: DUMMY_PDF
  },
  {
    id: 11,
    title: 'Wuthering Heights',
    category: Category.LITERATURE,
    author: 'Emily Brontë',
    description: 'A dark tale of intense love and revenge on the Yorkshire moors.',
    pdfUrl: DUMMY_PDF
  }
];

export const STORAGE_KEY = 'elibrary_username';
