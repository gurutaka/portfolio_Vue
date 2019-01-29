<template>
  <transition name="modal" appear>
    <div class="modal modalOverlay" @click.self="$emit('close')">
      <div class="modalWindow">
        <div class="modalContent">
          <div class="imgWrapper">
            <img :src="modalInfo.imgSrc">
          </div>
          <div class="wrapperModalText">
            <h3>{{modalInfo.title}}</h3>

            <p class="modalText">{{modalInfo.text}}</p>
            <div>
              <i class="fas fa-link"></i>
              <a :href="modalInfo.url" target="”_blank”">{{modalInfo.urlTitle}}</a>
            </div>
          </div>
        </div>
        <footer class="modalFooter">
          <div>
            <button @click="$emit('close')">Close</button>
          </div>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Modal',
  props: ['modalTitle', 'modalText', 'modalImgSrc'],
  computed: mapGetters({
    'modalInfo': 'getModalInfo'
  })
}
</script>

<style scoped>
.contactList > li + li {
  margin-top: 10px;
}

.wrapperModalText {
  word-break: break-all;
  text-align: left;
  line-height: 1.2rem;
  padding-left: 20px;
  width: 300px;
}

.modalText {
  white-space: pre-wrap;
  line-height: 1.2rem;
}

.modalOverlay {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
}

.modalWindow {
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
}

.modalContent {
  padding: 10px 20px;
  display: flex;
  width: 500px;
}

.modalFooter {
  background: #ccc;
  padding: 10px;
  text-align: right;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.6s;
}

.modal-leave-active {
  transition: opacity 0.6s ease 0.3s;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.imgWrapper img {
  display: block;
  width: auto;
  height: 200px;
  margin: 0 auto;
}

.imgWrapper {
  overflow: hidden;
  width: 200px;
}

ul {
  list-style: none;
  padding: 0;
}

.fa-link,
a {
  font-size: 12px;
  color: #4072b3;
}

a:hover {
  color: #6088c6;
  font-weight: bold;
}

button {
  position: relative;
  display: inline-block;
  padding: 0.25em 0.5em;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  background: #6088c6; /*色*/
  border: solid 1px #4072b3; /*線色*/
  border-radius: 4px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

button:active {
  border: solid 1px #03a9f4;
  box-shadow: none;
  text-shadow: none;
}

button:focus {
  outline: none;
}
</style>
