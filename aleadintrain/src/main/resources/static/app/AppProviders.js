(function(angular) {
  'use strict';
angular.module('aleadin', ['ngRoute', 'ngAnimate'])
  .config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/ylh/main.do', {
          templateUrl: 'ylh/yinlinghuimain.html',
          controller: 'YingLinHuiMainCtrl',
          controllerAs: 'ylhmain'
        })
        .when('/ylh/eliteclass/:classid', {
            templateUrl: 'ylh/eliteclass.html',
            controller: 'EliteClassCtrl',
            controllerAs: 'eliteClass'
          })
          .when('/ylh/mainslide/:classid', {
            templateUrl: 'ylh/eliteclass.html',
            controller: 'EliteClassCtrl',
            controllerAs: 'eliteClass'
          })
          .when('/ylh/superstarcourse', {
            templateUrl: 'ylh/superstarcourse.html',
            controller: 'SuperStarCourseCtrl',
            controllerAs: 'SuperStarCourse'
          })
          .when('/ylh/elitecourse', {
            templateUrl: 'ylh/elitecourse.html',
            controller: 'EliteCourseCtrl',
            controllerAs: 'elitecourse'
          })
          .when('/ylh/topicarticle', {
            templateUrl: 'ylh/topicarticle.html',
            controller: 'TopicArticleCtrl',
            controllerAs: 'topicarticle'
          })
          .when('/ylh/datebar', {
            templateUrl: 'ylh/datebar.html',
            controller: 'dateBarCtrl',
            controllerAs: 'datebar'
          })
          .when('/ylh/datebar/:topicid', {
            templateUrl: 'ylh/datebar/dateBar-tutorial.html',
            controller: 'dateBarTutorialCtrl',
            controllerAs: 'dateBarTutorial'
          })
          .when('/careerpreview/onlinecourse', {
            templateUrl: 'careerpreview/careerpreviewonlinecourse.html',
            controller: 'OnlineCourseCtrl',
            controllerAs: 'onlinecourse'
          })
          .when('/careerpreview/offlinecourse', {
            templateUrl: 'careerpreview/careerpreviewofflinecourse.html',
            controller: 'OfflineCourseCtrl',
            controllerAs: 'offlinecourse'
          })
          .when('/careerpreview/offlineclass/:offclassid', {
            templateUrl: 'careerpreview/careerpreviewofflineclass.html',
            controller: 'OfflineClassCtrl',
            controllerAs: 'offlineclass'
          })
          .when('/my/accountmgr', {
              templateUrl: 'my/accountmgr.html',
              controller: 'AccountMgrCtrl',
              controllerAs: 'accountmgr'
            })
            .when('/my/ijionyou', {
              templateUrl: 'my/ijionyou.html',
              controller: 'IJionYouCtrl',
              controllerAs: 'ijionyou'
            })
            .when('/my/becomeelite', {
              templateUrl: 'my/becomeelite.html',
              controller: 'BecomeEliteCtrl',
              controllerAs: 'becomeelite'
            })
            .when('/my/eliteclub', {
              templateUrl: 'my/eliteclub.html',
              controller: 'EliteClubCtrl',
              controllerAs: 'eliteclub'
            })
            .when('/my/myorder', {
              templateUrl: 'my/myorder.html',
              controller: 'MyOrderCtrl',
              controllerAs: 'myorder'
            });
      
      $locationProvider.html5Mode(true);
  }])
  
  .controller('YingLinHuiMainCtrl', ['$scope','$http','$route','$routeParams','$location',
    function($scope,$http,$route, $routeParams, $location) {
      this.$route = $route;
      this.$location = $location;
      this.$routeParams = $routeParams;
      $http.get('/ylh/main.json').success(function(data) {
    	    $scope.data= data;
    	  });
  }])
  .controller('EliteClassCtrl', ['$scope','$http','$route','$routeParams','$location','$sce',
    function($scope,$http,$route, $routeParams, $location,$sce) {
      this.$route = $route;
      this.$location = $location;
      this.$routeParams = $routeParams;
      $http.get('/ylh/eliteclass.json/'+$routeParams.classid).success(function(data) {
    	    $scope.data= data;
    	  });
      $scope.trustSrc = function(url){
    	    return $sce.trustAsResourceUrl(url);
    	};
  }])
  .controller('SuperStarCourseCtrl', ['$scope','$http','$route','$routeParams','$location',
    function($scope,$http,$route, $routeParams, $location) {
      this.$route = $route;
      this.$location = $location;
      this.$routeParams = $routeParams;
      $http.get('/ylh/superstarcourse.json').success(function(data) {
    	    $scope.data= data;
    	  });
  }])
  .controller('EliteCourseCtrl', ['$scope','$http','$route','$routeParams','$location',
    function($scope,$http,$route, $routeParams, $location) {
      this.$route = $route;
      this.$location = $location;
      this.$routeParams = $routeParams;
      $http.get('/ylh/elitecourse.json').success(function(data) {
    	    $scope.data= data;
    	  });
  }])
  .controller('TopicArticleCtrl', ['$scope','$http','$route','$routeParams','$location',
    function($scope,$http,$route, $routeParams, $location) {
      this.$route = $route;
      this.$location = $location;
      this.$routeParams = $routeParams;
      $http.get('/ylh/topicarticle.json').success(function(data) {
    	    $scope.data= data;
    	  });
  }])
  .controller('dateBarCtrl', ['$scope','$http','$route','$routeParams','$location',
    function($scope,$http,$route, $routeParams, $location) {
      this.$route = $route;
      this.$location = $location;
      this.$routeParams = $routeParams;
      $http.get('/ylh/datebar.json').success(function(data) {
    	    $scope.data= data;
    	  });
  }])
  .controller('dateBarTutorialCtrl', ['$scope','$http','$route','$routeParams','$location',
    function($scope,$http,$route, $routeParams, $location) {
      this.$route = $route;
      this.$location = $location;
      this.$routeParams = $routeParams;
      $http.get('/ylh/datebar.json/'+$routeParams.topicid).success(function(data) {
    	    $scope.data= data;
    	  });
  }])
  .controller('OnlineCourseCtrl', ['$scope','$http','$route','$routeParams','$location',
    function($scope,$http,$route, $routeParams, $location) {
      this.$route = $route;
      this.$location = $location;
      this.$routeParams = $routeParams;
      $http.get('/careerpreview/onlinecourse.json').success(function(data) {
    	    $scope.data= data;
    	  });
  }])
  .controller('OfflineCourseCtrl', ['$scope','$http','$route','$routeParams','$location',
    function($scope,$http,$route, $routeParams, $location) {
      this.$route = $route;
      this.$location = $location;
      this.$routeParams = $routeParams;
      $http.get('/careerpreview/offlinecourse.json').success(function(data) {
    	    $scope.data= data;
    	  });
  }])
  .controller('OfflineClassCtrl', ['$scope','$http','$route','$routeParams','$location',
    function($scope,$http,$route, $routeParams, $location) {
      this.$route = $route;
      this.$location = $location;
      this.$routeParams = $routeParams;
      $http.get('/careerpreview/offlineclass.json/'+$routeParams.offclassid).success(function(data) {
    	    $scope.data= data;
    	  });
  }])
  .controller('AccountMgrCtrl', ['$scope','$http','$route','$routeParams','$location',
    function($scope,$http,$route, $routeParams, $location) {
      this.$route = $route;
      this.$location = $location;
      this.$routeParams = $routeParams;
      $http.get('/my/accountmgr.json').success(function(data) {
    	    $scope.data= data;
    	  });
  }])
  .controller('IJionYouCtrl', ['$scope','$http','$route','$routeParams','$location',
    function($scope,$http,$route, $routeParams, $location) {
      this.$route = $route;
      this.$location = $location;
      this.$routeParams = $routeParams;
      $http.get('/my/ijionyou.json').success(function(data) {
    	    $scope.data= data;
    	  });
  }])
  .controller('BecomeEliteCtrl', ['$scope','$http','$route','$routeParams','$location',
    function($scope,$http,$route, $routeParams, $location) {
      this.$route = $route;
      this.$location = $location;
      this.$routeParams = $routeParams;
      $http.get('/my/becomeelite.json').success(function(data) {
    	    $scope.data= data;
    	  });
  }])
  .controller('EliteClubCtrl', ['$scope','$http','$route','$routeParams','$location',
    function($scope,$http,$route, $routeParams, $location) {
      this.$route = $route;
      this.$location = $location;
      this.$routeParams = $routeParams;
      $http.get('/my/eliteclub.json').success(function(data) {
    	    $scope.data= data;
    	  });
  }])
  .controller('MyOrderCtrl', ['$scope','$http','$route','$routeParams','$location',
    function($scope,$http,$route, $routeParams, $location) {
      this.$route = $route;
      this.$location = $location;
      this.$routeParams = $routeParams;
      $http.get('/my/myorder.json').success(function(data) {
    	    $scope.data= data;
    	  });
  }]);
})(window.angular);
