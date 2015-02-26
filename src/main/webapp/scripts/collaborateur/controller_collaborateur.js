'use strict';

appMap.controller('CollaborateurController', function ($scope,$location,$routeParams) {//, resolvedCollaborateur,  Collaborateur

	$scope.collaborateursEnInter =[];
	$scope.collaborateursEnMission =[];
	
	var collaborateursList  =  getCollaborateurs();//resolvedCollaborateur
		
	
		
		// Region : Set List of collaborateurs in the collaborateur controller
		//col = 2 : En InterContrat --  1 : En Mission
		if($routeParams.row !== undefined && $routeParams.col !== undefined && $routeParams.type !== undefined)
		{
		$scope.type = $routeParams.type;
		$scope.row = $routeParams.row;
		$scope.col = $routeParams.col;
		if($scope.type == "p")
			{
		if(parseInt($scope.col) == 2)
			$scope.collaborateursEnInter = getCollaborateurEnInterByPole($scope.row,collaborateursList);
			else
			$scope.collaborateursEnMission = getCollaborateurEnMissionByPole($scope.row,collaborateursList);
			}
		else if($scope.type == "b")
			{
			if(parseInt($scope.col) == 2)
				$scope.collaborateursEnInter = getCollaborateurEnInterByBU($scope.row,collaborateursList);
			else
				$scope.collaborateursEnMission = getCollaborateurEnMissionByBU($scope.row,collaborateursList);
			}
		else if($scope.type == "ip")
			{
			if(parseInt($scope.col) == 2)
			{
				$scope.collaborateursEnInter = getCollaborateurEnInterByPole($scope.row,collaborateursList);
			}
			}
		else if($scope.type == "es")
			{
			if(parseInt($scope.col) == 2)
				{
				$scope.collaborateursEnInter = getCollaborateurEntreeByES($scope.row,collaborateursList);
				}
			else
				{
				$scope.collaborateursEnMission = getCollaborateurSortieByES($scope.row,collaborateursList);
				}
			}
		}
		else
		{
			setAllCollaborateurs();
		}
		if($scope.collaborateursEnMission.length==0 && $scope.collaborateursEnInter.length==0)
			{
			setAllCollaborateurs();
			}
		
		
		// Fin Region : Set List of collaborateurs in the collaborateur controller
		
		//recuperer tous les collaborateur en mission et en inter dans un tableau de 2
		
		function getCollaborateursEnMissionEnInter()
		{
			var returnCollaborateurs=[];
			var returnCollaborateursEnMission =[];
			var returnCollaborateursEnInter =[];
			var CurrentDate = new Date();
			for(var i=0; i<collaborateursList.length; i++){
				var dateDispoCollaborateur = getFormattedCollaborateurDate(collaborateursList[i].DAte_Dispo) ;
				if(dateDispoCollaborateur > CurrentDate)
					returnCollaborateursEnMission.push(collaborateursList[i]);
				else
					returnCollaborateursEnInter.push(collaborateursList[i]);
			}
			returnCollaborateurs.push(returnCollaborateursEnMission.sort(sortFunction));
			returnCollaborateurs.push(returnCollaborateursEnInter.sort(sortFunction));
			return returnCollaborateurs;
		}
		function sortFunction(a,b){  
		    var dateA = new Date(a.DAte_Dispo);
		    var dateB = new Date(b.DAte_Dispo);
		    return dateA > dateB ? 1 : -1;  
		};
		
		function setAllCollaborateurs()
		{
			$scope.collaborateursEnMission =getCollaborateursEnMissionEnInter()[0];
			$scope.collaborateursEnInter = getCollaborateursEnMissionEnInter()[1];
		}
		// Region : Set CSS class of collaborateur in the collaborateur page
		$scope.getCollaborateurCssClass = function(IDMOB_RESS)
		{
			var returnCollaborateur;
			var returnCssCollaborateur;
			for(var i=0; i<collaborateursList.length; i++){
				if(collaborateursList[i].IDMOB_RESS == IDMOB_RESS)returnCollaborateur =collaborateursList[i];
			}
				var CurrentDate = new Date();
				var dateDispoCollaborateur = getFormattedCollaborateurDate(returnCollaborateur.DAte_Dispo) ;
				if(dateDispoCollaborateur > CurrentDate)
					returnCssCollaborateur = "enmission";
				else
					returnCssCollaborateur = "inter";
		return returnCssCollaborateur;
		}
		
		// Fin Region : Set CSS class of collaborateur in the collaborateur page 
        /*$scope.showDetailscollaborateur = function (id) {
        	$scope.collaborateur= Collaborateur.get({IDMOB_RESS: id});
        	$('#showCollaborateurModal').modal('show');
        	//var url = '/collaborateur/' + id;
	        //    $location.path(url);

        };*/

        
    
    });


