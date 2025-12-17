import { Component, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Announcement {
  day: string;
  month: string;
  year: string;
  text?: string;
  content?: string;
  pdf?: string;
  images?: string[];
  image?: string;
}
@Component({
  selector: 'app-latestannouncement-updates.component',
  standalone: false,
  templateUrl: './latestannouncement-updates.html',
  styleUrls: ['./latestannouncement-updates.scss'],
})
export class LatestannouncementUpdates {
 @ViewChild('scrollArea') scrollArea!: ElementRef;
  openIndex: number | null = null;
  announcements: Announcement[] = [
    {
      day: "13", month: "DEC", year: "2025",
      text: 'Traveller Palm Available for Sale. Traveller Palm Available for Sale Healthy and well-grown Traveller Palms, ideal for gardens, landscaping projects, resorts, and outdoor spaces.',
      image:"assets/landing/img/images-of-latestAnnouncement/Palm_tree.jpg"
    },
    {
      day: "18", month: "DEC", year: "2025",
      text: "Looking for high-quality Eugania plants for your nursery, farm, or landscaping projects? We provide direct bulk supply with consistent quality and timely delivery.",
      image:"assets/landing/img/images-of-latestAnnouncement/Eugenia_plants.jpg"
    },
    {
      day: "19", month: "DEC", year: "2025",
      text: "All sizes of Christmas trees available, We Supply all types of plants for landscaping, parks, commercial projects, and government tenders ",
      images: ["assets/landing/img/images-of-latestAnnouncement/Christmas_tree.jpg",
              "assets/landing/img/images-of-latestAnnouncement/Christmas_tree2.jpg"]
    },
    {
      day: "03", month: "AUG", year: "2025",
      text: "Big Space? Big vibes. Plant a Date Palm. We love how these stunning palms can completely transform a space. Whether it's a park, resort, garden, or corporate campus-they bring instant shade, structure, and that calm tropical feel. Captured right at our nursery-no filters needed.",
      image: "assets/landing/img/images-of-latestAnnouncement/Palm_tree_big.jpg"
    },
    {
      day: "05", month: "JUL", year: "2025",
      text: "Latest Announcement and Updates are given here soon. Major operational enhancements, system upgrades, and important plant-wide updates will be published here regularly to ensure all employees and stakeholders remain informed. Please check back often for new notifications, safety alerts, scheduled maintenance activities, and department-level news.",
      pdf: "assets/landing/pdf/sample.pdf"
    },
    {
      day: "05", month: "AUG", year: "2025",
      text: "Latest Announcement and Updates are given here soon. Major operational enhancements, system upgrades, and important plant-wide updates will be published here regularly to ensure all employees and stakeholders remain informed. Please check back often for new notifications, safety alerts, scheduled maintenance activities, and department-level news.",
      image: "assets/landing/img/home1/icon/maestro.svg"
    },
    {
      day: "05", month: "SEP", year: "2025",
      text: "Latest Announcement and Updates are given here soon. Major operational enhancements, system upgrades, and important plant-wide updates will be published here regularly to ensure all employees and stakeholders remain informed. Please check back often for new notifications, safety alerts, scheduled maintenance activities, and department-level news.",
    }
  ];
   constructor(private sanitizer: DomSanitizer) {
    this.announcements.forEach(a => {
    });
  }

  toggleContent(i: number) {
    this.openIndex = this.openIndex === i ? null : i;
  }
  scrollUp() {
    this.scrollArea.nativeElement.scrollTop -= 60;
  }
  scrollDown() {
    this.scrollArea.nativeElement.scrollTop += 60;
  }
}
