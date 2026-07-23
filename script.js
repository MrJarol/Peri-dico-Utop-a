console.log("script cargado");
import { db } from "./firebase.js";

console.log("SCRIPT FUNCIONANDO");

import {
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

document.querySelectorAll(".reacciones").forEach((reaccion, index) => {

    const btnLike = reaccion.querySelector(".btn-like");
    const contador = reaccion.querySelector(".contador");
    const enviar = reaccion.querySelector(".enviar");
    const btnComentar = reaccion.querySelector(".btn-comentar");
    const cajaComentario = reaccion.querySelector(".caja-comentario");
    const listaComentarios = reaccion.querySelector(".lista-comentarios");
    const texto = reaccion.querySelector(".texto-comentario");
    const nombre = reaccion.querySelector(".nombre-usuario");
    const lista = reaccion.querySelector(".lista-comentarios");

    const nombreNoticia = reaccion.dataset.noticia;
    const likeRef = doc(db, "likes", nombreNoticia);

    // Ocultar comentarios al iniciar
    cajaComentario.style.display = "none";
    listaComentarios.style.display = "none";

    // Cargar datos al iniciar
    cargarComentarios();
    cargarLikes();

    const clave = "like_" + nombreNoticia;

    if (localStorage.getItem(clave)) {
        btnLike.classList.add("activo");
    }

    // Mostrar / ocultar comentarios
    btnComentar.addEventListener("click", () => {

        if (cajaComentario.style.display === "none") {
            cajaComentario.style.display = "flex";
            listaComentarios.style.display = "block";
        } else {
            cajaComentario.style.display = "none";
            listaComentarios.style.display = "none";
        }

    });

    // Likes
    btnLike.addEventListener("click", async () => {

    const clave = "like_" + nombreNoticia;

    // Revisar si ya dio like
    if (localStorage.getItem(clave)) {
        alert("Ya le diste Me gusta a esta noticia.");
        return;
    }

    await updateDoc(likeRef, {
        likes: increment(1)
    });

    // Guardar que ya dio like
    localStorage.setItem(clave, "true");

    btnLike.classList.add("activo");

    cargarLikes();

    });

    // Enviar comentario
    enviar.addEventListener("click", async () => {

        if (texto.value.trim() === "" || nombre.value.trim() === "") {
            alert("Escribe tu nombre y comentario");
            return;
        }

        try {

            await addDoc(collection(db, "comentarios"), {
                noticia: nombreNoticia,
                usuario: nombre.value,
                comentario: texto.value,
                fecha: new Date()
            });

            alert("Comentario guardado correctamente");

            texto.value = "";
            nombre.value = "";

            cargarComentarios();

        } catch (error) {

            console.error("Error Firebase:", error);

        }

    });

    // ==========================
    // Cargar comentarios
    // ==========================
    async function cargarComentarios() {

        lista.innerHTML = "";

        const datos = await getDocs(collection(db, "comentarios"));

        datos.forEach((docSnap) => {

            const comentario = docSnap.data();

            if (comentario.noticia === nombreNoticia) {

                lista.innerHTML += `
                    <div class="comentario">
                        <div class="contenido">
                            <strong>${comentario.usuario}</strong>
                            <p>${comentario.comentario}</p>
                        </div>
                    </div>
                `;

            }

        });

    }

    // ==========================
    // Cargar likes
    // ==========================
    async function cargarLikes() {

        const documento = await getDoc(likeRef);

        if (!documento.exists()) {

            await setDoc(likeRef, {
                likes: 0
            });

            contador.textContent = 0;
            return;

        }

        contador.textContent = documento.data().likes;

    }

console.log("script cargado");
import { db } from "./firebase.js";

import {
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

document.querySelectorAll(".reacciones").forEach((reaccion, index) => {

    const btnLike = reaccion.querySelector(".btn-like");
    const contador = reaccion.querySelector(".contador");
    const enviar = reaccion.querySelector(".enviar");
    const btnComentar = reaccion.querySelector(".btn-comentar");
    const cajaComentario = reaccion.querySelector(".caja-comentario");
    const listaComentarios = reaccion.querySelector(".lista-comentarios");
    const texto = reaccion.querySelector(".texto-comentario");
    const nombre = reaccion.querySelector(".nombre-usuario");
    const lista = reaccion.querySelector(".lista-comentarios");

    const nombreNoticia = reaccion.dataset.noticia;
    const likeRef = doc(db, "likes", nombreNoticia);

    // Ocultar comentarios al iniciar
    cajaComentario.style.display = "none";
    listaComentarios.style.display = "none";

    // Cargar datos al iniciar
    cargarComentarios();
    cargarLikes();

    const clave = "like_" + nombreNoticia;

    if (localStorage.getItem(clave)) {
        btnLike.classList.add("activo");
    }

    // Mostrar / ocultar comentarios
    btnComentar.addEventListener("click", () => {

        if (cajaComentario.style.display === "none") {
            cajaComentario.style.display = "flex";
            listaComentarios.style.display = "block";
        } else {
            cajaComentario.style.display = "none";
            listaComentarios.style.display = "none";
        }

    });

    // Likes
    btnLike.addEventListener("click", async () => {

    const clave = "like_" + nombreNoticia;

    // Revisar si ya dio like
    if (localStorage.getItem(clave)) {
        alert("Ya le diste Me gusta a esta noticia.");
        return;
    }

    await updateDoc(likeRef, {
        likes: increment(1)
    });

    // Guardar que ya dio like
    localStorage.setItem(clave, "true");

    btnLike.classList.add("activo");

    cargarLikes();

    });

    // Enviar comentario
    enviar.addEventListener("click", async () => {

        if (texto.value.trim() === "" || nombre.value.trim() === "") {
            alert("Escribe tu nombre y comentario");
            return;
        }

        try {

            await addDoc(collection(db, "comentarios"), {
                noticia: nombreNoticia,
                usuario: nombre.value,
                comentario: texto.value,
                fecha: new Date()
            });

            alert("Comentario guardado correctamente");

            texto.value = "";
            nombre.value = "";

            cargarComentarios();

        } catch (error) {

            console.error("Error Firebase:", error);

        }

    });

    // ==========================
    // Cargar comentarios
    // ==========================
    async function cargarComentarios() {

        lista.innerHTML = "";

        const datos = await getDocs(collection(db, "comentarios"));

        datos.forEach((docSnap) => {

            const comentario = docSnap.data();

            if (comentario.noticia === nombreNoticia) {

                lista.innerHTML += `
                    <div class="comentario">
                        <div class="contenido">
                            <strong>${comentario.usuario}</strong>
                            <p>${comentario.comentario}</p>
                        </div>
                    </div>
                `;

            }

        });

    }

    // ==========================
    // Cargar likes
    // ==========================
    async function cargarLikes() {

        const documento = await getDoc(likeRef);

        if (!documento.exists()) {

            await setDoc(likeRef, {
                likes: 0
            });

            contador.textContent = 0;
            return;

        }

        contador.textContent = documento.data().likes;

    }

});