import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  searchterm='';
  constructor(private activatedRoute: ActivatedRoute, private router: Router){
    this.activatedRoute.params.subscribe((params) => {
      if (params.searchterm) {
        this.searchterm = params.searchterm;
      }
    });
  }

  ngOnInit(): void {}

  search(term: string): void {
    if (term.trim()) {
    this.router.navigate(['/ag', term.trim()]);
    }
    
  }

  }



