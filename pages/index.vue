<template>
  <section class="container">
    <div>
      <h1>Pascal Wassmann</h1>
      <h2>Architekten GmbH</h2>
      <address>
        T <a href="tel:+41 43 534 18 18">+41 43 534 18 18</a><br>
        M <a href="tel:+41 76 482 27 32">+41 76 482 27 32</a><br>
        <a href="mailto:info@pascalwassmann.ch">info@pascalwassmann.ch</a><br>
        Schaffhauserstrasse 272<br>
        8057 Zürich
      </address>
    </div>
  </section>
</template>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  line-height: 1.2;
}

address {
  font-style: normal;
  font-variant-numeric: tabular-nums;
  margin-left: 7.9rem;
  margin-top: 4rem;

  a {
    text-decoration: none;
    color: inherit;
  }
}

h1,
h2 {
  font-weight: bold;
}
</style>
