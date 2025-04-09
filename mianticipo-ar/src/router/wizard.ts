/* import type { RouteRecordRaw } from 'vue-router' */

const wizardRoutes: RouteRecordRaw[] = [
  {
    path: '/pasos-a-seguir',
    name: 'OnboardingView',
    component: () => import('../pages/FlowViews/OnboardingView.vue'),
  },
]

export default wizardRoutes;
