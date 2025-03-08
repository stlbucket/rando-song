<template>
  <div class="flex flex-col gap-1">
    <UButton @click="onGenerateSong">Generate Song</UButton>
    <UTable 
      :columns="[
        {
          // label: 'Attribute',
          key: 'name',
          class: 'w-[100px]'
        },
        {
          // label: 'Value',
          key: 'value',
          class: 'text-wrap w-[200px]'
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

      const keyCenter = keyCenters[randomIntFromInterval(0, 19)]
      const basicTonality = basicTonalities[randomIntFromInterval(0, 19)]
      let expandedTonality =  expandedToanalities[randomIntFromInterval(0, 19)]
      if (expandedTonality === 'dorian if minor, mixolydian if major') {
        if (basicTonality === 'minor') expandedTonality = 'dorian'
        else if (basicTonality === 'major') expandedTonality = 'mixolydian'
        else expandedTonality = 'mixed basic tonality'
      }

      const chordMovement = chordMovements[randomIntFromInterval(0, 19)]
      const tempo = tempos[randomIntFromInterval(0, 19)]

    let meter = meters[randomIntFromInterval(0, 19)]
    if (meter === 'odd') {
      const oddMeterTop = oddMeterTops[randomIntFromInterval(0,19)]
      const oddMeterBottom = oddMeterBottoms[randomIntFromInterval(0,19)]
      meter = `${oddMeterTop}/${oddMeterBottom}`
    }

    songParameters.value = [
      {name: 'Key Center', value: keyCenter},
      {name: 'Basic Tonality', value: basicTonality},
      {name: 'Expanded Tonality', value: expandedTonality},
      {name: 'Chord Movement', value: chordMovement},
      {name: 'Tempo', value: tempo},
      {name: 'Meter', value: meter},
  ]
  }
</script>