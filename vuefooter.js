Vue.component('vuefooter', {
	template: `	<footer><p class='autor'><a href='admin.html' class='autor'>&copy;</a> Jakub Jelínek</p>
					<br>
					<a href='https://www.alej.cz' target='_blank'>
						<img  src='GNA.jpg' class='img-circle' alt='Gymnázium Nad Alejí'>
					</a>
				</footer>`
})

var vm = new Vue({
  el: '#vuefooter'
})