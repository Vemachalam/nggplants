import { Component, AfterViewInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-faqngg.component',
  standalone: false,
  templateUrl: './faqngg.component.html',
  styleUrl: './faqngg.component.scss',
})
export class FaqnggComponent implements AfterViewInit, OnDestroy {
  private removeListeners: Array<() => void> = [];
  constructor(private el: ElementRef, private renderer: Renderer2) { }
  ngAfterViewInit(): void {
    const host = this.el.nativeElement as HTMLElement;
    const items: NodeListOf<HTMLElement> = host.querySelectorAll('.accordion-item');
    function setActiveItem(activeItem: HTMLElement | null): void {
      if (!items?.length) return;
      items.forEach(item =>
        item.classList.toggle('active', item === activeItem)
      );
    }
    items.forEach(item => {
      const button = item.querySelector('.accordion-button') as HTMLButtonElement | null;
      const collapse = item.querySelector('.accordion-collapse') as HTMLElement | null;
      if (!button || !collapse) return;
      const onClick = (ev: Event) => {
        ev.preventDefault();
        const isOpen = collapse.classList.contains('show');
        if (isOpen) {
          this.renderer.removeClass(collapse, 'show');
          this.renderer.addClass(button, 'collapsed');
          button.setAttribute('aria-expanded', 'false');
          item.classList.remove('active');
        } else {
          items.forEach(other => {
            const oCollapse = other.querySelector('.accordion-collapse') as HTMLElement | null;
            const oButton = other.querySelector('.accordion-button') as HTMLButtonElement | null;
            if (!oCollapse || !oButton) return;
            this.renderer.removeClass(oCollapse, 'show');
            this.renderer.addClass(oButton, 'collapsed');
            oButton.setAttribute('aria-expanded', 'false');
            other.classList.remove('active');
          });
          this.renderer.addClass(collapse, 'show');
          this.renderer.removeClass(button, 'collapsed');
          button.setAttribute('aria-expanded', 'true');
          item.classList.add('active');
        }
      };
      this.removeListeners.push(this.renderer.listen(button, 'click', onClick));
    });
  }
  ngOnDestroy(): void {
    this.removeListeners.forEach(fn => fn());
    this.removeListeners = [];
  }
}
