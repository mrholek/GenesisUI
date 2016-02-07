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

});
