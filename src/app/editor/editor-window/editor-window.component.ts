import { Component, OnInit, Input } from '@angular/core';

const ICONS = {
  'html': 'fa-html5',
  'css': 'fa-css3-alt',
  'js': 'fa-js'
};

@Component({
  selector: 'app-editor-window',
  templateUrl: './editor-window.component.html',
  styleUrls: ['./editor-window.component.css']
})
export class EditorWindowComponent implements OnInit {

  @Input() title = 'Editor';
  @Input() type: 'html' | 'js' | 'css' = 'html';
  @Input() placeholder = 'Placeholder Text';
  icons = ICONS;

  constructor() { }

  ngOnInit(): void { }
}
