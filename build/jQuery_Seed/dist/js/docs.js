$(function () {

  // Tooltip and popover demos
  $('.tooltip-demo').tooltip({
    selector: '[data-toggle="tooltip"]',
    container: 'body'
  })

  $('[data-toggle="popover"]').popover()

  // Demos within modals
  $('.tooltip-test').tooltip()
  $('.popover-test').popover()

  // Disable empty links in docs examples
  $('.bd-example [href=#]').click(function (e) {
    e.preventDefault()
  })

});
