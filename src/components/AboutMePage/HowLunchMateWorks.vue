<template>
  <div id="HowLunchMateWorks">
    <p id="title">How LunchMate Works?</p>
    <div id="Steps">
      <div class="Step Objective">
        <div id="Image_1" />
        <p class="subtitle">Set your objectives</p>
      </div>
      <div class="Step Interactions">
        <div id="Image_2" />
        <p class="subtitle">Your first interaction</p>
      </div>
      <div class="Step Developed">
        <div id="Image_3" />
        <p class="subtitle">Develop your network</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HowLunchMateWorks",
  components: {}
};
</script>

<style >

#HowLunchMateWorks {
  text-align: center;
  color: white;
}

#title {
  margin: 0;
  font-size: 30px;
  padding: 40px;
  font-weight: 700;
}

.subtitle {
  font-size: 22px;
  font-weight: 800;
  border-radius: 5px;
  border: none;
}

.Step {
  width: 33.33%;
  display: inline-block;
  /* position: absolute; */
}

#Image_1 {
  content: url("../../assets/methods_logo/target.png");
  width: 200px;
  display: inline-block;
}

#Image_2 {
  content: url("../../assets/methods_logo/chat.png");
  width: 200px;
  display: inline-block;
}

#Image_3 {
  content: url("../../assets/methods_logo/teamwork.png");
  width: 200px;
  display: inline-block;
}
</style>
