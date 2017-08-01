<template>
	<div>
		{{ hello }}
		{{ myValue }}
		<button @click="emitMyEvent">emit</button>
	</div>
</template>

<script>
export default {
	props: {
		'my-value': [Number]
	},
	data () {
		return {
			hello: 'i am component a'
		}
	},
	methods: {
		emitMyEvent () {
			this.$emit('my-event', this.hello)
		}
	}
}
	
</script>