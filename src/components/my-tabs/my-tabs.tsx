import { Component, h, Listen, Element, Event, EventEmitter, Prop} from '@stencil/core';
import { TabActivateEvent } from '../app-tab1/app-tab1';

export interface CheckTabInfo {
  name:string;
  type:string;
}

@Component({
  tag:'my-tabs',
  styleUrl: 'my-tabs.css',
  scoped: true
})


export class AppMyTabs {
  @Prop() tabs: string;
  @Element() element;

  @Event() checkTabInfo: EventEmitter<CheckTabInfo>

  @Listen("tabActivate")
  handleTabActivate (activeChild: CustomEvent<TabActivateEvent>) {
    const myTabsChildren = [...this.element.querySelector(".my-tabs-container").children]
    myTabsChildren.forEach(child => {
      if(child.name !== activeChild.detail.name) {
        child.active = false;
      } else if(child.active === true) {
        this.checkTabInfo.emit({name:child.name, type:this.tabs})
      }
    })
  }


  render() {
    return (
      <div class="my-tabs-container">
        <slot />
      </div>
    );
  }
}
