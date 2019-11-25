import { Component, Prop, h, Listen, Element } from '@stencil/core';
import {TabActivateEvent} from '../app-tab1/app-tab1'



@Component({
  tag:'my-tabs',
  styleUrl: 'my-tabs.css',
  scoped: true
})


export class AppMyTabs {
  
  @Element() element;

  @Listen("tabActivate")
  handleTabActivate (e: CustomEvent<TabActivateEvent>) {
    const headings = [...this.element.querySelector(".my-tabs-container").children]
                         .filter(child => child.tagName.toLowerCase() === "app-tab1")
    headings.forEach(heading => {
      if(heading.name !== e.detail.name) {
        heading.active = false;
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
