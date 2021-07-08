<template>
  <div class="home">
    <h1>
      All destinations
    </h1>
    <div class="destinations">
      <div v-for="destination in destinations" :key="destination.name">
        <router-link :to="destination.slug">
          <h2>{{ destination.name }}</h2>
        </router-link>
        <figure>
          <router-link :to="destination.name">
            <img
              :src="require(`@/assets/${destination.image}`)"
              alt="destination.name"
            />
          </router-link>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import store from '@/store/index'
export default {
  name: 'Home',
  data () {
    return {
      destinations: store.destinations
    }
  },
  components: {}
}
</script>
<style lang="sass" scoped>
.destinations
  display: flex
  justify-content: space-between
</style>
