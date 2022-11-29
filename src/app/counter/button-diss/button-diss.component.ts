import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-diss',
  templateUrl: './button-diss.component.html',
  styleUrls: ['./button-diss.component.css']
})
export class ButtonDissComponent {
  @Input()
  contador: number = 0;
  @Output()
  onDiss: EventEmitter<number> = new EventEmitter()
  dis(){
    this.contador --;
    this.onDiss.emit(this.contador);
  }

}
