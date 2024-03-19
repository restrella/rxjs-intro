import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Subscribable, Subscription, forkJoin } from 'rxjs';
import { User } from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, OnDestroy {
  sub: Subscription | undefined;

  myArray: any[] = new Array(10);
  order: number = 1;
  sub2: Subscription | undefined;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // this.userService.getUsers().subscribe((d) => {
    //   console.log(d);
    //   this.userService.getBooks().subscribe((data) => console.log(data));
    // });
    // this.sub = this.userService.getUsers().subscribe()

    // forkJoin([
    //   this.userService.getUsers(),
    //   this.userService.getBooks(),
    // ]).subscribe((data) => {
    //   console.log(data);
    // });

    // console.log('subject');
    // this.userService.subject.next(100);
    // this.userService.subject.subscribe((d) => console.log(d)); // -subscription
    // this.userService.subject.next(5);
    // this.userService.subject.next(100);

    // console.log('behavior');
    // this.userService.behavior.next('heather');
    // this.userService.behavior.subscribe((d) => console.log(d));
    // this.userService.behavior.next('jose');
    // this.userService.behavior.subscribe((d) => console.log(d));
    // this.userService.behavior.next('joy');

    this.userService.replay.next(`order ${this.order++}`);
    this.userService.replay.next(`order ${this.order++}`);
    this.userService.replay.next(`order ${this.order++}`);
    this.userService.replay.next(`order ${this.order++}`);
    this.userService.replay.next(`order ${this.order++}`);
    this.userService.replay.next(`order ${this.order++}`);
    this.userService.replay.next(`order ${this.order++}`);
    this.userService.replay.next(`order ${this.order++}`);

    // this.userService.replay.subscribe((d) => console.log(d));
  }

  addOrder() {
    this.userService.replay.next(`order ${this.order++}`);
  }

  callReplay() {
    this.sub2 = this.userService.replay.subscribe((data) => console.log(data));
    this.sub2.unsubscribe();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.sub2?.unsubscribe();
  }

  createUser() {
    let user: User = {
      name: 'Jack Rambo',
      age: 2,
      active: true,
    };
    this.userService.createUser(user).subscribe((data) => console.log(data));
  }
  updateUser() {
    let user: User = {
      id: 2,
      name: 'Rick Again',
      age: 25,
      active: true,
    };
    this.userService.updateUser(user).subscribe((data) => console.log(data));
  }
  deleteUser() {
    this.userService.deleteUser(2).subscribe((data) => console.log(data));
  }
}
