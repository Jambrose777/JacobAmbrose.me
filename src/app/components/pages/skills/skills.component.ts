import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  bigSkills = [
    { skill: 'Angular', proficency: 3 },
    { skill: 'React', proficency: 3 },
    { skill: 'Node JS', proficency: 3 },
    { skill: 'Node Express', proficency: 3 },
    { skill: 'Swagger', proficency: 3 },
    { skill: 'D3', proficency: 3 },
    { skill: 'Angular Forms', proficency: 3 },

    { skill: 'Amazon Web Services', proficency: 2 },
    { skill: 'Google Anayltics', proficency: 2 },
    { skill: 'Java Spring Boot', proficency: 2 },
    { skill: 'Angular Animations', proficency: 2 },
    { skill: 'Ruby on Rails', proficency: 2 },

    { skill: 'Docker', proficency: 1},
    { skill: 'ASP.NET', proficency: 1},
    { skill: 'Nginx', proficency: 1},
    { skill: 'Apache', proficency: 1},
    { skill: 'Adobe Analytics', proficency: 1},
  ];
  languages = [
    'Javascript',
    'Java',
    'Typescript',
    'HTML',
    'SCSS',
    'C#',
    'C++',
    'Ruby',
    'Visual Basics',
    'PHP',
    'Python',
  ];
  databases = [
    'MySQL',
    'MSSQL',
    'MongoDB',
    'DynamoDB',
    'Reddis',
    'Teradata',
    'NgRx',
    'AS400',
    'Azure SQL',
  ];
  applications = [
    { app: 'Contentful', class: 'dark-grey' },
    { app: 'PhpMyAdmin', class: 'aqua' },
    { app: 'GitLab', class: 'dark-blue' },
    { app: 'Kubernetes', class: 'dark-blue' },
    { app: 'GitHub Enterprises', class: 'aqua' },
    { app: 'Google Sheets', class: 'dark-grey' },
    { app: 'Alphavision', class: 'dark-grey' },
    { app: 'Mira', class: 'dark-blue' },
    { app: 'Azure DevOps', class: 'aqua' },
    { app: 'Font Awesome', class: 'dark-grey' },
    { app: 'GSuite', class: 'dark-blue' },
    { app: 'New Relic', class: 'dark-grey' },
    { app: 'OpenShift', class: 'aqua' },
    { app: 'Rally', class: 'dark-grey' },
    { app: 'Google Domains', class: 'aqua' },
    { app: 'Jira', class: 'dark-blue' },
    { app: 'Terraform', class: 'dark-blue' },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
