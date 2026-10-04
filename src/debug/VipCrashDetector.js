// debug/VipCrashDetector.js
export const VipCrashDetector = (() => {
  const state = {
    lastRoute: null,
    lastUser: null,
    lastVip: null,
    lastComponent: null,
    lastEffect: null,
    logs: [],
  };

  function capture(data) {
    state.logs.push({
      ...data,
      time: new Date().toISOString(),
    });

    if (state.logs.length > 50) state.logs.shift();
  }

  return {
    setRoute(route) {
      state.lastRoute = route;
      capture({ type: "route", route });
    },

    setUser(user) {
      state.lastUser = user;
      state.lastVip = user?.vip;
      capture({ type: "user", user });
    },

    setComponent(name) {
      state.lastComponent = name;
      capture({ type: "component", name });
    },

    setEffect(info) {
      state.lastEffect = info;
      capture({ type: "effect", info });
    },

    crash(error, extra = {}) {
      const payload = {
        error: error?.toString(),
        stack: error?.stack,
        route: state?.lastRoute,
        user: state?.lastUser,
        vip: state?.lastVip,
        lastComponent: state?.lastComponent,
        lastEffect: state?.lastEffect,
        logs: state?.logs,
        ...extra,
      };

      console.group("💥 VIP CRASH DETECTED");
      console.error(payload);
      console.groupEnd();

      window.__VIP_CRASH__ = payload;
    },
  };
})();