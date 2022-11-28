import BtnGroup from "./components/BtnGroup/index.js";
import EpDialog from "./components/EpDialog/index.js";
import EpTable from "./components/EpTable/index";
import EpMenu from "./components/menu/index";
// import MyPageHeader from "./components/MyPageHeader/index";

import { version } from "../package.json";

const components = [BtnGroup, EpDialog, EpTable, EpMenu];

const install = function (Vue) {
   components.forEach(component => {
      Vue.component(component.name, component);
   });
};

if (typeof window !== "undefined" && window.Vue) {
   install(window.Vue);
}

export { BtnGroup, EpDialog, EpTable, EpMenu, install };

export default { version, install };
