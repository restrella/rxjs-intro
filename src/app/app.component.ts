import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Subscription,
  concatMap,
  filter,
  find,
  forkJoin,
  fromEvent,
  interval,
  map,
  of,
  skip,
  skipUntil,
  skipWhile,
  switchMap,
  take,
  takeUntil,
  tap,
} from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'rxjs-intro';

  sub: Subscription | undefined;

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    // of(1, 2, 3, 4, 5, 6).subscribe((x) => console.log(x));

    // this.sub = of(1, 2, 3, 4, 5, 6)
    //   .pipe(find((x) => x > 2))
    //   .subscribe((data) => console.log(data));

    // this.sub = of(1, 2, 3, 4, 5, 6)
    //   .pipe(filter((x) => x > 2))
    //   .subscribe((data) => console.log(data));

    // this.sub = of(1, 2, 3, 4, 5, 6)
    //   .pipe(
    //     map((x) => {
    //       let d = x * 10;
    //       d += 5;
    //       return d;
    //     })
    //   )
    //   .subscribe((data) => console.log(data));

    // this.sub = of(1, 2, 3, 4, 5, 6)
    //   .pipe(tap((x) => console.log(x * 10)))
    //   .subscribe((data) => console.log(data));

    // this.sub = of(1, 2, 3, 4, 5, 6)
    //   .pipe(
    //     filter((x) => x > 3),
    //     map((x) => x * 10),
    //     take(5)
    //   )
    //   .subscribe((data) => console.log(data));

    // const frv = fromEvent(document, 'click');
    // this.sub = interval(1000)
    //   .pipe(takeUntil(frv))
    //   .subscribe((data) => console.log(data));

    // this.sub = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    //   .pipe(skip(5))
    //   .subscribe((data) => console.log(data));

    // this.sub = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    //   .pipe(skipWhile((x) => x <= 2))
    //   .subscribe((data) => console.log(data));

    // const frv = fromEvent(document, 'click');
    // this.sub = interval(1000)
    //   .pipe(skipUntil(frv))
    //   .subscribe((data) => console.log(data));

    const obs1 = of(1, 2, 3, 4, 5);
    const obs2 = of(6, 7, 8, 9, 10);
    const obs3 = of(11, 12, 13, 14, 15);

    // obs1
    //   .pipe(concatMap((x) => obs2.pipe(map((b) => x * b))))
    //   .subscribe((data) => console.log(data));

    // forkJoin([obs1, obs2, obs3]).subscribe((data) => console.log(data));
    // this.userService.getUsers().subscribe((data) => console.log(data));

    // interval(1000)
    //   .pipe(switchMap((data) => of(1, 2, 3, 4, 5, 6).pipe(tap((x) => x))))
    //   .subscribe((output) => console.log(output));
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
