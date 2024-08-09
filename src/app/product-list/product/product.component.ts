import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    console.log(this.paragraph.nativeElement);
  }
  @Input() item = '';

  @Input() name = '';
  @Output() newItemEvent = new EventEmitter<string>();
  @ViewChild('para') paragraph: ElementRef;
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  // Using Template refeerence variable
  message: string = '';
  checkAge(age: string) {
    let finalAge: number = Number.parseInt(age);
    if (finalAge >= 18) {
      this.message = 'Eligible to vote';
    } else {
      this.message = 'Not eligible to vote';
    }
  }

  getDiv() {
    this.paragraph.nativeElement.innerHTML = 'hcsihc';
    console.log(this.paragraph.nativeElement);
  }



}
