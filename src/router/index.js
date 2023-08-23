import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from "../database/index";	

Vue.use(VueRouter)
let routes = [
    {
        path: '*',
        component: () => import(/* webpackChunkName: "misc" */ '../views/404.vue'),
    },
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Sign-In.vue'),
    },
    {
        path: '/advocate/:id',
        name: 'Advocate',
        meta: { requiresAuth: true },
        layout: "dashboard",
        component: () => import(/* webpackChunkName: "advocate" */ '../views/Lawyer-Details.vue'),
    },
    {
        path: '/contact-us',
        name: 'Contact-Us',
        component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
    },
    {
        path: '/know-your-courts',
        name: 'Know-Your-Courts',
        component: () => import(/* webpackChunkName: "courts" */ '../views/Know-Your-Courts.vue'),
    },
    {
        path: '/find-a-lawyer',
        name: 'Find-a-Lawyer',
        component: () => import(/* webpackChunkName: "lawyer" */ '../views/FindaAawyer.vue'),
    },
    {
        path: '/wallet',
        name: 'Wallet',
        meta: { requiresAuth: true },
        layout: "dashboard",
        component: () => import(/* webpackChunkName: "singlecourt" */ '../views/UserWallet.vue'),
    },
    {
        path: '/landing',
        name: 'Landing',
        component: () => import(/* webpackChunkName: "landing" */ '../views/Advocate-List.vue'),
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        meta: { requiresAuth: true },
        layout: "dashboard",
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
    },
    {
        path: '/layout',
        name: 'Layout',
        layout: "dashboard",
        meta: { requiresAuth: true },
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/Layout.vue'),
    },
    {
        path: '/riders',
        name: 'Riders',
        layout: "dashboard",
        meta: { requiresAuth: true},
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/TeacherLessons.vue'),
    },
    {
        path: '/users',
        name: 'Users',
        layout: "dashboard",
        meta: { requiresAuth: true},
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/MyLessons.vue'),
    },
    {
        path: '/view-lessons',
        name: 'ViewLessons',
        layout: "dashboard",
        meta: { requiresAuth: true},
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/StudentLessons.vue'),
    },
    {
        path: '/teachers',
        name: 'Teachers',
        layout: "dashboard",
        meta: { requiresAuth: true},
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/ViewTeachers.vue'),
    },
    {
        path: '/chat',
        name: 'Chat',
        layout: "dashboard",
        meta: { requiresAuth: true },
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/Chat.vue'),
    },
    {
        path: '/request/:id',
        name: 'Request',
        layout: "dashboard",
        meta: { requiresAuth: true, requiresAdmin: true },
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/SingleRequest.vue'),
    },
    {
        path: '/details/:id',
        name: 'Details',
        meta: { requiresAuth: true },
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/Profile.vue'),
    },
    {
        path: '/rtl',
        name: 'RTL',
        layout: "dashboard-rtl",
        meta: { layoutClass: 'dashboard-rtl' },
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/RTL.vue'),
    },
    {
        path: '/profile',
        name: 'Profile',
        layout: "dashboard",
        meta: { requiresAuth: true },
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/ActiveProfile.vue'),
    },
    {
        path: '/sign-in',
        name: 'Sign-In',
        component: () => import(/* webpackChunkName: "signin" */ '../views/Sign-In.vue'),
    },
    {
        path: '/sign-up',
        name: 'Sign-Up',
        component: () => import(/* webpackChunkName: "signup" */ '../views/Sign-Up.vue'),
    },
    {
        path: '/forgot-password',
        name: 'Forgot-Password',
        component: () => import(/* webpackChunkName: "forgotpassword" */ '../views/Forgot-Password.vue'),
    },
    {
        path: '/reset-password',
        name: 'Reset-Password',
        component: () => import(/* webpackChunkName: "resetpassword" */ '../views/ResetPassword.vue'),
    },
    {
        path: '/advocate-listing',
        name: 'Advocate-Listing',
        component: () => import(/* webpackChunkName: "advocatelist" */ '../views/Advocate-List.vue'),
    },
    {
        path: '/not-authorized',
        name: 'not-authorized',
        component: () => import(/* webpackChunkName: "notauthorized" */ '../views/NotAuthorized.vue'),
    },
    {
        path: '/testPage',
        name: 'TestPage',
        component: () => import(/* webpackChunkName: "notauthorized" */ '../views/TestPage.vue'),
    },
]

function addLayoutToRoute( route, parentLayout = "default" )
{
	route.meta = route.meta || {} ;
	route.meta.layout = route.layout || parentLayout ;
	
	if( route.children )
	{
		route.children = route.children.map( ( childRoute ) => addLayoutToRoute( childRoute, route.meta.layout ) ) ;
	}
	return route ;
}

routes = routes.map( ( route ) => addLayoutToRoute( route ) ) ;

const router = new VueRouter({
	mode: 'history',
	routes,
})
router.beforeEach((to, from, next) => {
	const requiresAuth = to.matched.some((route) => route.meta.requiresAuth);
	const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin)
	if (requiresAuth && !auth.currentUser) {
	  next("/sign-in");
	}  else if (requiresAuth && requiresAdmin && auth.currentUser.email !='director@acelitigator.com') {
		next('not-authorized') //redirect to not-authorized page
	  }
	else {
	  next();
	}
  });

export default router
