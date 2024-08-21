import ButtonComponent from './button'
import Icon from './icon';
import Rate from './rate';

declare module 'vue' {
  // 全局组件需要定义 interface GlobalComponents

  //volar内部通过GlobalComponents 接口去进行类型处理的
  export interface GlobalComponents { 
    LamButton: typeof ButtonComponent;
    LamIcon: typeof Icon;
    LamRate: typeof Rate;
  }
}

export {}