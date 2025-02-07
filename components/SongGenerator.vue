<template>
  <div class="flex flex-col gap-1">
    <UButton @click="onGenerateSong">Generate Song</UButton>
    <UTable 
      :columns="[
        {
          // label: 'Attribute',
          key: 'name',
          class: 'w-[400px]'
        },
        {
          // label: 'Value',
          key: 'value',
        }
      ]"
      :rows="songParameters"
      
    ></UTable>
  </div>
</template>

<script setup lang="ts">
  const defaultSongAttributes = [
    {name: 'Key Center', value: '?'},
    {name: 'Basic Tonality', value: '?'},
    {name: 'Expanded Tonality', value: '?'},
    {name: 'Chord Movement', value: '?'},
    {name: 'Tempo', value: '?'},
    {name: 'Meter', value: '?'},
    ]
  const songParameters = ref(defaultSongAttributes)

  const onGenerateSong = () => {
    function randomIntFromInterval(min, max) { // min and max included 
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    let meter = meters[randomIntFromInterval(0, 19)]
    if (meter === 'odd') {
      const oddMeterTop = oddMeterTops[randomIntFromInterval(0,19)]
      const oddMeterBottom = oddMeterBottoms[randomIntFromInterval(0,19)]
      meter = `${oddMeterTop}/${oddMeterBottom}`
    }

    songParameters.value = [
      {name: 'Key Center', value: keyCenters[randomIntFromInterval(0, 19)]},
      {name: 'Basic Tonality', value: basicTonalities[randomIntFromInterval(0, 19)]},
      {name: 'Expanded Tonality', value: expandedToanalities[randomIntFromInterval(0, 19)]},
      {name: 'Chord Movement', value: chordMovements[randomIntFromInterval(0, 19)]},
      {name: 'Tempo', value: tempos[randomIntFromInterval(0, 19)]},
      {name: 'Meter', value: meter},
  ]
  }
</script>