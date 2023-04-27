export interface Author {
    key: string;
    name: string;
}
export interface Book {
    key: string;
    title: string;
    author_key: string[];
    author_name: string[];
    first_publish_year: number;
    isbn: string[];
    has_fulltext: boolean;
    edition_count: number;
    edition_key: string[];
    publish_date: string[];
    publish_year: number[];
    publisher: string[];
    language: string[];
    lccn: string[];
    publish_place: string[];
    oclc: string[];
    contributor: string[];
    lcc: string[];
    ddc: string[];
    text: string[];
    ia: string[];
    author_alternative_name: string[];
}
export interface BookResponse {
    key: string;
    title: string;
    subject_type: string[];
    work_count: number;
    edition_count: number;
    works: Book[];
    ebooks: Book[];
    ebook_count_i: number;
    docs: Book[];
    numFound: number;
    
}
export interface Availability {
    status: string;
  available_to_browse: boolean;
  available_to_borrow: boolean;
  available_to_waitlist: boolean;
  is_printdisabled: boolean;
  is_readable: boolean;
  is_lendable: boolean;
  is_previewable: boolean;
  identifier: string;
  isbn: string;
  oclc: null;
  openlibrary_work: string;
  openlibrary_edition: string;
  last_loan_date: string;
  num_waitlist: string;
  last_waitlist_date: string;
  is_restricted: boolean;
  is_browseable: boolean;
  __src__: string;
}

