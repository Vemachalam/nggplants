import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-home.component',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  @ViewChild('preloader') preloader!: ElementRef;
  @ViewChild('sidebarBtn') sidebarBtn!: ElementRef;
  sMenuVisible = false;
  ShowTendersPopup = false;
  isSidebarButtonActive = false;
  isMenuVisible = false;
  isSidebarActive = false;
  isBrowser = false;
  isHomePage = false;
  
  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.isHomePage = event.urlAfterRedirects === '/';
      });
  }
  ngOnInit() {
    this.setFontSize('medium');
    if (this.isBrowser) {
      const dot = document.getElementById('cursor-dot') as HTMLElement | null;
      const plant = document.getElementById(
        'cursor-plant'
      ) as HTMLElement | null;

      if (!dot || !plant) return;
      let plantX = 0;
      let plantY = 0;
      document.addEventListener('mousemove', (e: MouseEvent) => {
        const x = e.clientX;
        const y = e.clientY;
        dot.style.transform = `translate(${x}px, ${y}px)`;
        plantX += (x - plantX) * 0.15;
        plantY += (y - plantY) * 0.15;
        plant.style.transform = `translate(${plantX}px, ${plantY}px)`;
      });
    }
  }
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.setFontSize('medium');
    }
  }
  toggleSidebarButton(): void {
    this.isSidebarButtonActive = !this.isSidebarButtonActive;
    this.isMenuVisible = !this.isMenuVisible;
  }

  closeMenu(): void {
    this.isMenuVisible = false;
  }

  setFontSize(size: 'small' | 'medium' | 'large') {
    if (!this.isBrowser) return;
    const body = document.body;
    this.renderer.removeClass(body, 'font-small');
    this.renderer.removeClass(body, 'font-medium');
    this.renderer.removeClass(body, 'font-large');
    this.renderer.addClass(body, `font-${size}`);
  }
  toggleDropdown(event: MouseEvent, type: 'first' | 'second'): void {
    const clicked = event.currentTarget as HTMLElement;
    const activeClass = 'active';
    const targetList = type === 'first' ? 'ul' : '.submenu-list';
    const siblings = clicked.parentElement?.parentElement?.children;
    clicked.classList.toggle(activeClass);
    const next = clicked.nextElementSibling as HTMLElement;
    if (next && next.matches(targetList)) {
      next.style.display = next.style.display === 'block' ? 'none' : 'block';
    }

    if (siblings) {
      Array.from(siblings).forEach((sibling) => {
        if (sibling !== clicked.parentElement) {
          const sibDropdown = sibling.querySelector<HTMLElement>(targetList);
          const sibIcon = sibling.querySelector<HTMLElement>('.' + activeClass);

          if (sibDropdown) sibDropdown.style.display = 'none';
          if (sibIcon) sibIcon.classList.remove(activeClass);
        }
      });
    }
  }

  onMouseEnter(event: MouseEvent, spanEl: HTMLElement): void {
    const target = event.currentTarget as HTMLElement;
    const offset = target.getBoundingClientRect();
    const relX = event.pageX - offset.left - window.scrollX;
    const relY = event.pageY - offset.top - window.scrollY;
    spanEl.style.top = `${relY}px`;
    spanEl.style.left = `${relX}px`;
  }

  onMouseLeave(event: MouseEvent, spanEl: HTMLElement): void {
    const target = event.currentTarget as HTMLElement;
    const offset = target.getBoundingClientRect();
    const relX = event.pageX - offset.left - window.scrollX;
    const relY = event.pageY - offset.top - window.scrollY;
    spanEl.style.top = `${relY}px`;
    spanEl.style.left = `${relX}px`;
  }

  scrollToMain() {
    const main = document.getElementById('main-content');
    if (main) {
      main.focus();
      main.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
