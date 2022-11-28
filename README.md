### @按钮组
#### 实现效果

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1330c3ceddb3417b9f65329cd65cee40~tplv-k3u1fbpfcp-watermark.image?)

#### 页面部署
```js
<template>
   <div class="wrapper">
      <!-- 批量操作按钮组 -->
      <BtnGroup
         ref="bgRef"
         :groupBtns="groupBtns"
         @group-btn-click="onGroupBtnClick">
         <template #delete>
            <el-icon><Delete /></el-icon>
         </template>

         <template #export>
            <el-icon><DocumentCopy /></el-icon>
         </template>

         <template #add>
            <el-icon><Plus /></el-icon>
         </template>
      </BtnGroup>

      <!-- 表格+分页器 -->
      ...

      <!-- 默认隐藏的对话框 -->
      ...
   </div>
</template>
```



### @数据表格
#### 实现效果
![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1455527e951e4881ba1ca1b47fd926e4~tplv-k3u1fbpfcp-watermark.image?)

#### 页面部署
```js
<template>
   <div class="wrapper">
      <!-- <p>currentPage: {{ currentPage }}</p> -->

      <!-- 批量操作按钮组 -->
      ...

      <!-- 表格+分页器 -->
      <!-- @page-change="onEpPageChange" -->
      <EpTable
         ref="refEpTable"
         :tableData="tableData"
         :page-size="10"
         :cols="cols"
         :avgColWidth="100"
         @delete-item="deleteItem">
         
         <!-- 这里的东东覆盖名为poster的插槽 row为poster插槽暴露出来的数据 -->
         <template #poster="{ row }">
            <div style="display: flex; align-items: center">
               <el-image :src="row.poster" />
            </div>
         </template>

         <!-- 这里的东东覆盖名为poster的插槽 row为poster插槽暴露出来的数据 -->
         <template #actors="{ row }">
            <div style="display: flex; align-items: center">
               <el-image :src="row.actors[0].avatarAddress" />
            </div>
         </template>
      </EpTable>

      <!-- 默认隐藏的对话框 -->
      ...
   </div>
</template>
```

### @ 确认弹窗
#### 实现效果

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e5eaf75a60fa40b69b9a5a300e28a007~tplv-k3u1fbpfcp-watermark.image?)

#### 页面部署

```js
<template>
   <div class="wrapper">
      <!-- <p>currentPage: {{ currentPage }}</p> -->

      <!-- 批量操作 -->
      <BtnGroup...
      </BtnGroup>

      <!-- 表格+分页器 -->
      <!-- @page-change="onEpPageChange" -->
      <EpTable...
      </EpTable>

      <!-- 默认隐藏的对话框 -->
      <EpDialog
         ref="refEpDialog"
         :dialogMode="dialogMode"></EpDialog>
   </div>
</template>
```

### @递归菜单
#### 实现效果

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/117dc1ee211948e8bebfb52f4b875900~tplv-k3u1fbpfcp-watermark.image?)

### 页面部署

```js
<template>
   <!-- 页头 -->
   <MyPageHeader...</MyPageHeader>

   <main>
      <div class="left">
         <!-- 递归菜单 -->
         <EpMenu
            :menu="adminMenu"
            :activeIndex="currentMenuIndex"></EpMenu>
      </div>

      <!-- 右侧内容区 -->
      <div class="right">
         <router-view...</router-view>
      </div>
   </main>
</template>
```


<hr>

***“这不需要测试，肯定是好的，不必担心！”***

<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9ea9e533e39c4e3dab57de3c9b94d64e~tplv-k3u1fbpfcp-watermark.image?" alt="image.png" width="100%" />