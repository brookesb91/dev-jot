import { Component, OnInit } from '@angular/core';


interface Editor {
  title: string;
  type: string;
  placeholder: string;
}


const EDITORS: Editor[] = [
  { title: 'HTML', type: 'html', placeholder: `<!-- HTML Here -->` },
  { title: 'CSS', type: 'css', placeholder: `/* CSS Here */` },
  { title: 'JavaScript', type: 'js', placeholder: `// JavaScript Here` }
];

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  editors = EDITORS;

  constructor() { }

  ngOnInit(): void { }
}
