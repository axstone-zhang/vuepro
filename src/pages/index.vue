<template>
	<div>
		<ul >
			<li v-for="item in boardList" :key="item">
				{{ item.id }} - {{ item.title }}
			</li>
		</ul>
		<ul>
			<li v-for="(value, key) in objList">
				{{ key + value }}
			</li>
		</ul>
		<br />

		<br />
		<select v-model="selection">
			<option v-for="item in selectOption" :value="item.value"> {{ item.text }}</option>
		</select>
		{{ selection }}

		<br />
		<button v-on:click="show = !show">toggle</button>
		<transition name="my-trans">
			<p v-show="show">i am apple</p>
		</transition>

		<p v-color="'red'">自定义指令</p>
		<input type="text" name="inpu" v-focus>
	</div>
	
</template>

<script>
import componentA from '../components/a'
export default {
	components: {
		componentA
	},
	directives: {
		color: function (el,binding) {
			el.style.color = binding.value
		},
		focus: {
			inserted (el,binding) {
				el.focus()
			}
		}
	},
	created: function () {
		this.$http.get('api/getNewsList')
		.then(function(res){
			console.log(res.data)
		}, function(err){
			console.log(err)
		})
	},
	data () {
	    return {
	    	show: true,
	    	myVal: '',
	    	selection: null,
	    	selectOption: [
	    		{
	    			text: 'apple',
	    			value: 0
	    		},
	    		{
	    			text: 'orange',
	    			value: 1
	    		}
	    	],
	    	dataA: 12,
	        boardList: [
	       		{
	       			id: '1',
	       			title:'开放产品',
	       			description: '开放产品是一款开放产品'
	       		},
	       		{
	       			id: '2',
	       			title:'开放产品2',
	       			description: '开放产品是一款开放产品2'
	       		},
	       		{
	       			id: '3',
	       			title:'开放产品3',
	       			description: '开放产品是一款开放产品3'
	       		}
	        ],
		    objList: {
		       	name: 'apple',
		       	price: '18',
		       	color: 'green'
	        }
	    }
	},
	methods: {
		getMyEvent (hello) {
			console.log('子组件信息:'+hello)
		}
	}
}
</script>

<style>
.fade-enter-active,
.fade-leave-active{
	transition: opacity .5s ease-out;
}
.fade-enter,
.fade-leave-active{
	opacity: 0;
}
</style>