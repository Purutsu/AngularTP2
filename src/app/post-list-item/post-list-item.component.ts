import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() titrePost: string;
  @Input() contentPost: string;
  @Input() likePost: number;
  @Input() datePost: Date;
  @Input() index: number;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  Like()
  {
    this.postService.LikePost(this.index);
  }
  Hate()
  {
    this.postService.HatePost(this.index);
  }
  DeletePost()
  {
    this.postService.deletePost(this.index);
  }
}
