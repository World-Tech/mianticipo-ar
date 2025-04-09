<template>
  <div class="full-container-onboarding">
    <div>
      <NavbarFlowVue />
    </div>

    <div class="important-section">
      <h1 class="text-important">¡Importante!</h1>
      <h2 class="text-agilize">Para agilizar el proceso</h2>
      <p class="text-aseg">Asegúrate de tener a mano:</p>

      <div class="cards-container">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="card-onborad"
          :class="{ visible: index <= currentCard }"
          :style="{ 'transition-delay': `${index * 0.3}s` }"
        >
          <div class="number">{{ index + 1 }}</div>
          <div class="content">
            <h3 class="title-card">{{ item.title }}</h3>
            <p class="description-card">{{ item.description }}</p>
          </div>
        </div>
      </div>

      <p class="important-note">
        ¡Son indispensables para poder obtener el Préstamo!
      </p>

      <div class="container-button-onboard">
        <NormalButtonGreen />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import "../../styles/FlowStyles/OnboardingView.scss";
import NavbarFlowVue from "../../components/Navbars/NavbarFlow.vue";
import NormalButtonGreen from '../../components/ButtonsComps/NormalButtonGreen.vue';

export default {
  components: {
    NavbarFlowVue,
    NormalButtonGreen
  },
  setup() {
    const items = ref([
      {
        title: "DNI",
        description:
          "Recuerda tener tu documento físico para validar la identidad",
      },
      {
        title: "Cuenta bancaria",
        description:
          "Es importante para realizar la transferencia del préstamo",
      },
      {
        title: "Celular personal",
        description: "Te estaremos llamando para finalizar la solicitud",
      },
      {
        title: "Email personal",
        description:
          "Te estaremos enviando información para finalizar tu solicitud",
      },
    ]);

    const currentCard = ref(-1);

    onMounted(() => {
      const showCardsSequentially = () => {
        let index = 0;
        const interval = setInterval(() => {
          if (index < items.value.length) {
            currentCard.value = index;
            index++;
          } else {
            clearInterval(interval);
          }
        }, 400);
      };

      showCardsSequentially();
    });

    return {
      items,
      currentCard,
    };
  },
};
</script>
