import { Fn } from '../../functions/functions';

export const once = <T extends EventTarget>(obj: T, evtName: string, fn: Fn): void => {
  obj.addEventListener(evtName, function onEvt(...args) {
    obj.removeEventListener(evtName, onEvt);
    fn(...args);
  });
};
