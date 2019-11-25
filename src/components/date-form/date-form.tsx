import { Component, h, State, Listen, Element } from '@stencil/core';
import { YearEvent } from '../year-picker/year-picker';
import { CheckTabInfo } from '../my-tabs/my-tabs';



@Component({
  tag:'date-form',
  styleUrl:'date-form.css',
  scoped: true
})

export class DateForm {
  @State() year: number = 2019; 
  @State() month: string; 
  @State() day: string; 
  @State() hour: string; 
  
  @Element() element

  
  @Listen("yearValue")
   handleYearChange(e:CustomEvent<YearEvent>) {
     this.year = e.detail.year;
   }

  @Listen("checkTabInfo")
   handleDate(e:CustomEvent<CheckTabInfo>) {
      if (e.detail.type === "month") {
        this.month = e.detail.name;
      } if (e.detail.type === "day") {
        this.day = e.detail.name;
      }  if (e.detail.type === "hour") {
        this.hour = e.detail.name;
      }
   }

   handleSubmit(e) {
     e.preventDefault()
     console.log("SEND INFO TO DB > year:", this.year, "month:", this.month,"day:", this.day, "hour", this.hour) 
   }

   handleChange(e) {
     const {name, value} = e.target;
     this[name] = value;
    }

  render() {
    console.log(this.year, this.month, this.day, this.hour)
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input hidden name="year-input" value={this.year} onChange={(e) => this.handleChange(e)}></input>
          <input hidden name="month-input" value={this.month}onChange={(e) => this.handleChange(e)}></input>
          <input hidden name="day-input" value={this.day} onChange={(e) => this.handleChange(e)}></input>
          <input hidden name="hour-input" value={this.hour} onChange={(e) => this.handleChange(e)}></input>
          <button type="submit">BOOK</button>
        </form>
      </div>
    );
  }
}
