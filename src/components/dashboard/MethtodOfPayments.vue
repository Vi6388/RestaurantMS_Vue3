<script setup lang="ts">
import { MethodOfPayments } from '@/data/Dashboard';
</script>
<template>
    <v-card elevation="10">
        <v-card-item class="pb-4">
            <div class="flex justify-between mb-3 align-center">
                <v-card-title class="text-h5 mb-0">Method of Payments</v-card-title>
            </div>
            <div>
                <div v-for="item in MethodOfPayments" :key="item.id">
                    <div class="flex align-center justify-between mt-4 mb-2">
                        <h5 class="text-textPrimary text-subtitle-1 font-medium">{{ item.type }}</h5>
                        <div class="text-textPrimary text-subtitle-1 font-medium">{{ item.value }}</div>
                    </div>
                    <v-progress-linear :model-value="item.percent" height="8" :color="item.color"
                        :bg-color="item.bgColor" rounded></v-progress-linear>
                </div>
                <v-avatar class="rounded-md bg-grey100 w-100 mt-4 text-left justify-start px-4">
                    <h4 class="text-4">Net Sales: $892.31</h4>
                </v-avatar>
            </div>
        </v-card-item>
    </v-card>
</template>
