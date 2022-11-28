<script>
import { h } from "vue";

export default {
   props: ["icon"],
   render() {
      return h(this.icon);
   },
};
</script>
