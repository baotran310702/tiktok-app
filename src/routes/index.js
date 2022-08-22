import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profiles from '~/pages/Profiles';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import { HeaderOnly } from '~/Layout';

//Pulic routes for members
const publicRoutes = [
  {
    path: '/',
    components: Home,
  },
  {
    path: '/following',
    components: Following,
  },
  {
    path: '/profiles',
    components: Profiles,
  },
  {
    path: '/upload',
    components: Upload,
    layout: HeaderOnly,
  },
  {
    path: '/search',
    components: Search,
    layout: null,
  },
];

//Private for not a member
const privateRoutes = [];

export { publicRoutes, privateRoutes };
