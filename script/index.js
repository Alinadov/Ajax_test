'use strict';


$.get( 'http://apihonestbank.herokuapp.com/accounts/1', (data) => {
  $( ".account" ).html( data.number );
  $( ".user" ).html( data.customUser.role );
  $( ".amount" ).html( data.amount );
  $( ".currency" ).html( data.currency );
});



$.get( 'http://apihonestbank.herokuapp.com/wallets/1', (data) => {
  $( ".wallets_card_name" ).html( data.name );
  $( ".wallets_card_expired" ).html( data.expired );
  $( ".wallets_card_number" ).html( data.number );
  $( ".wallets_card_status" ).html( data.status );
});

// $.get('http://apihonestbank.herokuapp.com/wallets', (data) => {
//   $( ".all_Wallets").html($.each(data, function(key, element) {
//     alert('key: ' + key + '\n' + 'value: ' + element)}););
//   });