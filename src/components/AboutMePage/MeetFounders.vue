<template>
    <div>
        <p id="title">Meet LunchMate Founders</p>
        <div id="Profiles">
            <div class="Profile">
                <div id="MatthewPhoto" />
                <p class="Profile_name">Matthew <br>Alexander</p>
                <p>testing 1, paragraph 1</p>
            </div>
            <div class="Profile">
                <div id="KevinPhoto" />
                 <p class="Profile_name"> Kevin Tirta <br> Gondokusumo</p>
                <p>testing 2, paragraph 2</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name:"MeetFounders",
    components:{

    }
}
</script>

<style scoped>
p{
    color:white;
}

.Profile_name{
    font-weight: 700;
}

#title {
  margin: 0;
  font-size: 30px;
  padding: 40px;
  font-weight: 700;
}

.Profile{
    width:300px;
    display: inline-block;
}

#MatthewPhoto{
    content:url("../../assets/profiles/matthew_alexander.jpeg");
    width:200px;
    height: 200px;
    border-radius: 50%;
    display: inline-block;
}

#KevinPhoto{
    content:url("../../assets/profiles/kevin_noc_photo_hackaton.png");
    width:200px;
    height: 200px;
    border-radius: 50%;
    display: inline-block;
}

</style>