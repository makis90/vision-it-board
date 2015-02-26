'use strict';

appMap.config(function ($routeProvider, $httpProvider, $translateProvider) {
    $routeProvider
        .when('/collaborateur', {
            templateUrl: 'views/collaborateurs.html',
            controller: 'CollaborateurController',
           /* resolve:{
            	resolvedCollaborateur: ['Collaborateur', function (Collaborateur) {
            		//hide the slider and show the ngview content
                	$(".swiper-container").slideUp();
                	$(".well").show("slow");
                    return Collaborateur.query().$promise;
                }]
        	
            }*/
        })
        .when('/collaborateur/:type/:row/:col', {
            templateUrl: 'views/collaborateurs.html',
            controller: 'CollaborateurController',
            /*resolve:{
            	resolvedCollaborateur: ['Collaborateur', function (Collaborateur) {
            		$(".swiper-container").slideUp("slow");
    	            $(".well").show("slow");
    	            return Collaborateur.query().$promise;
                }]
        	
            }*/
        })
        .when('/detailscollaborateur/:id', {
            templateUrl: 'views/details-collaborateur.html',
            controller: 'DetailsCollaborateurController',
            /*resolve:{
                	resolvedCollaborateur: ['Collaborateur', function (Collaborateur) {
                		$(".swiper-container").slideUp("slow");
        	            $(".well").show("slow");
        	            return Collaborateur.query().$promise;
                    }]
            	
              }*/
        })
        
        
});
