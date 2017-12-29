import {Component, OnInit} from '@angular/core';
import {PostService} from "./post.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html'
})
export class PostComponent implements OnInit {

  private postA: any;
  private postB: any;
  private posts: any[];

  constructor(private postService: PostService) {
  }

  ngOnInit() {

    this.postService.getPost(1).subscribe((response) => {
      this.postA = response;
    });

    this.postService.getPost(999).subscribe(
      (response) => {
        this.postB = response;
      }, (error) => {

        if (error.status === 404) {
          console.log('Some special case');
        }
        // pass error that is not special case, then GlobalHandler with catch this
        else throw error;
      });

    this.postService.getPosts().subscribe((response) => {
      this.posts = response;
    });

  }

}
