import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  params : any = {};
  
  constructor(private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    console.log(this.route.snapshot.queryParams )
    this.params = {
      title: this.route.snapshot.queryParams['title'],
      message: this.route.snapshot.queryParams['message']
    }
  }

}
