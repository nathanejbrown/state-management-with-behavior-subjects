import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatFactsHttpServiceService } from './cat-facts.http-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  facts: string[] = []

  constructor(private catFactsService: CatFactsHttpServiceService) {}

  ngOnInit(): void {
    this.catFactsService.catFacts$.subscribe(facts => {
      if (facts) {
        let allFacts: string[] = []
        facts.forEach((fact: {fact: string}) => {
          allFacts.push(fact.fact)
          
        })
        this.facts = allFacts;
      }
    })
  }

  title = 'state-management-with-behavior-subjects';
}
