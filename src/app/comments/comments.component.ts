import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: any = [
    {
      user: "Ing. Juan Pablo",
      comment: "Excelente!",
      img: "jp.png",
    },
    {
      user: "Flor",
      comment: "Me gusta.",
      img: "flor.jpg",
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
