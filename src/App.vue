<template>
   <div v-if="show" class="preloader">
			<div class="logo"></div>
			<p>Loading</p>
			<div class="circles">
				<div class="circle"></div>
				<div class="circle"></div>
				<div class="circle"></div>
				<div class="circle"></div>
				<div class="circle"></div>
			</div>
		</div>

    <ProductDisplay >
    </ProductDisplay>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
</template>

<script>
import ProductDisplay from './components/ProductDisplay.vue'

export default {
  name: 'App',
  components: {
    ProductDisplay
  },
  data(){
		return {
			show: true
		}
	},
    mounted(){
        setTimeout(() => {
            this.show = false
        }, 2500)
    }
};


</script>

<style>
.preloader{
    display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: white;
	z-index: 9999;
}

.circles{
        display: flex;
		margin-top: 1rem;
}

/* bouncing cirle with keyframe */
.circle{
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: rgb(111, 174, 236);
    margin: 0 0.5rem;
    animation: bounce 1s infinite;
}

.circle:nth-child(2){
    animation-delay: 0.2s;
}

.circle:nth-child(3){
    animation-delay: 0.4s;
}

.circle:nth-child(4){
    animation-delay: 0.6s;
}

.circle:nth-child(5){
    animation-delay: 0.8s;
}

@keyframes bounce{
    0%{
        transform: translateY(0);
    }
    50%{
        transform: translateY(-1rem);
    }
    100%{
        transform: translateY(0);
    }
}


</style>
