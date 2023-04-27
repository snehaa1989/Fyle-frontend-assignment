import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SubjectApiService } from '../backend/routes/subject-api.service';
import { Book } from '../backend/models/book-response.model';
import { Location } from '@angular/common';

@Component({
  selector: 'myfirstangular-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css'],
})
export class SubjectComponent implements OnInit {
  // @Input() loading: boolean = false;
 isLoading: boolean = false;

  subjectName: string = '';

  allBooks: Book[] = [];

  constructor(
    private route: ActivatedRoute,
    private subjectsService: SubjectApiService,
    private location: Location
  ) {}

  //implementation of back button using location.back()
  goBack() {
    this.location.back();
  }

  //getALLBooks() uses subjectService Services to get all the books from api
  getAllBooks() {
    this.subjectsService.getAllBooks(this.subjectName).subscribe((data) => {
      this.allBooks = data?.works;
      this.isLoading = true;
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.subjectName = params.get('name') || '';
      // this.isLoading = false;
      this.getAllBooks();
    });
  }
}