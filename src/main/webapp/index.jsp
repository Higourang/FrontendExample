<html ng-app="application">
<head>
<title>Javascript dependencies with npm and browserify</title>
<!-- Javascript dependencies -->
<script type="text/javascript" src="assets/js/dependencies.js"></script>
<script type="text/javascript" src="app/app.js"></script>
<script type="text/javascript" src="app/repository/RepositoryListCtrl.js"></script>
<script type="text/javascript" src="app/repository/repositoryService.js"></script>
</head>
<body>
	<div class="container-fluid">
		<!-- navigation bar -->
		<nav class="navbar navbar-default">
			<div class="container-fluid">
				<div class="navbar-header">
					<!-- button for small devices -->
					<button type="button" class="navbar-toggle collapsed"
						data-toggle="collapse" data-target="#navbar" aria-expanded="false"
						aria-controls="navbar">
						<span class="sr-only">Toggle navigation</span> <span
							class="icon-bar"></span> <span class="icon-bar"></span> <span
							class="icon-bar"></span>
					</button>
					<a class="navbar-brand" href="#">Demo - Angular app</a>
				</div>
				<div id="navbar" class="navbar-collapse collapse">
					<!--  responsive menu -->
					<ul class="nav navbar-nav">
						<!-- ui-sref-active adds a css class when element is selected -->
						<!-- ui-sref sets the route  -->
						<li ui-sref-active="active"><a ui-sref="gitrepository">Repositories</a></li>
					</ul>
				</div>
			</div>
		</nav>
		<div class="row-fluid">
			<!-- ui-view is an ui.router attribute that defines the place where routes or states will be placed -->
			<div
				class="col-sm-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2"
				ui-view autoscroll="true">
				<!-- This content will be "replaced" when a state is active -->
				<h1 class="page-header">Dashboard</h1>
			</div>
		</div>
	</div>
</body>
</html>
