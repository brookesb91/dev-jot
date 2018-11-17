import { Component, OnInit, ViewChildren, QueryList, ViewChild } from '@angular/core';
import { EditorWindowComponent } from './editor-window';
import { EditorPreviewComponent } from './editor-preview';

interface Editor {
  title: string;
  type: string;
  placeholder: string;
  before?: string;
  after?: string;
}


const EDITORS: Editor[] = [
  {
    title: 'HTML',
    type: 'html',
    placeholder: `<!-- HTML Here -->`
  },
  {
    title: 'CSS',
    type: 'css',
    placeholder: `/* CSS Here */`,
    before: '<style>',
    after: '</style>'
  },
  {
    title: 'JavaScript',
    type: 'js',
    placeholder: `// JavaScript Here`,
    before: `
    <script type="text/javascript">
    try {
    `,
    after: `
    }
    catch (error){
      console.log('Something went wrong with your script!');
      console.log(error);
    }
    </script>
  `
  }
];

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  editors = EDITORS;

  @ViewChildren(EditorWindowComponent) editorWindows: QueryList<EditorWindowComponent>;
  @ViewChild(EditorPreviewComponent) editorPreview: EditorPreviewComponent;

  constructor() { }

  ngOnInit(): void { }

  preview() {
    const content: string[] = [];
    this.editorWindows
      .filter(editor => editor.getContent() !== '')
      .forEach(editor => content.push(editor.getContent()));

    this.editorPreview.render(content.join(''));
  }
}
