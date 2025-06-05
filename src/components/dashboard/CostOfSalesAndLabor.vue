<script setup lang="ts">
</script>
<template>
    <v-card elevation="10">
        <v-card-item class="pb-4">
            <div class="d-md-flex justify-space-between mb-mb-0 mb-3">
                <v-card-title class="text-h5 mb-0 pt-1">Cost of sales and labor</v-card-title>
                <v-btn variant="text" color="primary">View All</v-btn>
            </div>
            <div class="mt-4">
                <v-table class="products-table">
                    <template v-slot:default>
                        <thead class="bg-grey100">
                            <tr>
                                <th class="text-h6" colspan="2">Cost of Sales</th>
                                <th class="text-h6" colspan="3">Cost of Labor</th>
                            </tr>
                            <tr>
                                <th class="text-body-1">FOOD</th>
                                <th class="text-body-1">BAR</th>
                                <th class="text-body-1">ADMIN</th>
                                <th class="text-body-1">STAFF</th>
                                <th class="text-body-1">TOTAL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="month-item">
                                <td class="text-no-wrap text-body-1">35%</td>
                                <td class="text-no-wrap text-body-1">39%</td>
                                <td class="text-no-wrap text-body-1">10%</td>
                                <td class="text-no-wrap text-body-1">12%</td>
                                <td class="text-no-wrap text-body-1">22%</td>
                            </tr>
                            <tr class="month-item">
                                <td class="text-no-wrap text-body-1 text-textSecondary">$35,875.00</td>
                                <td class="text-no-wrap text-body-1 text-textSecondary">$45,789.47</td>
                                <td class="text-no-wrap text-body-1 text-textSecondary">$28,000.00</td>
                                <td class="text-no-wrap text-body-1 text-textSecondary">$35,789.00</td>
                                <td class="text-no-wrap text-body-1 text-textSecondary">$63,378.12</td>
                            </tr>
                        </tbody>
                    </template>
                </v-table>
            </div>
        </v-card-item>
    </v-card>
</template>
