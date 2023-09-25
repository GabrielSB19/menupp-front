<template>
  <div class="contained">
    <div class="contained-register">
      <p>Sign up Screen</p>
      <div>
        <q-input
          class="input-text"
          outlined
          v-model="myEmail"
          label="Email"
          @change="handleUsername"
        />
        <q-input
          class="input-pwd"
          v-model="password"
          filled
          :type="isPwd ? 'password' : 'text'"
          hint="Password"
          @change="handlePassword"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
      </div>
      <div class="contained-register-btn">
        <q-btn color="primary" label="Sing up" @click="singup" />
      </div>
      <p class="p-login" @click="toLogin">Ya tengo una cuenta</p>
    </div>
  </div>
</template>

<script setup>
import { Notify } from "quasar";
import { ref } from "vue";
import { useRouter } from "vue-router";
import auth from "../services/auth.js";

let myEmail = ref("");
let password = ref("");
let isPwd = ref(true);

const handleUsername = (e) => {
  myEmail.value = e;
  console.log(myEmail.value);
};

const handlePassword = (e) => {
  password.value = e;
  console.log(password.value);
};
const showNotifErr = () => {
  Notify.create({
    message: "Ha ocurrido un error en tu registro.",
    color: "red",
  });
};
const showNotifSuc = () => {
  Notify.create({
    message: "Se ha registrado correctamente.",
    color: "primary",
  });
};

const router = useRouter();

const singup = async (e) => {
  e.preventDefault();
  try {
    const user = await auth.singup(myEmail.value, password.value);
    localStorage.setItem("token", JSON.stringify(user.data.token));
    showNotifSuc();
    router.push("/");
  } catch (error) {
    console.log(error);
    showNotifErr();
  }
};

const toLogin = () => {
  router.push("/login");
};
</script>

<style scoped>
.contained {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
}

.contained-register {
  width: 100%;
  max-width: 400px; /* Ancho máximo del formulario */
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}
p {
  font-size: 24px;
  margin-bottom: 20px;
}
.input-text {
  margin-bottom: 15px;
}

.input-pwd {
  margin-bottom: 15px;
}

.contained-register-btn {
  margin-top: 40px;
  width: 100%;
}

.p-login {
  margin-top: 20px;
  font-size: 14px;
  color: #007bff;
  cursor: pointer;
}
</style>
