<template>
  <div class="home">
    <div id="Company_logo">
      <p>Lunch Mate Logo Here</p>
    </div>
    <p id="Intro_slogan">
      An elegent way
      <br />to meet similar
      <u>interests</u> people
    </p>
    <p
      id="moto_slogan"
    >LunchMate aims to provide business people with meaningful networks over lunch.</p>
    <div class="form-group">
      <input class="form-field" type="text" placeholder="Enter your email address" />
      <span>Join Us !</span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {}
};
</script>


<style>
:root {
  --input-color: #99a3ba;
  --input-border: #cdd9ed;
  --input-background: #fff;
  --input-placeholder: #cbd1dc;

  --input-border-focus: #275efe;

  --group-color: var(--input-color);
  --group-border: var(--input-border);
  --group-background: #eef4ff;

  --group-color-focus: #fff;
  --group-border-focus: var(--input-border-focus);
  --group-background-focus: #678efe;
}

.form-group input {
  width: 300px;
  padding: 8px 16px;
  line-height: 25px;
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  border-radius: 6px;
  -webkit-appearance: none;
  color: var(--input-color);
  border: 1px solid var(--input-border);
  background: var(--input-background);
  transition: border 0.3s ease;
  margin-top: 25px;
}

span {
        text-align: center;
        padding: 10px 16px;
        font-size: 14px;
        line-height: 20px;
        color: var(--group-color);
        background: var(--group-background);
        border: 1px solid var(--group-border);
}

#Company_logo {
  /* font-family: ;*/
  font-size: 25px;
  color: aqua;
  font-weight: bold;
  display: block;
}

#Intro_slogan {
  font-size: 40px;
  font-weight: bold;
}

#moto_slogan {
  font-size: 20px;
  font-weight: 500;
}
</style>