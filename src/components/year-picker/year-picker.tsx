import { Component, h, State, Event, EventEmitter, Listen} from '@stencil/core';


export interface YearEvent {
  year: number;
}

@Component({
  tag:'year-picker',
  styleUrl:'year-picker.css',
  scoped: true
})


export class YearPicker {
  @State() year: number = 2019
 
  @Event() yearValue: EventEmitter<YearEvent>;

  @Listen("click")
  handleYearChange() {
    this.yearValue.emit({year:this.year})  
  }


  getYearBack = () => {
    this.year -= 1;
  }
  
  getYearFoward = () => {
    this.year += 1;
  }

  render() {
    return (
      <div class="year-container">
        <button onClick={this.getYearBack}>BACK</button>
          <p class="year-input">
            {this.year}
          </p>
        <button onClick={this.getYearFoward}>FOWARD</button>
      </div>
    );
  }
}
