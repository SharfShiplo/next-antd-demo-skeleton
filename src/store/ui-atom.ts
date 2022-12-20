import { NEXT_SKELETON_UICONTROLLER } from '@/lib/constants';
import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

interface UIControllerState {
  theme: boolean;
}

export const defaultUIController: UIControllerState = {
  theme: false,
};

export const uicontrollerAtom = atomWithStorage(
  NEXT_SKELETON_UICONTROLLER,
  defaultUIController
);
export const clearUIcontrollerAtom = atom(null, (_get, set, _data) => {
  return set(uicontrollerAtom, defaultUIController);
});

export const darkMoodAtom = atom(
    (get) => get(uicontrollerAtom).theme,
    (get, set, data: boolean) => {
      const prev = get(uicontrollerAtom);
      return set(uicontrollerAtom, { ...prev, theme: data });
    }
);
