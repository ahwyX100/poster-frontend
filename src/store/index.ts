import { createStore } from 'vuex';

export interface UserProps {
  isLogin: boolean;
  userName?: string;
}

export interface TemplateProps {
  id: number;
  title: string;
  coverImg: string;
  author: string;
  copiedCount: number;
}

export interface GlobalDataProps {
  user: UserProps;
  templates: TemplateProps[];
}

export interface GlobalComponents {
  components: [];
  user: UserProps;
}

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
});
