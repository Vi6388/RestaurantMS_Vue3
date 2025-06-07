<script setup lang="ts">
import { PrimeCostData } from '@/data/Dashboard';
</script>
<template>
    <v-card elevation="10">
        <v-card-item class="pb-4">
            <div class="flex justify-between mb-3 align-center">
                <v-card-title class="text-h5 mb-0">Prime Cost & Inventory Values</v-card-title>
                <v-btn variant="text" color="primary">View All</v-btn>
            </div>
            <div class="mt-4">
                <v-table class="products-table">
                    <template v-slot:default>
                        <thead class="bg-grey100">
                            <tr>
                                <th class="text-body-2">Prime Cost</th>
                                <th class="text-body-2"></th>
                                <th class="text-body-2">Inventory Value</th>
                                <th class="text-body-2">Inventory Rotation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="month-item" v-for="item in PrimeCostData" :key="item.id">
                                <td class="text-nowrap text-body-1">{{ item.primeCost }}</td>
                                <td class="text-nowrap text-body-1">{{ item.name }}</td>
                                <td class="text-nowrap text-body-1">{{ item.inventoryValue }}</td>
                                <td class="text-nowrap text-body-1">{{ item.inventoryRotation }}</td>
                            </tr>
                        </tbody>
                    </template>
                </v-table>
            </div>
        </v-card-item>
    </v-card>
</template>
