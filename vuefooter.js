Vue.component('vuefooter', {
	template: `	<footer><p class='autor'>&copy; Jakub Jelínek</p>
					<br>
					<a href='https://www.alej.cz' target='_blank'>
						<img  src='GNA.jpg' alt='Gymnázium Nad Alejí' class='img-circle' alt='Gymnázium Nad Alejí'>
					</a>
				</footer>`
})

var vm = new Vue({
  el: '#vuefooter'
})