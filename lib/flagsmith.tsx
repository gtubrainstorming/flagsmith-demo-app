import flagsmith from 'flagsmith/isomorphic';

const initializeFlagsmith = (environmentID: string) => {
  if (!flagsmith.isInitialized()) {
    flagsmith.init({
      environmentID,
      cacheFlags: true, // recommended for performance
      enableAnalytics: true, // optional, for Flagsmith analytics
      // ...other configuration options
    });
  }
};

export default initializeFlagsmith;