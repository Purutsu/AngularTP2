import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostForm } from '../models/post-form-model';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.postForm = this.formBuilder.group({
      postTitle:['',Validators.required],
      postContent:['',Validators.required]
    })
  }

  onSubmitForm(){
    const formValue = this.postForm.value;
    const newPost = new PostForm(
      formValue['postTitle'],
      formValue['postContent']
    );
    this.postService.createPost(newPost);
    this.router.navigate(['/posts']);
  }
}
