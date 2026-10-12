// Compatibility entry point. Keep the original page order for build and search.
import { schoolPages } from './pages/unsere-schule.mjs';
import { dailyPages } from './pages/schulalltag.mjs';
import { parentPages } from './pages/eltern.mjs';
import { schoollifePages } from './pages/schulleben.mjs';
import { involvementPages } from './pages/mitmachen.mjs';
import { servicePages } from './pages/service.mjs';
export { quickLinks } from './pages/quick-links.mjs';
export const pages = [...schoolPages, ...dailyPages, ...parentPages, ...schoollifePages, ...involvementPages, ...servicePages];
