<template>
  <div class="l-card">
    <div class="l-thumbnail">
      <div class="wrapperThumbnail">
        <img :src="imgSrc">
      </div>
      <span class="moreText">Read More</span>
    </div>
    <div class="textContent">
      <h3 class="title">{{title}}</h3>
      <div class="contentMeta">
        <p class="date">{{date}}</p>
        <ul class="cardTag">
          <li v-for="tag in tags" v-bind:key="tag">{{tag}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'WorkCard',
  props: ['title', 'imgSrc', 'tags', 'date']
}
</script>

<style scoped>
.l-card {
  overflow: hidden;
  width: 320px;
  padding: 0;
  margin: 24px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1), 0 8px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.l-thumbnail {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto;
}
.wrapperThumbnail {
  display: block;
  margin: 0;
  padding: 0;
}
.wrapperThumbnail::after {
  transition: 0.5s;
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  opacity: 0;
}
.wrapperThumbnail img {
  transition: 0.5s;
  display: block;
  width: auto;
  height: 250px;
  margin: 0 auto;
}

.moreText {
  transition: opacity 0.5s, transform 0.8s;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -75%);
  display: inline-block;
  padding: 6px 12px 8px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  border: 1px solid #fff;
  opacity: 0;
}
.l-card:hover .wrapperThumbnail::after {
  opacity: 1;
}
.l-card:hover .wrapperThumbnail img {
  transform: scale(1.1);
  filter: blur(3px) grayscale(100%);
}
.l-card:hover .moreText {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.contentMeta {
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin: 5px 10px;
}

.date {
  font-size: 12px;
}

ul {
  list-style: none;
  padding: 0;
  display: flex;
  align-self: center;
}

.cardTag > li + li {
  margin-left: 10px;
}

.cardTag li {
  background: #eee;
  border: none;
  color: #666;
  padding: 6px;
  margin: 3px;
  border-radius: 3px;
  font-size: 12px;
  height: 12px;
}
</style>
