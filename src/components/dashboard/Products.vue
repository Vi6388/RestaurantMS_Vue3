<script setup lang="ts">
import { ProductsData } from '@/data/Dashboard';
</script>
<template>
    <v-card elevation="10">
        <v-card-item class="pb-4">
            <div class="flex justify-between mb-3 align-center">
                <v-card-title class="text-h5 mb-0">Products</v-card-title>
                <v-btn variant="text" color="primary">View All</v-btn>
            </div>
            <div class="mt-4">
                <v-table class="products-table">
                    <template v-slot:default>
                        <thead class="bg-grey100">
                            <tr>
                                <th class="text-body-1">Pescados</th>
                                <th class="text-body-1">Qty</th>
                                <th class="text-body-1">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in ProductsData" :key="item.id" class="month-item">
                                <td>
                                    <p class="text-nowrap text-body-1 text-textSecondary">
                                        {{ item.pescados }}
                                    </p>
                                </td>
                                <td>
                                    <p class="text-nowrap text-body-1 text-textSecondary">
                                        {{ item.qty }}
                                    </p>
                                </td>
                                <td>
                                    <p class="text-nowrap text-body-1 text-textSecondary">
                                        {{ item.amount }}
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-table>
                <v-table class="products-table">
                    <template v-slot:default>
                        <thead class="bg-grey100">
                            <tr>
                                <th class="text-body-1">Pescados</th>
                                <th class="text-body-1">Qty</th>
                                <th class="text-body-1">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in ProductsData" :key="item.id" class="month-item">
                                <td>
                                    <p class="text-nowrap text-body-1 text-textSecondary">
                                        {{ item.pescados }}
                                    </p>
                                </td>
                                <td>
                                    <p class="text-nowrap text-body-1 text-textSecondary">
                                        {{ item.qty }}
                                    </p>
                                </td>
                                <td>
                                    <p class="text-nowrap text-body-1 text-textSecondary">
                                        {{ item.amount }}
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-table>
            </div>
        </v-card-item>
    </v-card>
</template>
