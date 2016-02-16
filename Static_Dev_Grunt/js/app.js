/*****
* CONFIGURATION
*/
	// Active ajax page loader
	$.ajaxLoad = false;

	    //required when $.ajaxLoad = true
		$.defaultPage = 'main.html';
		$.subPagesDirectory = 'views/';
		$.page404 = 'views/404.html';
		$.mainContent = $('#ui-view');

    //Main navigation
    $.navigation = $('#navigation-items > ul.nav');

	//Dynamic Title only if $.ajaxLoad = true
	$.dynamicTitle = true;

	//Dynamic Breadcrumb only if $.ajaxLoad = true
	$.dynamicBreadcrumb = true;

	$.panelIconOpened = 'icon-arrow-up';
	$.panelIconClosed = 'icon-arrow-down';

	//Default colours
	$.brandPrimary =  '#20a8d8';
	$.brandSuccess =  '#4dbd74';
	$.brandInfo =     '#63c2de';
	$.brandWarning =  '#f8cb00';
	$.brandDanger =   '#f86c6b';

/*****
* ASYNC LOAD
* Load JS files and CSS files asynchronously in ajax mode
*/
	function loadJS(jsFiles, pageScript) {

		for(i=0;i<jsFiles.length;i++){

			var body = document.getElementsByTagName('body')[0];
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.async = false;
			script.src = jsFiles[i];
			body.appendChild(script);
		}

		if (pageScript) {
			var body = document.getElementsByTagName('body')[0];
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.async = false;
			script.src = pageScript;
			body.appendChild(script);
		}

		init();
	}

	var cssArray = {};

	function loadCSS(cssFile, end, callback) {

		if (!cssArray[cssFile]) {
			cssArray[cssFile] = true;

			if (end == 1) {

				var head = document.getElementsByTagName('head')[0];
				var s = document.createElement('link');
				s.setAttribute('rel', 'stylesheet');
				s.setAttribute('type', 'text/css');
				s.setAttribute('href', cssFile);

				s.onload = callback;
			  	head.appendChild(s);

			} else {

				var head = document.getElementsByTagName('head')[0];
				var style = document.getElementById('main-style');

				var s = document.createElement('link');
				s.setAttribute('rel', 'stylesheet');
				s.setAttribute('type', 'text/css');
				s.setAttribute('href', cssFile);

				s.onload = callback;
				head.insertBefore(s, style);

			}

		} else if (callback) {
			callback();
		}

	}

/****
* AJAX LOAD
* Load pages asynchronously in ajax mode
*/

if ($.ajaxLoad) {

	paceOptions = {
		elements: false,
		restartOnRequestAfter: false
	};

	url = location.hash.replace(/^#/, '');

	if (url != '') {
		setUpUrl(url);
	} else {
		setUpUrl($.defaultPage);
	}

	$(document).on('click', '.nav a[href!="#"]', function(event) {

		if ( $(this).parent().parent().hasClass('nav-tabs') || $(this).parent().parent().hasClass('nav-pills') ) {
			event.preventDefault();
		} else if ( $(this).attr('target') == '_top' ) {
			event.preventDefault();
		    $this = $(event.currentTarget);
		    window.location = ($this.attr('href'));
		} else if ( $(this).attr('target') == '_blank' ) {
			event.preventDefault();
			$this = $(event.currentTarget);
			window.open($this.attr('href'));
		} else {
			event.preventDefault();
			var target = $(event.currentTarget);
			setUpUrl(target.attr('href'));
		}
	});

	$(document).on('click', 'a[href="#"]', function(e) {
		e.preventDefault();
	});
}

function setUpUrl(url) {

	$('.nav li .nav-link').removeClass('active');
	$('.nav li.nav-dropdown').removeClass('open');
	$('.nav li:has(a[href="' + url + '"])').addClass('open');
	$('.nav a[href="' + url + '"]').addClass('active');

	//.find('.nav-link').addClass('active');

	//$('.nav li:has(a[href="' + url + '"])').addClass('active').parent().show();

	// if ( $('.nav li:has(a[href="' + url + '"])').find("ul").size() != 0 ) {
	//
	// 	$('.opened').removeClass('opened');
	//
	// 	$('.nav a[href="' + url + '"]').parents('li').add(this).each(function(){
	// 		$(this).addClass('opened');
	// 	});
	//
	// 	$('.nav li').each(function(){
	// 		if ( !$(this).hasClass('opened') ) {
	// 			$(this).find('ul').slideUp();
	// 		}
	// 	});
	// }

	loadPage(url);
}

function loadPage(url) {

	$.ajax({
		type : 'GET',
		url : $.subPagesDirectory + url,
		dataType : 'html',
		cache : false,
		async: false,
		beforeSend : function() {
			$.mainContent.css({ opacity : 0 });
		},
		success : function() {
			Pace.restart();
			$('html, body').animate({ scrollTop: 0 }, 0);
			$.mainContent.load($.subPagesDirectory + url, null, function (responseText) {
				window.location.hash = url;
				setUpTitle(url);
			}).delay(250).animate({ opacity : 1 }, 0);
		},
		error : function() {
			window.location.href = $.page404;
		}

	});
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function setUpTitle(url) {

	if ($.dynamicTitle) {

		$.currentTitle = $('#current-title');
		$.currentDesc = $('#current-desc');

		var href = url;

		if ($.currentTitle.length) {
			$('.page-title').html($.currentTitle.html());
		} else {
			var title = href.substr(href.lastIndexOf('/') + 1)
			$('.page-title').html(capitalizeFirstLetter(title.replace('.html', '')));
		}
		$('.page-title').html($.currentTitle.html());
		$('.page-desc').html($.currentDesc.html());

	}
}

/****
* MAIN NAVIGATION
*/

$(document).ready(function($){

	navigationSmartResize();

	// Add class .active to current link - AJAX Mode off
	$.navigation.find('a').each(function(){

		var cUrl = String(window.location);

		if (cUrl.substr(cUrl.length - 1) == '#') {
			cUrl = cUrl.slice(0,-1);
		}

		if ($($(this))[0].href==cUrl) {
			$(this).addClass('active');

			$(this).parents('ul').add(this).each(function(){
			    $(this).parent().addClass('open');
			});
		}
	});

	// Dropdown Menu
	$.navigation.on('click', 'a', function(e){

		if ($.ajaxLoad) {
			e.preventDefault();
		}

        if ($(this).hasClass('nav-dropdown-toggle')) {
			$(this).parent().toggleClass('open');
		}

	});

	/* ---------- Main Menu Open/Close, Min/Full ---------- */
	$('.navbar-toggler').click(function(){

		if ($(this).hasClass('layout-toggler')) {
			$('body').toggleClass('compact-nav');
		} else {
			$('body').toggleClass('mobile-open');
		}

	});

	/* ---------- Disable moving to top ---------- */
	$('a[href="#"][data-top!=true]').click(function(e){
		e.preventDefault();
	});

});

/****
* CARDS ACTIONS
*/

$(document).on('click', '.card-actions a', function(e){
	e.preventDefault();

	if ($(this).hasClass('btn-close')) {
		$(this).parent().parent().parent().fadeOut();
	} else if ($(this).hasClass('btn-minimize')) {
		var $target = $(this).parent().parent().next('.card-block');
		if (!$(this).hasClass('collapsed')) {
			$('i',$(this)).removeClass($.panelIconOpened).addClass($.panelIconClosed);
		} else {
			$('i',$(this)).removeClass($.panelIconClosed).addClass($.panelIconOpened);
		}

	} else if ($(this).hasClass('btn-setting')) {
		$('#myModal').modal('show');
	}

});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function init(url) {

	/* ---------- Tooltip ---------- */
	$('[rel="tooltip"],[data-rel="tooltip"]').tooltip({"placement":"bottom",delay: { show: 400, hide: 200 }});

	/* ---------- Popover ---------- */
	$('[rel="popover"],[data-rel="popover"],[data-toggle="popover"]').popover();

}

/****
* SMART RESIZE
*/
$(window).bind('resize', navigationSmartResize);

function navigationSmartResize(e) {

	if ($('body').hasClass('sidebar-nav') && $('body').hasClass('fixed-nav')) {
		var bodyHeight = $(window).height();
		var headerHeight = $('header').outerHeight();
		var navHeaderHeight = $('#navigation-header').outerHeight();
		var navFooterHeight = $('#navigation-footer').outerHeight();
		$('#navigation-items').css('height', bodyHeight - headerHeight - navHeaderHeight - navFooterHeight);
	}

}
