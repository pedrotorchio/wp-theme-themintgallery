<?php
add_action( 'rest_api_init', 'editSlidesData' );

function editSlidesData() {
    // Add the plaintext content to GET requests for individual posts
    

    register_rest_field(
        'slides',
        'featured_image',
        array(
            'get_callback' => function($object, $field_name, $request) {
                
                return wp_prepare_attachment_for_js($object['featured_media']);
           }
        )
    );
    register_rest_field(
        'slides',
        'acf',
        array(
            'get_callback' => function($object, $field_name, $request) {
                $data = get_fields();
                
                return $data;
            },
        )
    );
    register_rest_field(
        'slides',
        'CFS',
        array(
            'get_callback' => function($object, $field_name, $request) {
                $data = CFS()->get(false);
                $data['slides'] = array_map(function ($data) {
                    return wp_prepare_attachment_for_js($data['image']);
                }, $data['slides']);
                
                return $data;
            },
        )
    );

}