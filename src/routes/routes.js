import Following from '~/pages/Following/Following';
import Home from '~/pages/Home/Home';
import Profiles from '~/pages/Profiles/Profiles';
import Upload from '~/pages/Upload/Upload';
import Search from '~/pages/Search/Search';
import { HeaderOnly } from '~/layout';
import Live from '~/pages/Live';
import routesConfig from '~/config/routes';

//Pulic routes for members
const publicRoutes = [
  {
    path: routesConfig.home,
    components: Home,
  },
  {
    path: routesConfig.following,
    components: Following,
  },
  {
    path: routesConfig.profile,
    components: Profiles,
  },
  {
    path: routesConfig.upload,
    components: Upload,
    layout: HeaderOnly,
  },
  {
    path: routesConfig.search,
    components: Search,
    layout: null,
  },
  {
    path: routesConfig.live,
    components: Live,
  },
];

//Private for not a member
const privateRoutes = [];

export { publicRoutes, privateRoutes };
