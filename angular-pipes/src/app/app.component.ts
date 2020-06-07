import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  p: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Promise resolved');
    }, 4000);
  });

  myDate: Observable<Date> = new Observable(obs => {
    setInterval(() => {
      obs.next(new Date);
    }, 1000);
  });

  myDate$: Observable<Date> = new Observable(obs => {
    setInterval(() => {
      obs.next(new Date);
    }, 1000);
  });

  date2: Date;

  e: number = Math.E;
  str = 'hello world!';
  date = new Date;
  float = 0.42;
  obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        d: 4
      }
    }
  };

  posts: Post[] = [
    {title: 'Beer', text: 'Best Beer in the world!'},
    {title: 'Bread', text: 'Eat this, stupid'},
    {title: 'JavaScript', text: 'Learn it, to have beer'}
  ];

  search;
  searchField = 'title';

  addPost() {
    this.posts.unshift({
      title: 'Angular 8',
      text: 'Vladilen course'
    });
  }

  ngOnInit() {
    this.myDate$.subscribe(date => {
      this.date2 = date;

    });
  }


}
