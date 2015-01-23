    // create the module and name it scotchApp
    var copyCenterApp = angular.module('copyCenterApp', []);


    //configure our routs
    copyCenterApp.config(function ($routeProvider){

    	// route for the home page
    	.when('/', {
    		templateUrl: 'pages/form1.html',
    		controller: 'mainController'
    	})

    	//route for the about page
    	.when('/', {
    		templateUrl: 'pages/form2.html',
    		controller: 'form2Controller'
    	})

    	//route for the contact page
    	.when('/', {
    		templateUrl: 'pages/form3.html',
    		controller: 'form3Controller'
    	})

        //route for the contact page
        .when('/', {
            templateUrl: 'pages/form4.html',
            controller: 'form4Controller'
        })
    })

    // create the controller and inject Angular's $scope
    copyCenterApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'form1';
    });

    copyCenterApp.controller('form2Controller', function($scope) {
        $scope.message = 'form2';
    });

    copyCenterApp.controller('form3Controller', function($scope) {
        $scope.message = 'form3';
    });

    copyCenterApp.controller('form4Controller', function($scope) {
        $scope.message = 'form3';
    });