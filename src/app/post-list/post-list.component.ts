import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts:any[];
  postsSubscription: Subscription;

  constructor(private postService: PostService){
  }
  ngOnInit() {
    this.postsSubscription = this.postService.postSubject.subscribe(
      (posts:any[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPostSubject();
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
