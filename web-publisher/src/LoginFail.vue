<template>
    <v-app>
        <v-img
            dark
            eager
            max-height="100%"
            max-width="100%"
            aspect-ratio="1.97"
            sizes="0"
            gradient="to top left, rgba(245,245,245,.15), rgba(84,128,241,.7)"
            src="https://images.unsplash.com/photo-1437419764061-2473afe69fc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1490&q=80"
        >
            <template v-slot:default>
                <v-container fluid fill-height>
                    <v-row dense align="center" justify="center">
                        <v-card flat>
                            <v-card-title>
                                <v-layout justify-center align-center fill-height>
                                    <v-flex col-4>
                                        <v-img aspect-ratio="1" src="https://dinshaw.github.io/img/homer-doh.jpg" contain />
                                    </v-flex>
                                </v-layout>
                            </v-card-title>
                            <v-card-title>
                                <h1>Web are sorry, authentication is fail.</h1>
                            </v-card-title>
                        </v-card>
                    </v-row>
                </v-container>
            </template>
        </v-img>
    </v-app>
</template>