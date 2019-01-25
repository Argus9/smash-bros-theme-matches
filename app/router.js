import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
  trackingID: config.googleAnalyticsTrackingId,
});

Router.map(function() {
});

export default Router;
