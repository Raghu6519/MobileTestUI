<template>
  <v-app id="inspire">
    <v-app-bar app fixed clipped-left>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Application</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-avatar  color="indigo"  size="32" >
            <v-icon dark> mdi-account-circle</v-icon>
        </v-avatar>
        <v-icon right>mdi-logout</v-icon>
    </v-app-bar>
    

    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="[icon, text] in links"
          :key="icon"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
        <router-view/>
    </v-main>

  </v-app>
</template>

<script>
//import home from './home';
//import AppDashboard from './AppDashboard';

  export default {
    components: {
      //home,
      //AppDashboard
    },
    data: () => ({
      cards: ['Today', 'Yesterday'],
      drawer: true,
      links: [
        ['mdi-view-dashboard', 'Dashboard'],
        ['mdi-devices', 'Device Management'],
        ['mdi-file-table-box', 'Test Management'],
        ['mdi-motion-play', 'Test Execution'],
        ['mdi-folder-text-outline', 'Test Results']
      ],
    }),
  }
</script>