import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { BookResponse } from '../models/book-response.model';


@Injectable({
  providedIn: 'root'
})
export class SubjectApiService {

  constructor(private apiService: ApiService) { }
  getAllBooks(subjectName: string): Observable<BookResponse> {
    return this.apiService.get<BookResponse>(`/subjects/${subjectName.toLowerCase().split(' ').join('_')}.json?limit=10`);
  }
  getSearchResults(subjectName: string, page:Number): Observable<BookResponse> {
    return this.apiService.get<BookResponse>(`/search.json?q=${subjectName.toLowerCase().split(' ').join('_')}&page=${page}`);
  }

}
