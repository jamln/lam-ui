import type { Component, App } from 'vue';
import LamButton from "./button";
import LamIcon from './icon';
import LamRate from './rate';

const components: {
  [propName: string]: Component;
} = {
  LamButton,
  LamIcon,
  LamRate,
};

export default {
  install: (app: App) => {
    for (const key in components) {
      app.component(key, components[key]);
    }
  }
};

export {
  LamButton,
  LamIcon,
  LamRate,
}