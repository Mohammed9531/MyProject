/**
 * author : mshoukath
 * date	  : 07/09/2015
 * time	  : 1:45 pm est
 * created with eclipse luna
 */

app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise("/home");

	$stateProvider
	.state('home', {
		url: "/home",
		templateUrl: "partials/home.html"
	})
	.state('about-us', {
		url: "/about-us",
		templateUrl: "partials/about-us.html"
	})
	.state('contact-us', {
		url: "/contact-us",
		templateUrl: "partials/contact-us.html"
	}).state('articles', {
		url: "/articles",
		templateUrl: "partials/cards.html"
	}).state('dashboard', {
		url: "/dashboard",
		templateUrl: "partials/dashboard.html"
	}).state('new', {
		url: "/new",
		templateUrl: "partials/new-article.html"
	}).state('view', {
		url: "/view",
		templateUrl: "partials/view.html"
	});
});