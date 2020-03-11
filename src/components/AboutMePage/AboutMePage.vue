<template>
  <div id="AboutMePage">
      <HowLunchMateWorks class="Subsection"/>
      <MeetFounders class="Subsection" />
  </div>
</template>

<script>
import HowLunchMateWorks from './HowLunchMateWorks';
import MeetFounders from './MeetFounders';
export default {
  name: "AboutMePage",
  components: {
      HowLunchMateWorks,
      MeetFounders
  }
};
</script>

<style scoped>
.Subsection{
  width:77%;
  margin:0 auto;
}
#AboutMePage{
  text-align: center;
}

</style>