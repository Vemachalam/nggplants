import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-plant-catagory.component',
  standalone: false,
  templateUrl: './plant-catagory.component.html',
  styleUrl: './plant-catagory.component.scss',
})
export class PlantCatagoryComponent {
  slider: OwlOptions = {
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        navSpeed: 700,
        navText: ["", ""],
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            740: {
                items: 1,
            },
            940: {
                items: 1,
            },
        },
        nav: false,
    };

    updateOptions: OwlOptions = {
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        autoplay: true,
        margin: 15,
        smartSpeed: 1000,
        navSpeed: 700,
        navText: ["", ""],
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 2,
            },
            740: {
                items: 3,
            },
            940: {
                items: 4,
            },
        },
        nav: false,
    };

    // ngAfterViewInit(): void {
    //     AOS.init({
    //         duration: 1000,  // Animation duration in ms
    //         once: true       // Whether animation should happen only once
    //     });
    // }

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

}
