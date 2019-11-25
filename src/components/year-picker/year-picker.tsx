import { Component, Prop, h, } from '@stencil/core';


@Component({
  tag:'year-picker',
  styleUrl:'year-picker.css',
  scoped: true
})


export class YearPicker {
  @Prop() year: number = 2019;


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
