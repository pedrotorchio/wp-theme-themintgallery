<?php

add_action( 'rest_api_init', 'dt_register_api_hooks' );
function dt_register_api_hooks() {
    foreach([
        'artists'

    ] as $type)
        registerCFSfield($type);

}
function registerCFSfield($type) {
    // Add the plaintext content to GET requests for individual posts

    register_rest_field(
        $type,
        'CFS',
        array(
            'get_callback' => function($object, $field_name, $request) {
                return CFS()->get(false);
            },
        )
    );

}