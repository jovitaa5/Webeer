import HomePage from '../views/pages/homepage';
import Login from '../views/pages/login';
import Register from '../views/pages/register';
import jobsPage from '../views/pages/jobsPage';
import ForumsPage from '../views/pages/forumsPage';
import AddDiscussionPage from '../views/pages/addDiscussionPage';

const routes = {
  '/': HomePage,
  '/adddiscussion': AddDiscussionPage,
  '/forums': ForumsPage,
  '/login': Login,
  '/register': Register,
  '/jobs': jobsPage,
};

export default routes;
