'use strict';

app.controller('SongDetailCtrl', function ($scope, $routeParams, AuthFactory, MusicFactory) {

	let user = AuthFactory.getUser();

	MusicFactory.getMusicList(user).then(function (dataReceived) {
		$scope.music = dataReceived;

		$scope.selectedSong = $scope.music.filter(function (song) {
			return song.firebasekey === $routeParams.songId;
		})[0];
	});

});