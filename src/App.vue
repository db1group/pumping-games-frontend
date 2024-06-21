  <template>
    <v-layout class="rounded rounded-md">
      <sidebar-component></sidebar-component>
      <header-component></header-component>




      <v-main>
        <v-container>

          <router-view></router-view>
        </v-container>
      </v-main>
    </v-layout>
  </template>

<style scoped></style>
<script lang="ts">
import { defineComponent } from 'vue';
import SidebarComponent from './components/sidebar/sidebar.component.vue'
import HeaderComponent from './components/header/header.component.vue'

export default defineComponent({
  components: {
    SidebarComponent,
    HeaderComponent
  }
})
</script>
