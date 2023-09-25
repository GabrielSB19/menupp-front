<template>
  <InputImage @uploaded="updateImages" />
  <div class="flex flex-center">
    <div
      class="image-card"
      v-for="(image, index) in images"
      :key="index"
      @click="openModal(image.mediaLink, image.alt, image.name)"
    >
      <img :src="image.mediaLink" :alt="image.alt" class="card-image" />
    </div>
  </div>
  <Modal
    :media-link="modalMediaLink"
    :alt="modalAlt"
    :name="modalName"
    :show-modal="showModal"
    @close="showModal = false"
    @deleted="updateImages"
  />
</template>

<script setup>
import InputImage from "./InputImage.vue";
import imagesService from "src/services/imagesService";
import Modal from "src/components/Modal.vue";
import { onMounted, ref, watch } from "vue";

let images = ref([]);

const modalMediaLink = ref("");
const modalAlt = ref("");
const modalName = ref("");
const showModal = ref(false);

const getImages = async () => {
  const res = await imagesService.getImages();
  res.data.map((img) => {
    images.value.push(img);
  });
};

const openModal = (mediaLink, alt, nameImg) => {
  modalMediaLink.value = mediaLink;
  modalAlt.value = alt;
  modalName.value = nameImg;
  showModal.value = true;
};

const updateImages = async () => {
  await getImages();
  location.reload();
};

onMounted(() => {
  getImages();
});
</script>

<style scoped>
.image-card {
  width: 100%;
  max-width: 720px; /* Tamaño máximo de la tarjeta */
  margin: 20px; /* Espacio entre las tarjetas */
  transition: transform 0.3s; /* Transición suave en el hover */
}

.image-card:hover {
  transform: scale(1.05); /* Efecto de escala en el hover para destacar */
  cursor: pointer;
}

.card-image {
  width: 100%;
  height: auto;
}

/* Estilos adicionales para hacerlo responsive */
@media (max-width: 768px) {
  .image-card {
    max-width: 100%; /* En dispositivos más pequeños, ocupa todo el ancho */
  }
}
</style>
