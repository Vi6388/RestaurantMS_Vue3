<script setup lang="ts">
import { StarData } from '@/data/Dashboard';
import { StarIcon } from 'vue-tabler-icons';
</script>
<template>
    <v-card elevation="10">
        <v-card-item class="pb-4">
            <div class="d-md-flex justify-space-between mb-mb-0 mb-3">
                <v-card-title class="text-h5 mb-0 pt-1">Star Items</v-card-title>
            </div>
            <div>
                <div class="d-flex ga-2">
                    <v-avatar class="" size="32" color="success">
                        <StarIcon size="18" color="white" />
                    </v-avatar>
                    <v-avatar class="" size="32" color="lightprimary">
                        <StarIcon size="18" color="white" />
                    </v-avatar>
                    <v-avatar class="" size="32" color="lightsecondary">
                        <StarIcon size="18" color="white" />
                    </v-avatar>
                    <v-avatar class="" size="32" color="lighterror">
                        <StarIcon size="18" color="white" />
                    </v-avatar>
                </div>
                <div v-for="item in StarData" :key="item.id">
                    <div class="d-flex align-center justify-space-between mt-4 mb-2">
                        <h5 class="text-textPrimary text-subtitle-1 font-weight-medium">{{ item.name }}</h5>
                        <div class="text-textPrimary text-subtitle-1 font-weight-medium">${{ item.value }}</div>
                    </div>
                    <v-progress-linear :model-value="item.percent" height="8" :color="item.color" :bg-color="item.color"
                        rounded></v-progress-linear>
                </div>
            </div>
        </v-card-item>
    </v-card>
</template>
