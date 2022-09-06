import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  courses: string[] = [
    'Algorithms',
    'Graph Theory', 
    'Database Management',
    'Data Structures', 
    'Computing Architecture',
    'Computing Theory',
    'Combinatorics',
    'Software Development',
    'Software Enigneering',
    'Systems Programming',
    'Computing Networks',
    'Operating Systems',
    'Numerical Analysis',
    'Sequences and Series',
    'Probability',
    'Linear Algebra',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
