/**
 * Add the tab button to each tab section
 */
var tabs = document.querySelector( '.js-tabbing' );
if( tabs !== null ) {
	tabs.insertAdjacentHTML(
		'afterbegin',
		'<div class="bar">' +
		'<button type="button" class="a11y-button a11y-button--soft js-tabbing-switch">Show tabbing</button>' +
		'</div>'
	);
}


/**
 * Toggle the tabs on the button click
 */
var interval = 0;
AddEvent( document.querySelector( '.js-tabbing-switch' ), 'click', function( event, $this ) {
	var _isOn = HasClass( $this, 'is-on' );

	if( _isOn === null ) {
		AddClass( $this, 'is-on' );
		$this.innerText = 'Stop tabbing';
		interval = Tab();
	}
	else {
		StopTab( interval, $this );
	}
});


/**
 * Event listener for when the user scrolls or uses the tab key to stop Tab() function
 */
AddEvent( document.querySelector( 'body' ), 'keydown', function( event, $this ) {
	StopTab( interval, document.querySelector( '.js-tabbing-switch' ) )
});


/**
 * Move the tab through each element with the .js-focus-me class
 */
function Tab() {
	var items = document.querySelectorAll( '.js-focus-me' );
	var loop = 0;

	items[ loop ].focus();
	loop ++;

	return setInterval( function() {
		items[ loop ].focus();
		loop ++;

		if( loop >= items.length ) {
			loop = 0;
		}
	}, 1000 );
}


/**
 * Stop the Tab() function
 */
function StopTab( interval, $this ) {
	RemoveClass( $this, 'is-on' );
	$this.innerText = 'Show tabbing';
	clearInterval( interval );
}

var filters = document.querySelector( '.js-filter' );
if( filters !== null ) {
	var active = document.getElementById( 'filter-stylesheet' ).getAttribute( 'href' ).split( '/' );
	active = active[ active.length - 1 ].replace( '.css', '' );

	filters.insertAdjacentHTML(
		'afterbegin',
		'<div class="bar">' +
		'<button type="button" class="a11y-button js-filter-btn' + ( active == 'deuteranopia' ? ' is-active' : '' ) + '" data-filter="deuteranopia">Deuteranopia</button>' +
		'<button type="button" class="a11y-button js-filter-btn' + ( active == 'tritanopia' ? ' is-active' : '' ) + '" data-filter="tritanopia">Tritanopia</button>' +
		'</div>'
	);
}

AddEvent( document.querySelectorAll( '.js-filter-btn' ), 'click', function( event, $this ) {
	var sheet = document.getElementById( 'filter-stylesheet' );
	var filter = $this.getAttribute( 'data-filter' );
	var url = sheet.getAttribute( 'data-' + filter );

	sheet.setAttribute( 'href', url );

	var allButtons = document.querySelectorAll( '.js-filter-btn' );
	for( var i = 0; i < allButtons.length; i++ ) {
		RemoveClass( allButtons[ i ], 'is-active' );
	}

	AddClass( $this, 'is-active' );
});
