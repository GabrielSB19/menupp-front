<template>
  <div class="container">
    <p class="welcome-text">
      Welcome, Upload and Download the pictures you want
    </p>
    <div class="image-container">
      <input
        type="file"
        @change="handleFileChange"
        accept="image/*"
        class="file-input"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import imagesService from "../services/imagesService";

const emit = defineEmits();

const selectedImage = ref(null);

const handleFileChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      selectedImage.value = e.target.result;
    };
    reader.readAsDataURL(file);
    imagesService.uploadImages(file);
    emit("uploaded");
  }
};
</script>

<style scoped>
/* Estilos generales */
.container {
  max-width: 100%;
  padding: 20px;
  margin: 0 auto;
  box-sizing: border-box;
}

.welcome-text {
  font-size: 1.5rem;
  text-align: center;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.file-input {
  width: 100%;
  max-width: 300px; /* Máximo ancho para evitar que se extienda demasiado en pantallas grandes */
  padding: 10px;
  box-sizing: border-box;
}

@media screen and (max-width: 768px) {
  /* Estilos para pantallas más pequeñas */
  .container {
    padding: 10px;
  }
  .welcome-text {
    font-size: 1.2rem;
  }
}
</style>
