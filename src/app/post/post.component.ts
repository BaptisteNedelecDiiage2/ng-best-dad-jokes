import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { postsMock } from '../data/posts.mock';
import { Post } from '../models/post.interface';
import {PostService} from "../service/post.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  posts: Post[] = postsMock
  post?: Post;
  @Input() isLoading = true;
  constructor(private route: ActivatedRoute,private postService:PostService) {}

  ngOnInit(): void {
    this.isLoading = false;
    this.post = postsMock.find((post) => post.id === +this.route.snapshot.params['id']);
  }
}
