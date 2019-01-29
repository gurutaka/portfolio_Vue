<template>
  <div>
    <h2>Profile</h2>
    <img :src="iconPass" class="iconImg">
    <p>小学校の頃から理数科目が大好き。生粋の理系。</p>
    <p>2018年10月よりジーズアカデミーTOKYOでプログラミング学習中。2019年4月に卒業予定。</p>
    <p>アウトプットも大好き。TwitterやQiita、LTで情報を発信しています。</p>
    <ul class="accountWrapper">
      <li v-for="item in accounts" v-bind:key="item.id">
        <a :href="item.url" target="_blank" :style="item.color" :class="item.stackClass">
          <div v-for="iconClass in item.iconClasses" v-bind:key="iconClass.id">
            <i :class="iconClass"></i>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'About',
  computed: mapGetters({
    'accounts': 'getAccounts',
    'iconPass': 'getIconPass'
  })
}

</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

.accountWrapper {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

p {
  line-height: 1.5rem;
}

a {
  text-decoration: none;
  color: black;
  cursor: pointer;
}

.iconImg {
  width: 300px;
  height: 300px;
}

.accountWrapper > li + li {
  margin-left: 16px;
}

.skillWrapper {
  display: flex;
  justify-content: center;
}
</style>
