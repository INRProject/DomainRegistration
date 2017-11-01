var app = angular.module('app',['ui.router'])
	.config(['$stateProvider','$urlRouterProvider','$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {
		 $urlRouterProvider.otherwise('/aboutUs');
		
    $stateProvider
	    .state('init', {
			url: '/',
			controller: 'LocalizationCtrl',
			templateUrl: 'htmls/auth/init.html'
		})
		.state('init.login', {
			url: 'login',
			templateUrl: 'htmls/auth/login.html',
			controller: 'LoginCtrl'
		})
				
		.state('init.home', {
			url: 'home',
				views:{
					'header@init.home':{ templateUrl: 'htmls/header.html',controller: null},
					'menu@init.home':{ templateUrl: 'htmls/menu.html',controller: null},
					'': { templateUrl: 'htmls/home.html',controller: 'HomeCtrl'},
					'footer@init.home':{ templateUrl: 'htmls/footer.html',controller: null}
				},
		})
		
		.state('init.aboutUs', {
			url: 'aboutUs',
			views:{
				'header@init.aboutUs':{ templateUrl: 'htmls/header.html',controller: null},
				'menu@init.aboutUs':{ templateUrl: 'htmls/menu.html',controller: null},
				'': { templateUrl: 'htmls/aboutUs.html',controller: 'HomeCtrl'},
				'footer@init.aboutUs':{ templateUrl: 'htmls/footer.html',controller: null}
			},
			
		})
		
    
	}]);



