Vue.component('obsah', {
	template: 
	`<div class="obsah">
		<selection></selection>
		<div class="container">			
			<div class="col-sm-12">
				<div class="jumbotron">	
				</div>
			</div>
		</div>
	</div>`
})

Vue.component('selection', {
	template:
	`<div class="btn-group">
	  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
	    <strong>Nabídka příkladů </strong><span class="glyphicon glyphicon-chevron-down">
	  </button>
	  <ul class="dropdown-menu" role="menu">
			<li><a><span>1</span></a></li>
			<li><a><span>2</span></a></li>
			<li><a><span>3</span></a></li>
			<li><a><span>4</span><a/></li>
		</ul>
	</div>`

})

var vm = new Vue({
	el: '#hlobsah',
	data: {
	    posts: [
	      { id: 1, title: 'My journey with Vue' },
	      { id: 2, title: 'Blogging with Vue' },
	      { id: 3, title: 'Why Vue is so fun' }
	    ]
	  }
})

 