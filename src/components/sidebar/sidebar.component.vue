<template>

    <!-- <v-navigation-drawer theme="dark" permanent rail>


        <v-divider></v-divider>
        
        <v-list density="compact" nav>
            <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/cards/house.jpg" value="house"
            nav></v-list-item>
            <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/cards/road.jpg" value="road"
            nav></v-list-item>
            <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/cards/plane.jpg" value="plane"
            nav></v-list-item>
        </v-list>
    </v-navigation-drawer> -->

    <v-navigation-drawer permanent>
        <v-list-item class="pa-4" prepend-avatar="https://randomuser.me/api/portraits/men/75.jpg" nav>
            John Doe
        </v-list-item>

        <v-divider></v-divider>
        <v-list>
            <v-list-item title="Home" value="home"></v-list-item>

            <v-list-item title="Contacts" value="contacts"></v-list-item>

            <v-list-item title="Settings" value="settings"></v-list-item>
        </v-list>
    </v-navigation-drawer>


</template>