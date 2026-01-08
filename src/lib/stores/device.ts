import { writable } from 'svelte/store';

export type DeviceType = 'mobile' | 'tablet' | 'desktop';

export const device = writable<DeviceType>('desktop');

export const setDevice = (d: DeviceType) => device.set(d);
