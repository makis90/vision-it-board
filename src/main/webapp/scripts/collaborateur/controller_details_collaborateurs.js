
appMap.controller('DetailsCollaborateurController', function ($scope,$location,$routeParams) {//,resolvedCollaborateur, Collaborateur
	
	
	var collaborateursList  = getCollaborateurs(); //resolvedCollaborateur
	$scope.pourcentages =[20, 25,30,35,40,45,50,55,60,65];	
	$scope.collaborateurs = collaborateursList;
	
	if($routeParams.id !== undefined)
	{
	$scope.id = parseInt($routeParams.id);
	$scope.collaborateur = getCollaborateurById($scope.id);
	$scope.tableauPourcentageMarges=getTableauPourcentageMarges($scope.collaborateur);
	}
	
	//calcul tableau marges
	
	
	function getTableauPourcentageMarges(collabo){
		var tableauPourcentageMarges=[];
	for(var i=0; i<$scope.pourcentages.length;i++)
	   {
		tableauPourcentageMarges.push([$scope.pourcentages[i],(collabo.TJM / (1 - ($scope.pourcentages[i]/100))).toPrecision(4)]);
		//$("#marge"+(i+1)).text($scope.pourcentages[i]+"%");
		//var tarif = ($("#tjm").text() / (1 - ($scope.pourcentages[i]/100))).toPrecision(3);
		//alert( $('#tjm').scope().TJM  +" "+(1 - (pourcentages[i]/100)));
		//$("#tarif"+(i+1)).text( tarif +"");
		//$("#tableauMarges").show();
	   }
	return tableauPourcentageMarges;
	}
	
	
	
   
	
	function getCollaborateurById(IDMOB_RESS)
	{
	var returnCollaborateur;
	var returnCssCollaborateur;
	for(var i=0; i<$scope.collaborateurs.length; i++){
		if($scope.collaborateurs[i].IDMOB_RESS == IDMOB_RESS)returnCollaborateur = $scope.collaborateurs[i];
	}
	var CurrentDate = new Date();
	var dateDispoCollaborateur = getFormattedCollaborateurDate(returnCollaborateur.DAte_Dispo) ;
	if(dateDispoCollaborateur > CurrentDate)
		$scope.cssInterEnMission = "enmission-details";
	else
		$scope.cssInterEnMission = "inter-details";
	return returnCollaborateur;
	}
});