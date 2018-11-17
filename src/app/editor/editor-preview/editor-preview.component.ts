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
    this.readyIframe(this.iframe);
  }

  render(data: any): void {
    this.readyIframe(this.iframe, data);
  }

  private readyIframe(iframe: ElementRef, data: any = null): void {
    this.win = this.iframe.nativeElement.contentWindow;
    this.doc = this.iframe.nativeElement.contentDocument;
    this.doc.open();

    if (data) {
      this.doc.writeln(data);
    }

    this.doc.close();
  }
}
