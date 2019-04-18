import { PostForm } from "../models/post-form-model";
import { Subject } from "rxjs";

export class PostService {
    date: Date = new Date();
    postSubject = new Subject<any[]>();
    private posts = [
        {
          title:  'Premier poste',
          content: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          loveIts: 0,
          created_at: this.date
        },
        {
          title: 'Deuxième poste',
          content: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
          loveIts: 0,
          created_at: this.date
        },
        {
          title: 'Dernier poste',
          content: 'ccccccccccccccccccccccccccccccccccccccccccccccccc',
          loveIts: 0,
          created_at: this.date
        }
      ];
    
    
    emitPostSubject() {
      this.postSubject.next(this.posts.slice());
    }
    deletePost(i: number){
      this.posts.splice(i,1);
      this.emitPostSubject();
    }
    createPost(newPost: PostForm){
      var date = new Date();
      this.posts.push({
        title: newPost.postTitle,
        content: newPost.postContent,
        loveIts: 0,
        created_at: date
      });
      this.emitPostSubject();
    }
    LikePost(i: number){
      this.posts[i].loveIts++;
      this.emitPostSubject();
    }
    HatePost(i: number){
      this.posts[i].loveIts--;
      this.emitPostSubject();
    }
}