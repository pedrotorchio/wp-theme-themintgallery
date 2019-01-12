<?php

function custom_add_google_fonts() {
    wp_enqueue_style( 'custom-google-fonts', 'https://fonts.googleapis.com/css?family=Thasadith:400,700', false );
}

add_action( 'wp_enqueue_scripts', 'custom_add_google_fonts' );