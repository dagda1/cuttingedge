import { Page, RouteOnly } from '../routes';

export function isPage(pageOrRoute: Page | RouteOnly): pageOrRoute is Page {
  return typeof pageOrRoute === 'object' && pageOrRoute !== null && 'component' in pageOrRoute;
}
