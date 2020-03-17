var stripe = Stripe('pk_test_tPaAKtePJ0a7qcGAmunjQgdJ00NBlVgn3c');

var $form = $('#checkout-form');

$form.submit(function(event) {
    $('#charge-error').addClass('hidden');
    $('#payOnline').prop('disabled', true);
    Stripe.card.createToken({
        number: $('#card-number').val(),
        cvc: $('#card-cvc').val(),
        exp_month: $('#card-expiry-month').val(),
        exp_year: $('#card-expiry-year').val(),
        name: $('#card-name').val()
    }, stripeResponseHandler);
    return false;
});

function stripeResponseHandler(status, response) {
    if (response.error) { // Problem!

        // Show the errors on the form
        $('#charge-error').text(response.error.message);
        $('#charge-error').removeClass('hidden');
        $('#payOnline').prop('disabled', false);

    } else { // Token was create

        // Get the token ID:
        var token = response.id;

        // Insert token into the form 
        $form.append($('<input type="hidden" name="stripeToken" />').val(token));

        // Submit the form
        $form.get(0).submit();
    }
}