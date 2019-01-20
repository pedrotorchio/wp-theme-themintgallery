<?php
add_action( 'rest_api_init', 'editPagesData' );

function editPagesData() {
    // Add the plaintext content to GET requests for individual posts
    

    register_rest_field(
        'page',
        'featured_image',
        array(
            'get_callback' => function($object, $field_name, $request) {
                
                return wp_prepare_attachment_for_js($object['featured_media']);
           }
        )
    );
    register_rest_field(
        'page',
        'acf',
        array(
            'get_callback' => function($object, $field_name, $request) {
                $data = get_fields();
                
                return $data;
            },
        )
    );
    register_rest_field(
        'page',
        'CFS',
        array(
            'get_callback' => function($object, $field_name, $request) {
                
                $data = CFS()->get(false);

                $data['quotes'] = array_map(function ($quoteId) {
                    return CFS()->get(false, $quoteId);
                }, $data['quotes']);
                
                return $data;
            },
        )
    );

}