import {
  Component,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
  ChangeDetectorRef,
  AfterContentChecked,
} from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

export interface Developer {
  name: string;
  note: string;
}

const developers: Developer[] = [
  { name: 'Petar Petrovic', note: 'Some short note' },
  {
    name: 'Dejan Popovic',
    note: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition.",
  },
  { name: 'Stefan Jovanovic', note: 'Some short note' },
  { name: 'Dusan Stevanovic', note: 'Some short note' },
  {
    name: 'Aleksandar Zecevic',
    note: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
  },
  { name: 'Jovan Jokic', note: 'Some short note' },
  { name: 'Nikola Kovacevic', note: 'Some short note' },
  {
    name: 'Dusan Simic',
    note: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
  },
];

@Component({
  selector: 'app-root',
  imports: [MatTableModule, MatTooltipModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements AfterContentChecked {
  @ViewChild('el') devNoteElement: ElementRef;

  displayedColumns: string[] = ['name', 'note'];
  dataSource = developers;

  constructor(private cdref: ChangeDetectorRef) {}

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }
}
