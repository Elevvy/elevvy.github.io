var imageAmount = 7;
var number = Math.floor(Math.random() * (imageAmount - 1) + 1);
$('.holder').css({
  'background-image': 'url(././images/background-images/image' + number + '.jpg)'
});
