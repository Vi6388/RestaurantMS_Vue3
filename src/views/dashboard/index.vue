<script setup lang="ts">
/*Call Components*/
import DayOfWeek from '@/components/dashboard/DayOfWeek.vue';
import Products from '@/components/dashboard/Products.vue';
import Searchbar from '@/components/dashboard/Searchbar.vue';
import NetSales from '@/components/dashboard/NetSales.vue';
import TimeOfDayChart from '@/components/dashboard/TimeOfDayChart.vue';
import SaleComparison from '@/components/dashboard/SaleComparison.vue';
import NetSalesProducts from '@/components/dashboard/NetSalesProducts.vue';
import OrderTable from '@/components/dashboard/OrderTable.vue';
import MethtodOfPayments from '@/components/dashboard/MethtodOfPayments.vue';
import AverageCards from '@/components/dashboard/AverageCards.vue';
import CostOfSalesAndLabor from '@/components/dashboard/CostOfSalesAndLabor.vue';
import LaborTable from '@/components/dashboard/LaborTable.vue';
import PrimeCostAndInventoryValues from '@/components/dashboard/PrimeCostAndInventoryValues.vue';
import InventoryRotationChart from '@/components/dashboard/InventoryRotationChart.vue';
import StarItems from '@/components/dashboard/StarItems.vue';
import DiscountAlert from '@/components/dashboard/DiscountAlert.vue';
import StarEmployees from '@/components/dashboard/StarEmployees.vue';
import VoidAlerts from '@/components/dashboard/VoidAlerts.vue';
</script>

<template>
    <v-row>
        <v-col cols="12"><Searchbar /></v-col>
        <v-col cols="12"><NetSales /></v-col>
        <v-col cols="12"><TimeOfDayChart /></v-col>
        <v-col cols="12" lg="6"><DayOfWeek /></v-col>
        <v-col cols="12" lg="6"><SaleComparison /></v-col>
        <v-col cols="12" lg="6"><Products /></v-col>
        <v-col cols="12" lg="6"><NetSalesProducts /> </v-col>
        <v-col cols="12" lg="6"><OrderTable /></v-col>
        <v-col cols="12" lg="6"><MethtodOfPayments /></v-col>
        <v-col cols="12"><AverageCards /></v-col>
        <v-col cols="12" lg="6"><CostOfSalesAndLabor /></v-col>
        <v-col cols="12" lg="6"><LaborTable /></v-col>
        <v-col cols="12" lg="6"><PrimeCostAndInventoryValues /></v-col>
        <v-col cols="12" lg="6"><InventoryRotationChart /></v-col>
        <v-col cols="12" md="4" lg="3"><StarItems /></v-col>
        <v-col cols="12" md="4" lg="3"><VoidAlerts /></v-col>
        <v-col cols="12" md="4" lg="3"><DiscountAlert /></v-col>
        <v-col cols="12" md="4" lg="3"><StarEmployees /></v-col>
    </v-row>
</template>
