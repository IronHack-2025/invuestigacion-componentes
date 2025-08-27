<template>
  <a-layout>
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="dashboard">
          <user-outlined />
          <span>Dashboard</span>
        </a-menu-item>
        <a-menu-item key="pacientes">
          <video-camera-outlined />
          <span>Pacientes</span>
        </a-menu-item>
        <a-menu-item key="doctores">
          <upload-outlined />
          <span>Doctores</span>
        </a-menu-item>
        <a-menu-item key="configuracion">
          <setting-outlined />
          <span>Configuración</span>
        </a-menu-item>
        <a-menu-item key="logout">
          <user-outlined />
          <span>Logout</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
        </div>
        <div style="display: flex; align-items: center; gap: 16px; margin-right: 24px;">
          <a-badge count="3">
            <a-avatar style="background-color: #87d068">
              <UserOutlined />
            </a-avatar>
          </a-badge>
          <a-badge dot>
            <a-avatar style="background-color: #1890ff">
              <BellOutlined />
            </a-avatar>
          </a-badge>
          <a-avatar style="background-color: #f56a00">
            <SettingOutlined />
          </a-avatar>
        </div>
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
  <Table />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script setup>
import { ref } from 'vue';
import { UserOutlined, BellOutlined, SettingOutlined, MenuUnfoldOutlined, MenuFoldOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons-vue';
import Table from './Table.vue';
// Registrar los iconos para usarlos en los avatares y menú
const selectedKeys = ref(['1']);
const collapsed = ref(false);
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>