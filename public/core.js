var todoPage = angular.module("todoPage", []);

function mainController($scope, $http) {
    $scope.formData = {};

    $http
        .get("/api/todos")
        .success(data => {
            $scope.todos = data;
            console.log(data);
        })
        .error(data => {
            console.log("Error: " + data);
        });

    $scope.createTodo = () => {
        $http
            .post("/api/todos", $scope.formData)
            .success(data => {
                $scope.formData = {};
                $scope.todos = data;
                console.log(data);
            })
            .error(data => {
                console.log("Error:" + data);
            });
    };

    //delete a todo after checking it
    $scope.deleteTodo = () => {
        $http
            .delete("/api/todos/" + itemPos[i].value)
            .success(data => {
                $scope.todos = data;
                console.log(data);
            })
            .error(data => {
                console.log("Error:" + data);
            });

    }

}
