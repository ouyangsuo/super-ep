import MyPageHeader from "./MyPageHeader.vue";

MyPageHeader.install = function (Vue) {
  Vue.component(MyPageHeader.name, MyPageHeader);
};

export default MyPageHeader;