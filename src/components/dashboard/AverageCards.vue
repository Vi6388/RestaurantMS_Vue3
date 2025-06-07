<script setup lang="ts">
import { Icon } from '@iconify/vue';

</script>
<template>
    <v-card elevation="10" rounded="md" class="card-hover">
        <v-card-item>
            <v-row>
                <v-col cols="12" sm="6" md="3" lg="2">
                    <v-card elevation="10" class="px-4 py-3" variant="outlined">
                        <div class="flex justify-between gap-3 align-center mb-2">
                            <div class="text-body-2 text-textSecondary">Guest Average</div>
                            <div class="text-body-2 text-error flex align-center justify-center">
                                <Icon icon="mdi:arrow-down" height="20"></Icon>
                                <div>10.3%</div>
                            </div>
                        </div>
                        <h6 class="text-h6 heading">$23.48</h6>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="3" lg="2">
                    <v-card elevation="10" class="px-4 py-3" variant="outlined">
                        <div class="flex justify-between gap-3 align-center mb-2">
                            <div class="text-body-2 text-textSecondary">Guest</div>
                            <div class="text-body-2 text-success flex align-center justify-center">
                                <Icon icon="mdi:arrow-up" height="20"></Icon>
                                <div>5.6%</div>
                            </div>
                        </div>
                        <h6 class="text-h6 heading">38</h6>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="3" lg="2">
                    <v-card elevation="10" class="px-4 py-3" variant="outlined">
                        <div class="flex justify-between gap-3 align-center mb-2">
                            <div class="text-body-2 text-textSecondary">Check Average</div>
                            <div class="text-body-2 text-error flex align-center justify-center">
                                <Icon icon="mdi:arrow-down" height="20"></Icon>
                                <div>12.8%</div>
                            </div>
                        </div>
                        <h6 class="text-h6 heading">$23.48</h6>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="3" lg="2">
                    <v-card elevation="10" class="px-4 py-3" variant="outlined">
                        <div class="flex justify-between gap-3 align-center mb-2">
                            <div class="text-body-2 text-textSecondary">Checks</div>
                            <div class="text-body-2 text-success flex align-center justify-center">
                                <Icon icon="mdi:arrow-up" height="20"></Icon>
                                <div>8.6%</div>
                            </div>
                        </div>
                        <h6 class="text-h6 heading">38</h6>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="3" lg="2">
                    <v-card elevation="10" class="px-4 py-3" variant="outlined">
                        <div class="flex justify-between gap-3 align-center mb-2">
                            <div class="text-body-2 text-textSecondary">Voids</div>
                            <div class="text-body-2 text-error flex align-center justify-center">
                                <Icon icon="mdi:arrow-down" height="20"></Icon>
                                <div>100.0%</div>
                            </div>
                        </div>
                        <h6 class="text-h6 heading">$0.00</h6>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="3" lg="2">
                    <v-card elevation="10" class="px-4 py-3" variant="outlined">
                        <div class="flex justify-between gap-3 align-center mb-2">
                            <div class="text-body-2 text-textSecondary">Discounts</div>
                            <div class="text-body-2 text-success flex align-center justify-center">
                                <Icon icon="mdi:arrow-up" height="20"></Icon>
                                <div>0%</div>
                            </div>
                        </div>
                        <h6 class="text-h6 heading">$0.90</h6>
                    </v-card>
                </v-col>
            </v-row>
        </v-card-item>
    </v-card>
</template>
