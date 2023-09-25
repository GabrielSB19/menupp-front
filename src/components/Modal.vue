<template>
  <q-dialog v-model="modalVisible" class="modal-dialog">
    <q-card class="modal-content modal-dialog">
      <q-card-section>
        <div class="modal-title">¿What do you want to do?</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <img :src="mediaLink" :alt="alt" class="modal-image" />
      </q-card-section>
      <q-card-section class="flex flex-center">
        <a :href="mediaLink" download>
          <q-btn
            color="primary"
            @click="closeModal"
            class="modal-button modal-button-primary"
            >Download</q-btn
          >
        </a>
        <q-btn
          color="red"
          @click="deleteImage(name)"
          class="modal-button modal-button-danger"
          >Delete</q-btn
        >
      </q-card-section>
      <q-card-actions align="center">
        <q-btn
          color="primary"
          @click="closeModal"
          class="modal-button modal-button-primary"
          >Close</q-btn
        >
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import imagesService from "src/services/imagesService";
import { ref, watch } from "vue";

let modalVisible = ref(false);

const props = defineProps({
  mediaLink: String,
  alt: String,
  name: String,
  showModal: Boolean,
});

watch(
  () => props.showModal,
  (newVal) => {
    modalVisible.value = newVal;
  }
);

const emit = defineEmits();

const closeModal = () => {
  modalVisible.value = false;
  emit("close");
};

const deleteImage = (name) => {
  console.log(name);
  const fileName = name;
  console.log(fileName);
  imagesService.deleteImage(fileName);
  emit("deleted");
  closeModal();
};
</script>
<style scoped>
.modal-dialog {
  background-color: #fff; /* Cambia el color de fondo */
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5); /* Agrega sombra */
  border-radius: 10px; /* Bordes redondeados */
}

.modal-title {
  font-size: 1.5rem; /* Tamaño de fuente más grande */
  font-weight: bold; /* Texto en negrita */
  margin-bottom: 10px; /* Agregar espacio inferior */
}

.modal-button {
  margin-right: 10px; /* Espacio entre botones */
  padding: 10px 20px; /* Aumentar el espacio interno del botón */
}

.modal-button-primary {
  background-color: #007bff; /* Color de fondo azul */
  color: #fff; /* Texto en blanco */
}

.modal-button-danger {
  background-color: #dc3545; /* Color de fondo rojo */
  color: #fff; /* Texto en blanco */
}

.modal-image {
  max-width: 100%;
  height: auto;
  display: block; /* Para centrar la imagen horizontalmente */
  margin: 0 auto; /* Para centrar la imagen horizontalmente */
  width: 600px; /* Ancho personalizado */
  height: auto; /* Altura automática */
}

.modal-content {
  padding: 20px; /* Añadir espacio interno */
}
</style>
