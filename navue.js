Vue.component('logo', {
	template: `
					<div class="navbar-header">
	      				<a href="index.html" class="navbar-brand"><img src="logo.png" style="height:35px;" class="logo"></a>
	    			</div>`
})

Vue.component('nabidka', {
	template: `<div  class="nav navbar-nav">
					<div class="btn-group">
					  	<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" title="Hlavní nabídka">
					    	<a href="javascript:void(0)">
								<img src="menuicon.png"style="width:50px;height:50px;">
							</a>
						</button>
					    <ul class="dropdown-menu" role="menu">
						   	<li><a href="index.html">Home</a></li>
				      		<li><a href="teorie.html">Teorie</a></li>
				      		<li><a href="procvicovani.html">Procvičování</a></li>
				      		<li><a href="statistiky.html">Statistiky</a></li>
						   </ul>
					</div>
				</div>`
})

Vue.component('vpravo', {
	template:`	<div class="search">
					<form class="navbar-form navbar-right" action="#">
				      	<div class="input-group">
						    <input class="form-control" id="myInput" type="text" placeholder="Search.." data-toggle="tooltip" title="Vyhledávání">
						    <script>
								$(document).ready(function(){
								  $("#myInput").on("keyup", function() {
								    var value = $(this).val().toLowerCase();
								    $("#myDIV *").filter(function() {
								      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
								    });
								  });
								});
							</script>
						    <div class="input-group-btn">
						      <button class="btn btn-default" type="submit">
						        <i class="glyphicon glyphicon-search"></i>
						      </button>
						    </div>
						</div>
				    </form>	
			    </div>`

})

Vue.component('stredt', {
	template: `
			<ul class="nav navbar-nav navbar-right">
			  	<li><a href="profil.html"><div class="profil"><span class="glyphicon glyphicon-user"></span>Profil</div></a></li>
			</ul>`
})

Vue.component('stredf', {
	template: `<ul class="nav navbar-nav navbar-right">
				    <li><a href="registrace.html"><div class="registrace"><span class="glyphicon glyphicon-user"></span> Sign Up</div></a></li>
				    <li><a href="login.html"><div class="registrace"><span class="glyphicon glyphicon-log-in"></span> Login</div></a></li>
				</ul>`
})
var vm = new Vue({
  el: '#nav',
  data: {
  	loggedin: true,
  }
})