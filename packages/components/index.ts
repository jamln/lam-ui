import type { Component, App } from 'vue';
import Button from "./button";
import Icon from './icon';
import Rate from './rate';

const components: {
  [propName: string]: Component;
} = {
  LamButton: Button,
  LamIcon: Icon,
  LamRate: Rate,
};

export default {
  install: (app: App) => {
    for (const key in components) {
      app.component(key, components[key]);
    }
  }
};

// export {
//   LamButton
// }