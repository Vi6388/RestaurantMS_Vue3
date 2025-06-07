<script setup lang="ts">
import { Icon } from '@iconify/vue';

</script>
<template>
    <v-card elevation="10" rounded="md" class="card-hover">
        <v-card-item>
            <v-card-title class="text-h5 mb-4">Net Sales</v-card-title>
            <v-row>
                <v-col cols="12" sm="6" md="3">
                    <v-card elevation="10" class="px-4 py-3" variant="outlined">
                        <div class="flex gap-3 align-center">
                            <v-avatar size="48" class="rounded-md bg-lightsecondary">
                                <Icon icon="mdi:calendar-month-outline" class="text-textSecondary" height="25" />
                            </v-avatar>
                            <div class="flex flex-column gap-1">
                                <div class="text-body-1 text-textSecondary">Net sales</div>
                                <h6 class="text-h6 heading">$185,454.25</h6>
                            </div>
                        </div>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <v-card elevation="10" class="px-4 py-3" variant="outlined">
                        <div class="flex gap-3 align-center">
                            <v-avatar size="48" class="rounded-md bg-lighterror">
                                <Icon icon="solar:dollar-linear" class="text-textSecondary" height="25" />
                            </v-avatar>
                            <div class="flex flex-column gap-1">
                                <div class="text-body-1 text-textSecondary">Avg.Ticket</div>
                                <h6 class="text-h6 heading">$978.52</h6>
                            </div>
                        </div>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <v-card elevation="10" class="px-4 py-3" variant="outlined">
                        <div class="flex gap-3 align-center">
                            <v-avatar size="48" class="rounded-md bg-grey100">
                                <Icon icon="mdi:close" class="text-textSecondary" height="25" />
                            </v-avatar>
                            <div class="flex flex-column gap-1">
                                <div class="text-body-1 text-textSecondary">Guests</div>
                                <h6 class="text-h6 heading">189</h6>
                            </div>
                        </div>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <v-card elevation="10" class="px-4 py-3" variant="outlined">
                        <div class="flex gap-3 align-center">
                            <v-avatar size="48" class="rounded-md bg-grey100">
                                <Icon icon="mdi:close" class="text-textSecondary" height="25" />
                            </v-avatar>
                            <div class="flex flex-column gap-1">
                                <div class="text-body-1 text-textSecondary">Tables</div>
                                <h6 class="text-h6 heading">60</h6>
                            </div>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="6" md="3">
                    <v-card elevation="10" class="px-4 py-3" variant="outlined">
                        <div class="flex gap-3 align-center">
                            <v-avatar size="48" class="rounded-md bg-lightsecondary">
                                <Icon icon="mdi:calendar-month-outline" class="text-textSecondary" height="25" />
                            </v-avatar>
                            <div class="flex flex-column gap-1">
                                <div class="text-body-1 text-textSecondary">Net sales</div>
                                <h6 class="text-h6 heading">$185,454.25</h6>
                            </div>
                        </div>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <v-card elevation="10" class="px-4 py-3" variant="outlined">
                        <div class="flex gap-3 align-center">
                            <v-avatar size="48" class="rounded-md bg-lighterror">
                                <Icon icon="solar:dollar-linear" class="text-textSecondary" height="25" />
                            </v-avatar>
                            <div class="flex flex-column gap-1">
                                <div class="text-body-1 text-textSecondary">Avg.Ticket</div>
                                <h6 class="text-h6 heading">$978.52</h6>
                            </div>
                        </div>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <v-card elevation="10" class="px-4 py-3" variant="outlined">
                        <div class="flex gap-3 align-center">
                            <v-avatar size="48" class="rounded-md bg-grey100">
                                <Icon icon="mdi:close" class="text-textSecondary" height="25" />
                            </v-avatar>
                            <div class="flex flex-column gap-1">
                                <div class="text-body-1 text-textSecondary">Guests</div>
                                <h6 class="text-h6 heading">189</h6>
                            </div>
                        </div>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <v-card elevation="10" class="px-4 py-3" variant="outlined">
                        <div class="flex gap-3 align-center">
                            <v-avatar size="48" class="rounded-md bg-grey100">
                                <Icon icon="mdi:close" class="text-textSecondary" height="25" />
                            </v-avatar>
                            <div class="flex flex-column gap-1">
                                <div class="text-body-1 text-textSecondary">Tables</div>
                                <h6 class="text-h6 heading">60</h6>
                            </div>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-card-item>
    </v-card>
</template>
