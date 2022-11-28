var SuperEp = (function (exports, vue, iconsVue, elementPlus) {
  'use strict';

  const _hoisted_1$2 = { class: "card top" };


  var script$5 = {
    __name: 'BtnGroup',
    props: {
  	groupBtns: Array,
  },
    emits: {
  	groupBtnClick: null,
  },
    setup(__props, { expose, emit }) {





  const disabledArr = vue.ref([]);
  const disableBtn = index => {
  	console.log("disableBtn called", index);
  	disabledArr.value[index] = true;
  };

  /* 父组件调用子组件暴露出来的API：xxRef.value.disableBtn(0) */
  expose({
  	disableBtn,
  });

  return (_ctx, _cache) => {
    const _component_el_icon = vue.resolveComponent("el-icon");
    const _component_el_button = vue.resolveComponent("el-button");

    return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$2, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.groupBtns, (btn, index) => {
        return (vue.openBlock(), vue.createBlock(_component_el_button, {
          class: "opBtn",
          type: btn.type,
          onClick: $event => (emit(`groupBtnClick`, btn.callback)),
          disabled: disabledArr.value[index]
        }, {
          default: vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, btn.slotName, {}, () => [
              vue.createVNode(_component_el_icon, null, {
                default: vue.withCtx(() => [
                  vue.createVNode(vue.unref(iconsVue.Menu))
                ]),
                _: 1 /* STABLE */
              })
            ]),
            vue.createTextVNode("  " + vue.toDisplayString(btn.name), 1 /* TEXT */)
          ]),
          _: 2 /* DYNAMIC */
        }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["type", "onClick", "disabled"]))
      }), 256 /* UNKEYED_FRAGMENT */))
    ]))
  }
  }

  };

  script$5.__scopeId = "data-v-11cde92f";
  script$5.__file = "src/components/BtnGroup/BtnGroup.vue";

  script$5.install = function (Vue) {
    Vue.component(script$5.name, script$5);
  };

  const _hoisted_1$1 = { class: "dialog-footer" };


  var script$4 = {
    __name: 'EpDialog',
    props: {
  	dialogMode: Object,
  },
    setup(__props, { expose }) {



  // 对话框显隐控制
  const dialogVisible = vue.ref(false);

  const setDialogVisible = value => (dialogVisible.value = value);

  expose({
  	setDialogVisible,
  });

  return (_ctx, _cache) => {
    const _component_el_button = vue.resolveComponent("el-button");
    const _component_el_dialog = vue.resolveComponent("el-dialog");

    return (vue.openBlock(), vue.createBlock(_component_el_dialog, {
      modelValue: dialogVisible.value,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((dialogVisible).value = $event)),
      title: "操作确认",
      width: "30%"
    }, {
      footer: vue.withCtx(() => [
        vue.createElementVNode("span", _hoisted_1$1, [
          vue.createVNode(_component_el_button, {
            onClick: _cache[0] || (_cache[0] = $event => (dialogVisible.value = false))
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("取消")
            ]),
            _: 1 /* STABLE */
          }),
          vue.createCommentVNode(" 用户点击确认时执行【当前模式对应的回调】 "),
          vue.createVNode(_component_el_button, {
            type: "primary",
            onClick: __props.dialogMode.callback
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(" 确认 ")
            ]),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["onClick"])
        ])
      ]),
      default: vue.withCtx(() => [
        vue.createElementVNode("span", null, vue.toDisplayString(__props.dialogMode.msg), 1 /* TEXT */)
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["modelValue"]))
  }
  }

  };

  script$4.__file = "src/components/EpDialog/EpDialog.vue";

  script$4.install = function (Vue) {
    Vue.component(script$4.name, script$4);
  };

  const _hoisted_1 = { class: "card bottom" };
  // import { deleteComing } from "@api/movieApi";
  // import EpDialog from "./EpDialog.vue";


  var script$3 = {
    __name: 'EpTable',
    props: {
  	tableData: Array,
  	pageSize: Number,
  	fixedCol: Object,
  	cols: Array,
  	avgColWidth: Number,
  },
    emits: {
  	deleteItem: id => /^[a-z\d]{24}$/.test(id),
  	patchDelete: null,
  },
    setup(__props, { expose, emit }) {

  const { tableData, pageSize, fixedCol, cols, colWidth, avgColWidth } = __props;





  /* 1.0 */
  // const emit = defineEmits({
  // 	pageChange: null,
  // });

  /* 多选时此处能拿到选中的子数组 */
  const selectedItems = vue.ref([]);
  const getSelectedItems = () => selectedItems.value;

  const handleSelectionChange = val => {
  	console.log("handleSelectionChange", val);
  	selectedItems.value = val;
  };

  /* 获取分页数据 */
  const currentPage = vue.ref(1);
  const getPageData = arr => {
  	console.log("getPageData,arr=", arr);
  	console.log("getPageData,tableData=", tableData);
  	return arr.slice((currentPage.value - 1) * pageSize, currentPage.value * pageSize);
  };

  /* 默认列宽 */
  const refWrapper = vue.ref(null);
  const defColWidth = vue.ref(100);
  vue.onMounted(() => {
  	console.log("refTable.value=", refWrapper.value.clientWidth);
  	defColWidth.value = Math.round(refWrapper.value.clientWidth / 4);
  });

  /* 删除单个 */
  const deleteItem = id => {
  	emit("deleteItem", id);
  };

  expose({
  	getSelectedItems,
  });

  return (_ctx, _cache) => {
    const _component_el_table_column = vue.resolveComponent("el-table-column");
    const _component_el_button = vue.resolveComponent("el-button");
    const _component_el_pagination = vue.resolveComponent("el-pagination");

    return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createElementVNode("div", {
        id: "table-wrapper",
        ref_key: "refWrapper",
        ref: refWrapper
      }, [
        vue.createVNode(vue.unref(elementPlus.ElTable), {
          ref: "refTable",
          data: getPageData(__props.tableData),
          stripe: "",
          class: "middle wrapper",
          style: {"width":"100%"},
          "default-sort": { prop: 'date', order: 'ascending' },
          onSelectionChange: handleSelectionChange
        }, {
          default: vue.withCtx(() => [
            vue.createCommentVNode(" 多选显示栏 "),
            vue.createVNode(_component_el_table_column, {
              type: "selection",
              width: "60"
            }),
            vue.createCommentVNode(" fixed固定 sortable字段可排序 label=当前列标题 width当前列像素宽度 "),
            vue.createCommentVNode(" <el-table-column\r\n\t\t\tsortable\r\n\t\t\tfixed\r\n\t\t\t:prop=\"fixedCol.prop\"\r\n\t\t\t:label=\"fixedCol.lable\"\r\n\t\t\twidth=\"100\" /> "),
            vue.createCommentVNode(" 列 "),
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.cols, ({ prop, label, fixed, width, formatter, hasSlot, nosort }) => {
              return (vue.openBlock(), vue.createBlock(_component_el_table_column, {
                sortable: nosort ? false : true,
                fixed: fixed,
                prop: prop,
                label: label,
                width: width ? width : __props.avgColWidth ? __props.avgColWidth : defColWidth.value,
                formatter: formatter
              }, vue.createSlots({ _: 2 /* DYNAMIC */ }, [
                hasSlot
                  ? {
                      name: "default",
                      fn: vue.withCtx(({ row }) => [
                        vue.renderSlot(_ctx.$slots, prop, { row: row })
                      ]),
                      key: "0"
                    }
                  : undefined
              ]), 1032 /* PROPS, DYNAMIC_SLOTS */, ["sortable", "fixed", "prop", "label", "width", "formatter"]))
            }), 256 /* UNKEYED_FRAGMENT */)),
            vue.createCommentVNode(" 海报 "),
            vue.createCommentVNode(" <el-table-column\r\n\t\t\tprop=\"poster\"\r\n\t\t\tlabel=\"海报\"\r\n\t\t\twidth=\"60\">\r\n\t\t\t<template #default=\"{ row: { poster } }\">\r\n\t\t\t\t<div style=\"display: flex; align-items: center\">\r\n\t\t\t\t\t<el-image :src=\"poster\" />\r\n\t\t\t\t</div>\r\n\t\t\t</template>\r\n\t\t</el-table-column> "),
            vue.createCommentVNode(" 右侧固定的操作按钮区 "),
            vue.createVNode(_component_el_table_column, {
              fixed: "right",
              label: "操作",
              width: "90"
            }, {
              default: vue.withCtx(({ row: { _id } }) => [
                vue.createCommentVNode(" 点击Edit按钮 携带id跳转详情页 "),
                vue.createVNode(_component_el_button, {
                  onClick: $event => (_ctx.$router.push(`/film/${_id}`)),
                  type: "primary",
                  icon: vue.unref(iconsVue.Edit),
                  circle: "",
                  size: "small"
                }, null, 8 /* PROPS */, ["onClick", "icon"]),
                vue.createCommentVNode(" 触发单个影片删除 "),
                vue.createVNode(_component_el_button, {
                  onClick: $event => (deleteItem(_id)),
                  type: "danger",
                  icon: vue.unref(iconsVue.Delete),
                  circle: "",
                  size: "small"
                }, null, 8 /* PROPS */, ["onClick", "icon"])
              ]),
              _: 1 /* STABLE */
            })
          ]),
          _: 3 /* FORWARDED */
        }, 8 /* PROPS */, ["data"])
      ], 512 /* NEED_PATCH */),
      vue.createElementVNode("div", _hoisted_1, [
        vue.createVNode(_component_el_pagination, {
          background: "",
          layout: "prev, pager, next",
          "page-size": __props.pageSize,
          total: __props.tableData.length,
          "current-page": currentPage.value,
          "onUpdate:current-page": _cache[0] || (_cache[0] = $event => ((currentPage).value = $event))
        }, null, 8 /* PROPS */, ["page-size", "total", "current-page"])
      ])
    ], 64 /* STABLE_FRAGMENT */))
  }
  }

  };

  script$3.__scopeId = "data-v-4058cc17";
  script$3.__file = "src/components/EpTable/EpTable.vue";

  script$3.install = function (Vue) {
    Vue.component(script$3.name, script$3);
  };

  var script$2 = {
     props: ["icon"],
     render() {
        return vue.h(this.icon);
     },
  };

  script$2.__file = "src/components/menu/EpIcon.vue";

  var script$1 = {
    __name: 'EpMenuUnit',
    props: {
     activeIndex: String,
     menu: Array,
     parentIndex: String,
  },
    setup(__props) {

  const icons = {
     Document: iconsVue.Document,
     Menu: iconsVue.Menu,
     Location: iconsVue.Location,
     User: iconsVue.User,
     Film: iconsVue.Film,
     VideoCamera: iconsVue.VideoCamera,
     Odometer: iconsVue.Odometer,
     Loading: iconsVue.Loading,
     Star: iconsVue.Star,
     PictureFilled: iconsVue.PictureFilled,
     PieChart: iconsVue.PieChart,
     Grid: iconsVue.Grid,
  };



  return (_ctx, _cache) => {
    const _component_el_icon = vue.resolveComponent("el-icon");
    const _component_el_menu_item = vue.resolveComponent("el-menu-item");
    const _component_RouterLink = vue.resolveComponent("RouterLink");
    const _component_EpMenuUnit = vue.resolveComponent("EpMenuUnit", true);
    const _component_el_sub_menu = vue.resolveComponent("el-sub-menu");

    return (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.menu, (item, idx) => {
      return (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
        key: item.name
      }, [
        vue.createCommentVNode(" 渲染菜单项 "),
        (!item.submenu)
          ? (vue.openBlock(), vue.createBlock(_component_RouterLink, {
              key: 0,
              to: item.path
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_el_menu_item, {
                  index: __props.parentIndex + idx
                }, {
                  title: vue.withCtx(() => [
                    vue.createTextVNode(vue.toDisplayString(item.name), 1 /* TEXT */)
                  ]),
                  default: vue.withCtx(() => [
                    (item.iconName)
                      ? (vue.openBlock(), vue.createBlock(_component_el_icon, { key: 0 }, {
                          default: vue.withCtx(() => [
                            vue.createVNode(script$2, {
                              icon: icons[item.iconName]
                            }, null, 8 /* PROPS */, ["icon"])
                          ]),
                          _: 2 /* DYNAMIC */
                        }, 1024 /* DYNAMIC_SLOTS */))
                      : vue.createCommentVNode("v-if", true)
                  ]),
                  _: 2 /* DYNAMIC */
                }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["index"])
              ]),
              _: 2 /* DYNAMIC */
            }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"]))
          : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
              vue.createCommentVNode(" 渲染子菜单 "),
              vue.createVNode(_component_el_sub_menu, {
                index: __props.parentIndex + idx
              }, {
                title: vue.withCtx(() => [
                  (item.iconName)
                    ? (vue.openBlock(), vue.createBlock(_component_el_icon, { key: 0 }, {
                        default: vue.withCtx(() => [
                          vue.createVNode(script$2, {
                            icon: icons[item.iconName]
                          }, null, 8 /* PROPS */, ["icon"])
                        ]),
                        _: 2 /* DYNAMIC */
                      }, 1024 /* DYNAMIC_SLOTS */))
                    : vue.createCommentVNode("v-if", true),
                  vue.createElementVNode("span", null, vue.toDisplayString(item.name), 1 /* TEXT */)
                ]),
                default: vue.withCtx(() => [
                  vue.createVNode(_component_EpMenuUnit, {
                    menu: item.submenu,
                    parentIndex: `${__props.parentIndex}${idx}-`
                  }, null, 8 /* PROPS */, ["menu", "parentIndex"])
                ]),
                _: 2 /* DYNAMIC */
              }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["index"])
            ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
      ], 64 /* STABLE_FRAGMENT */))
    }), 128 /* KEYED_FRAGMENT */))
  }
  }

  };

  script$1.__file = "src/components/menu/EpMenuUnit.vue";

  var script = {
    __name: 'EpMenu',
    props: {
     activeIndex: String,
     menu: Array,
  },
    setup(__props) {



  return (_ctx, _cache) => {
    const _component_el_menu = vue.resolveComponent("el-menu");

    return (vue.openBlock(), vue.createBlock(_component_el_menu, {
      "default-active": __props.activeIndex,
      class: "el-menu-vertical-demo",
      collapse: _ctx.isCollapse,
      onOpen: _ctx.handleOpen,
      onClose: _ctx.handleClose,
      onSelect: _ctx.onSelect,
      "background-color": "#3a4149",
      "text-color": "#fff",
      "active-text-color": "#99ffff"
    }, {
      default: vue.withCtx(() => [
        vue.createVNode(script$1, {
          menu: __props.menu,
          parentIndex: ""
        }, null, 8 /* PROPS */, ["menu"])
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["default-active", "collapse", "onOpen", "onClose", "onSelect"]))
  }
  }

  };

  script.__file = "src/components/menu/EpMenu.vue";

  script.install = function (Vue) {
    Vue.component(script.name, script);
  };

  var version = "1.0.5";

  const components = [script$5, script$4, script$3, script];
  const install = function (Vue) {
    components.forEach(component => {
      Vue.component(component.name, component);
    });
  };
  if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
  }
  var main = {
    version,
    install
  };

  exports.BtnGroup = script$5;
  exports.EpDialog = script$4;
  exports.EpMenu = script;
  exports.EpTable = script$3;
  exports["default"] = main;
  exports.install = install;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({}, vue, iconsVue, elementPlus);
