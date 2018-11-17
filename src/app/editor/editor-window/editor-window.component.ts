import { EventEmitter, Component, OnInit, Input, ElementRef, ViewChild, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


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

  @ViewChild('textarea') textarea: ElementRef;

  @Input() title = 'Editor';
  @Input() type: 'html' | 'js' | 'css' = 'html';
  @Input() placeholder = 'Placeholder Text';
  @Input() before: string;
  @Input() after: string;

  @Output() contentChange = new EventEmitter<boolean>();

  icons = ICONS;
  content: string;

  constructor(private toastr: ToastrService) {
    this.content = '';
  }

  ngOnInit(): void { }

  emitChange(): void {
    this.contentChange.emit(true);
  }

  getContent(): string {
    return `${this.before || ''}${this.content}${this.after || ''}`;
  }

  clear(): void {
    this.content = '';
    this.emitChange();
  }

  copySuccess(): void {
    this.toastr.success('Copied To Clipboard');
  }
}
