<script setup lang="ts">
import { DiscountsAlertsData } from '@/data/Dashboard';
</script>
<template>
    <v-card elevation="10">
        <v-card-item class="pb-4">
            <div class="d-md-flex justify-space-between mb-mb-0 mb-3">
                <v-card-title class="text-h5 mb-0 pt-1">Discount Alert</v-card-title>
            </div>
            <div>
                <div v-for="item in DiscountsAlertsData" :key="item.id">
                    <div class="d-flex align-center justify-space-between mt-4 mb-2">
                        <h5 class="text-textPrimary text-subtitle-1 font-weight-medium">{{ item.name }}</h5>
                        <div class="text-textPrimary text-subtitle-1 font-weight-medium">{{ item.value }}</div>
                    </div>
                    <v-progress-linear :model-value="item.percent" height="8" :color="item.color"
                        :bg-color="item.color" rounded></v-progress-linear>
                </div>
                <v-avatar class="rounded-md bg-grey100 w-100 mt-4 text-left justify-start px-4">
                    <h4 class="text-4">Net Sales: $892.31</h4>
                </v-avatar>
            </div>
        </v-card-item>
    </v-card>
</template>
