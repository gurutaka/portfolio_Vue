<template>
  <div class="wrapperWorks">
    <h2>Works</h2>
    <ul class="wrapperList">
      <li v-for="(work,index) in works" v-bind:key="work.id" @click="showModal(index)">
        <WorkCardComp :title="work.title" :imgSrc="work.imgSrc" :tags="work.tags" :date="work.date"></WorkCardComp>
      </li>
    </ul>
    <ModalComp @close="hideModal" v-if="isShow"></ModalComp>
  </div>
</template>

<script>
import WorkCardComp from '@/components/modules/WorkCardComp'
import ModalComp from '@/components/modules/ModalComp'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Works',
  computed: mapGetters({
    'works': 'getWorks',
    'isShow': 'getModalShow'
  }),
  methods: {
    ...mapActions({
      showModal: 'showModal',
      hideModal: 'hideModal'
    })
  },
  components: {
    WorkCardComp,
    ModalComp
  }
}
</script>

<style scoped>
li {
  list-style: none;
}

.wrapperWorks {
  text-align: center;
}

.wrapperList {
  padding: 0;
  display: flex;
  justify-content: center;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
}
</style>
