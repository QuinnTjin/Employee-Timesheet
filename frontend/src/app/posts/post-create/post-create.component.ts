import { Component } from '@angular/core'
import { NgForm } from '@angular/forms';
import { PostsService } from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl:  './post-create.component.html',
  styleUrls: ['./post-create.component.css']
  })
export class PostCreateCComponent {
  enteredTitle : string = "";
  enteredContent : string = "";

  constructor(public postsService: PostsService) {}
  onAddPost(form : NgForm){
    if (form.invalid){
      return;
    }
    this.postsService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }

}
