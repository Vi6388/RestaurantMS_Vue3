<script setup lang="ts">
import { computed } from 'vue';
/* Chart */
const chartOptions = computed(() => {
    return {
        chart: {
            toolbar: {
                show: false
            },
            type: 'bar',
            fontFamily: 'inherit',
            foreColor: '#adb0bb',
            height: 285,
            stacked: true,
        },
        colors: ['rgba(var(--v-theme-textSecondary), 0.4)', 'rgba(var(--v-theme-error))'],
        plotOptions: {
            bar: {
                horizontal: true,
                columnWidth: '80%',
                borderRadius: 0,
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        grid: {
            show: true,
            padding: {
                top: 0,
                bottom: 0,
                right: 0
            },
            borderColor: 'rgba(0,0,0,0.05)',
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: true
                }
            }
        },
        yaxis: {
            min: 0,
            max: 25,
            tickAmount: 4
        },
        xaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            labels: {
                style: { fontSize: '13px', colors: '#adb0bb', fontWeight: '400' }
            }
        },
        tooltip: {
            theme: 'light'
        }
    };
});

const Chart = {
    series: [
        {
            name: '2025',
            data: [12, 25, 10, 16, 11, 23, 19]
        }
    ]
};
</script>
<template>
    <v-card elevation="10">
        <v-card-item>
            <div class="d-md-flex justify-space-between mb-mb-0 mb-3">
                <v-card-title class="text-h5">Time of the day</v-card-title>
                <div>
                    <v-btn variant="text" color="primary">View All</v-btn>
                </div>
            </div>
            <div class="mx-n1 mt-4 pt-2">
                <apexchart type="bar" height="285" class="rounded-bars" :options="chartOptions" :series="Chart.series">
                </apexchart>
            </div>
        </v-card-item>
    </v-card>
</template>
