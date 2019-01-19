<?php
add_action( 'rest_api_init', 'editArtistData' );

function editArtistData() {
    // Add the plaintext content to GET requests for individual posts
    

    register_rest_field(
        'artists',
        'featured_image',
        array(
            'get_callback' => function($object, $field_name, $request) {
                return wp_prepare_attachment_for_js($object['featured_media']);
           }
        )
        );
    register_rest_field(
        'artists',
        'CFS',
        array(
            'get_callback' => function($object, $field_name, $request) {
                
                $data = CFS()->get(false);

                $galleryExtraction = function ($piece) use ($data) {

                    $piece['images'] = array_map(function ($imageData) use ($data) {
                        
                        $imageId = $imageData['image'];
                        
                        $image = wp_prepare_attachment_for_js($imageId);
                        
                        return $image;

                    }, $piece['images']);

                    return $piece;
                };

                $data['gallery'] = array_map($galleryExtraction, $data['gallery']);

                foreach ($data['themed_gallery'] as &$themedGallery) {
                    $themedGallery['pieces'] = array_map($galleryExtraction, $themedGallery['pieces']);
                }
                
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