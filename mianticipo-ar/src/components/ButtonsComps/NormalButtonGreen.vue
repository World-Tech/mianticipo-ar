<template>
  <button
    class="custom-button"
    :style="{ backgroundColor: color }"
    :disabled="disabled"
  >
    {{ text }}
  </button>
</template>

<script setup>
import { defineProps } from "vue";
import '../../styles/ButtonsStyles/NormalButtonGreen.scss';

const props = defineProps({
  text: {
    type: String,
    required: true,
    default: "Continuar",
  },
  color: {
    type: String,
    default: "#1AC677",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>
