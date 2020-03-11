<template>
  <div id="HowLunchMateWorks">
    <p id="title">How LunchMate Works?</p>
    <div id="Steps">
      <div class="Step Objective">
        <div id="Image_1" />
        <p class="Subtitle Pink">Set your objectives</p>
        <p class="para">Tell LunchMate your goals <br> and interests</p>
      </div>
      <div class="Step Interactions">
        <div id="Image_2" />
        <p class="Subtitle Blue">Your first interaction</p>
        <p class="para">LunchMate will introduce <br> both of you via email</p>
      </div>
      <div class="Step Developed">
        <div id="Image_3" />
        <p class="Subtitle Yellow">Develop your network</p>
        <p class="para">Meet your connection on lunch or meal <br> and build meaningful network</p>
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

<style>
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

.para{
  font-size: 17px;
  font-weight: 500;
}

.Yellow{
  color: #FBE06C;
}

.Blue{
  color:#4B5AEC;
}

.Pink{
  color:#FF008B;
}

.Subtitle {
  font-size: 23px;
  font-weight: 700;
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
  width: 180px;
  display: inline-block;
}

#Image_2 {
  content: url("../../assets/methods_logo/chat.png");
  width: 180px;
  display: inline-block;
}

#Image_3 {
  content: url("../../assets/methods_logo/teamwork.png");
  width: 180px;
  display: inline-block;
}
</style>
