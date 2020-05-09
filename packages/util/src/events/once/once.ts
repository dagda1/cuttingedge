import { Fn } from '../../types/function';

export const once = <T extends EventTarget>(obj: T, evtName: string, fn: Fn) => {
  obj.addEventListener(evtName, function onEvt(...args) {
    obj.removeEventListener(evtName, onEvt);
    fn(...args);
  });
};
