import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-editor-preview',
  templateUrl: './editor-preview.component.html',
  styleUrls: ['./editor-preview.component.css']
})
export class EditorPreviewComponent implements OnInit {

  @ViewChild('iframe') iframe: ElementRef;

  private win: Window;
  /**
   * It is now possible to pass data to the iframe
   * win['data-key'] = data;
   */
  private doc: Document;

  constructor() { }

  ngOnInit(): void {
  }

  render(data: any): void {
    this.writeBlob(data);
  }

  private writeBlob(data: any) {
    const blob = new Blob([data], { type: 'text/html' });
    const blobUrl = URL.createObjectURL(blob);
    this.iframe.nativeElement.src = blobUrl;
  }
}
