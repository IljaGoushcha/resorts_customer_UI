angular.module('Navigation')
.controller('AboutCtrl', function($scope) {

  $scope.my_other_number = 20;
  $scope.my_number = 30;

  $scope.my_data_json =
  {
    "tenantId": 1000,
    "eventTypes": {
      "eventType01": {
        "isOpen": false,
        "displayName": "email received",
        "attributes": {
          "email": {},
          "body": {},
          "date": {}
        }
      },
      "eventType02": {
        "isOpen": false,
        "displayName": "purchase",
        "attributes": {
          "item": {},
          "date": {},
          "customer": {}
        }

      },
      "eventType03": {
        "isOpen": false,
        "displayName": "reward received",
        "attributes": {
          "rewardType": {},
          "customer": {},
          "date": {}

        }
      }
    }
  };

});
