<script setup lang="ts">
import { LaborData } from '@/data/Dashboard';
</script>
<template>
    <v-card elevation="10">
        <v-card-item class="pb-4">
            <div class="flex justify-between mb-3 align-center">
                <v-card-title class="text-h5 mb-0">Labor: $279.04</v-card-title>
                <v-btn variant="text" color="primary">View All</v-btn>
            </div>
            <div class="mt-4">
                <v-table class="products-table">
                    <template v-slot:default>
                        <thead class="bg-grey100">
                            <tr>
                                <th class="text-body-2">Job</th>
                                <th class="text-body-2">Hours</th>
                                <th class="text-body-2">Labor Cost</th>
                                <th class="text-body-2">%</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="month-item" v-for="item in LaborData" :key="item.id">
                                <td class="text-nowrap text-body-1">{{ item.name }}</td>
                                <td class="text-nowrap text-body-1">{{ item.hours }}</td>
                                <td class="text-nowrap text-body-1">${{ item.laborCost }}</td>
                                <td class="text-nowrap text-body-1">{{ item.percent }}</td>
                            </tr>
                            <tr class="month-item">
                                <td class="text-no-wrap text-h6">Totals</td>
                                <td class="text-no-wrap text-h6">39.07</td>
                                <td class="text-no-wrap text-h6">$279.04</td>
                                <td class="text-no-wrap text-h6"></td>
                            </tr>
                        </tbody>
                    </template>
                </v-table>
            </div>
        </v-card-item>
    </v-card>
</template>
