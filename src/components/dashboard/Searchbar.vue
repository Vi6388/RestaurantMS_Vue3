<script setup lang="ts">
import { ref } from 'vue';
const select = ref('Select Store');
const items = ref(['Store 1', 'Store 2', 'Store 3']);
</script>
<template>
    <v-card elevation="10" rounded="md" class="card-hover">
        <v-card-item>
            <div class="d-flex justify-space-between mb-mb-0 flex-md-row flex-column ga-2">
                <div class="d-flex md:justify-space-between ga-2">
                    <v-select v-model="select" :items="items" variant="outlined" density="compact" class="text-body-1"
                        hide-details></v-select>
                    <v-btn variant="outlined" color="primary">COMPARE BRANCHE</v-btn>
                </div>
                <div>
                    <v-text-field variant="outlined" type="date" density="compact" hide-details model-value="2025-06-04"
                        color="primary"></v-text-field>
                </div>
            </div>
        </v-card-item>
    </v-card>
</template>
