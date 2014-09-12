'use strict';

angular.module('demo', ['ngSanitize', 'notifications']).
  controller('MainCtrl', function($scope, $notification, $timeout){
    $scope.availableDurations = [
      {name: 'persistent', value: 0},
      {name: '5 sec', value: 5000},
      {name: '10 sec', value: 10000},
      {name: '20 sec', value: 20000},
      {name: '60 sec', value: 60000}
    ];
    $timeout(function(){
      $notification.success('Notifications Demo', 'The notifications demo is working!');
    }, 500);

    $scope.gimmeHTML5 = function(){
      $notification.enableHtml5Mode();
    };

    $scope.makeInfo = function(){
      if($scope.notiTitle !== '' || $scope.notiText !== ''){
        $notification.info($scope.notiTitle, $scope.notiText, null, $scope.notiDuration.value);
      }
    };

    $scope.makeWarning = function(){
      if($scope.notiTitle !== '' || $scope.notiText !== ''){
        $notification.warning($scope.notiTitle, $scope.notiText, null, $scope.notiDuration.value);
      }
    };

    $scope.makeError = function(){
      if($scope.notiTitle !== '' || $scope.notiText !== ''){
        $notification.error($scope.notiTitle, $scope.notiText, null, $scope.notiDuration.value);
      }
    };

    $scope.makeSuccess = function(){
      if($scope.notiTitle !== '' || $scope.notiText !== ''){
        $notification.success($scope.notiTitle, $scope.notiText, null, $scope.notiDuration.value);
      }
    };
  });
