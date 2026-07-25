import { Directive, ElementRef, HostListener, Input } from '@angular/core';

// Hands-On 3 Task 3: Custom Attribute Directive
@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  // Hands-On 3 Task 3: Configurable Input for Directive
  @Input() appHighlight: string = 'yellow';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
