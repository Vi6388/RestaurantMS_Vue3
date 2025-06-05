<script setup lang="ts">
import { NetSalesData, NetSalesDayPartData } from '@/data/Dashboard';
</script>
<template>
    <v-card elevation="10">
        <v-card-item class="pb-4">
            <div class="d-md-flex justify-space-between mb-mb-0 mb-3">
                <v-card-title class="text-h5 mb-0 pt-1">New Sales: $892.31</v-card-title>
                <v-btn variant="text" color="primary">View All</v-btn>
            </div>
            <div class="mt-4">
                <v-table class="products-table">
                    <template v-slot:default>
                        <thead class="bg-grey100">
                            <tr>
                                <th class="text-body-1">Category</th>
                                <th class="text-body-1 text-right">Sales</th>
                                <th class="text-body-1 text-right">Voids</th>
                                <th class="text-body-1 text-right">Actual</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in NetSalesData" :key="item.id" class="month-item">
                                <td>
                                    <p class="text-no-wrap text-body-1 text-textSecondary">
                                        ({{ item.category }})
                                    </p>
                                </td>
                                <td>
                                    <p class="text-no-wrap text-body-1 text-textSecondary text-right">
                                        {{ item.sales }}
                                    </p>
                                </td>
                                <td>
                                    <p class="text-no-wrap text-body-1 text-textSecondary text-right">
                                        {{ item.voids }}
                                    </p>
                                </td>
                                <td>
                                    <p class="text-no-wrap text-body-1 text-textSecondary text-right">
                                        {{ item.actual }}
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h3>
                                        Total
                                    </h3>
                                </td>
                                <td>
                                    <h3 class="text-right">
                                        $893.21
                                    </h3>
                                </td>
                                <td>
                                    <h3 class="text-right">
                                        $0.00
                                    </h3>
                                </td>
                                <td>
                                    <h3 class="text-right">
                                        $893.21
                                    </h3>
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-table>

                <v-table class="products-table">
                    <template v-slot:default>
                        <thead class="bg-grey100">
                            <tr>
                                <th class="text-body-1">Day Part</th>
                                <th class="text-body-1 text-right">Sales</th>
                                <th class="text-body-1 text-right">Voids</th>
                                <th class="text-body-1 text-right">Actual</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in NetSalesDayPartData" :key="item.id" class="month-item">
                                <td>
                                    <p class="text-no-wrap text-body-1 text-textSecondary">
                                        {{ item.category }}
                                    </p>
                                </td>
                                <td>
                                    <p class="text-no-wrap text-body-1 text-textSecondary text-right">
                                        {{ item.sales }}
                                    </p>
                                </td>
                                <td>
                                    <p class="text-no-wrap text-body-1 text-textSecondary text-right">
                                        {{ item.voids }}
                                    </p>
                                </td>
                                <td>
                                    <p class="text-no-wrap text-body-1 text-textSecondary text-right">
                                        {{ item.actual }}
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h3>
                                        Total
                                    </h3>
                                </td>
                                <td>
                                    <h3 class="text-right">
                                        $893.21
                                    </h3>
                                </td>
                                <td>
                                    <h3 class="text-right">
                                        $0.00
                                    </h3>
                                </td>
                                <td>
                                    <h3 class="text-right">
                                        $893.21
                                    </h3>
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-table>
            </div>
        </v-card-item>
    </v-card>
</template>
