<?php

add_action( 'rest_api_init', 'editArtistData' );

function editArtistData() {
    // Add the plaintext content to GET requests for individual posts

    register_rest_field(
        'artists',
        'CFS',
        array(
            'get_callback' => function($object, $field_name, $request) {
                
                $data = CFS()->get(false);

                $gallery = array_map(function ($piece) use ($data) {

                    $piece['images'] = array_map(function ($imageData) use ($data) {
                        
                        $imageId = $imageData['image'];
                        
                        $image = wp_prepare_attachment_for_js($imageId);
                        
                        return $image;

                    }, $piece['images']);

                    return $piece;
                }, $data['gallery']);
                $data['gallery'] = $gallery;
                
                return $data;
            },
        )
    );
    register_rest_field(
        'artists',
        'acf',
        array(
            'get_callback' => function($object, $field_name, $request) {
                $data = get_fields();
                
                $data['profile_picture'] = wp_prepare_attachment_for_js($data['profile_picture']);
                
                return $data;
            },
        )
    );

}