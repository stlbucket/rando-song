<template>
  <UContainer>
    <UCard class="mt-10">
      <template #header>
        <div class="flex justify-center">
          <div class="flex justify-center text-2xl">EXTRA THICK DICE JAM</div>
        </div>
      </template>
      <UTabs :items="tabItems">
        <template #song-generator="{ item }">
          <SongGenerator />
        </template>
        <template #rules="{ item }">
          <Rules />
        </template>
      </UTabs>
    </UCard>
  </UContainer>
</template>

<script lang="ts" setup>
  const tabItems = [
    {
      slot: 'song-generator',
      label: 'Song Generator'
    },
    {
      slot: 'rules',
      label: 'Rules'
    },
  ]
</script>