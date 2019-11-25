import { Component, Prop, h, Event, EventEmitter, Listen} from '@stencil/core';

export interface TabActivateEvent {
  name: string;
}

@Component({
  tag: 'app-tab1',
  styleUrl: 'app-tab1.css',
  scoped: true
})


export class AppTab1 {
  @Prop() name: string;
  @Prop() active: boolean;
  @Event() tabActivate: EventEmitter<TabActivateEvent>

  @Listen("click") 
  handleClick() {
    this.active = true;
    this.tabActivate.emit({name: this.name})
  }

  getCSSClass = () => this.active ? "my-tab-active" : "my-tab";

  render() {
    return (
      <div class={this.getCSSClass()}>{name}
        <slot />
      </div>
    );
  }
}
