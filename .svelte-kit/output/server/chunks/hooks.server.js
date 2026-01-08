const handle = async ({ event, resolve }) => {
  const userAgent = event.request.headers.get("user-agent") || "";
  let deviceType = "desktop";
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
    deviceType = "tablet";
  } else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(userAgent)) {
    deviceType = "mobile";
  }
  event.locals.deviceType = deviceType;
  return resolve(event);
};
export {
  handle
};
