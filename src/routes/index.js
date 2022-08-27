import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profiles from '~/pages/Profiles';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import { HeaderOnly } from '~/layout';
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
];

//Private for not a member
const privateRoutes = [];

export { publicRoutes, privateRoutes };
