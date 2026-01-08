import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    const userAgent = event.request.headers.get('user-agent') || '';

    // Simple detection logic
    let deviceType: 'mobile' | 'tablet' | 'desktop' = 'desktop';

    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
        deviceType = 'tablet';
    } else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(userAgent)) {
        deviceType = 'mobile';
    }

    event.locals.deviceType = deviceType;

    return resolve(event);
};
