<script setup lang="ts">
import { computed } from 'vue';
/* Chart */
const chartOptions = computed(() => {
    return {
        chart: {
            toolbar: {
                show: false
            },
            type: 'line',
            fontFamily: 'inherit',
            foreColor: '#adb0bb',
            height: 285,
            stacked: true,
            offsetX: -15
        },
        colors: ['rgba(var(--v-theme-warning))', 'rgba(var(--v-theme-success))'],
        plotOptions: {
            bar: {
                horizontal: false,
                barHeight: '60%',
                columnWidth: '15%',
                borderRadius: [6],
                borderRadiusApplication: 'end',
                borderRadiusWhenStacked: 'all'
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
            max: 1000,
            tickAmount: 5
        },
        xaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            categories: ['09 am', '10 am', '11 am', '12 pm', '01 pm', '02 pm', '03 pm', '04 pm', '05 pm', '06 pm', '07 pm', '08 pm', '09 pm'],
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
            data: [120, 250, 400, 360, 110, 109, 120, 250, 400, 360, 110, 109, 530]
        },
        {
            name: '2025',
            data: [120, 501, 410, 316, 511, 110, 501, 410, 316, 511, 110, 225, 523]
        },
    ]
};
</script>
<template>
    <v-card elevation="10">
        <v-card-item>
            <div class="flex justify-between mb-3 align-center">
                <v-card-title class="text-h5 mb-0">Sale comparison</v-card-title>
                <div>
                    <v-btn variant="text" color="primary">View All</v-btn>
                </div>
            </div>
            <div class="mx-n1 mt-4 pt-2">
                <div class="flex justify-center gap-4">
                    <div class="flex justify-center gap-3">
                        <div class="bg-warning px-1 py-1">
                            <div class="bg-white h-[10px] w-10"></div>
                        </div>
                        <div class="text-body-2">06/05/2025</div>
                    </div>
                    <div class="flex justify-center gap-3">
                        <div class="bg-success px-1 py-1">
                            <div class="bg-white h-[10px] w-10"></div>
                        </div>
                        <div class="text-body-2">06/05/2025</div>
                    </div>
                </div>
                <apexchart type="line" height="285" class="rounded-bars" :options="chartOptions" :series="Chart.series">
                </apexchart>
            </div>
        </v-card-item>
    </v-card>
</template>
