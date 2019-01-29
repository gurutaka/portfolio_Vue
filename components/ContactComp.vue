<template>
  <div>
    <h2>Contact Me</h2>
    <div class="wrapperContact">
      <p>技術やお仕事、イベント…
        <br>どんなことでもお気軽にご連絡ください！
      </p>
      <ul class="contactList">
        <li>
          <i class="far fa-envelope"></i>
          <a href="mailto:@gmail.com">gmail.com</a>
        </li>
        <li>
          <i style="color:#1da1f2" class="fab fa-twitter"></i>
          <a href="https://twitter.com/">twitter</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Contact'
}
</script>

<style scoped>
p {
  line-height: 2rem;
}

ul {
  padding: 0;
}

li {
  list-style: none;
}

.wrapperContact {
  margin: 60px 0;
}

.contactList {
  width: 200px;
  text-align: left;
  margin: 0 auto;
}

.contactList > li + li {
  margin-top: 10px;
}

.fa-link,
a {
  color: #4072b3;
}

a:hover {
  color: #6088c6;
  font-weight: bold;
}
</style>
