//TWITTER INIT (Updated with compatibility on Twitter's new API):
//PLEASE READ DOCUMENTATION FOR INFO ABOUT SETTING UP YOUR OWN TWITTER CREDENTIALS:
$(function ($) {
  $('.twitter').tweet({
      modpath: './twitter/',
      count: 1,
      loading_text: 'loading twitter update...',
      username:'unbrandedco'
      /* etc... */
  });
});
