import { postsMock } from '../data/posts.mock';
import {Component, Input, OnInit} from '@angular/core';
import { Post } from '../models/post.interface';
import {PostService} from "../service/post.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'ng-best-dad-jokes';
  posts: Post[] = postsMock
  @Input() isLoading = true;

  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.isLoading = false ;
  }

}
