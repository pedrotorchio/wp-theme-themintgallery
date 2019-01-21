<?php
 /**
  * Add REST API support to an already registered post type.
  */
  add_action( 'init', 'my_custom_post_type_rest_support', 25 );
  function my_custom_post_type_rest_support() {
  	global $wp_post_types;
    
  	//be sure to set this to the name of your post type!
  	$post_type_name = 'event';
  	$post_type_endpoint = 'events';
  	if( isset( $wp_post_types[ $post_type_name ] ) ) {
  		$wp_post_types[$post_type_name]->show_in_rest = true;
  		$wp_post_types[$post_type_name]->rest_base = $post_type_endpoint;
  		$wp_post_types[$post_type_name]->rest_controller_class = 'WP_REST_Posts_Controller';
  	}
  
  }


add_action( 'rest_api_init', 'editEventsData' );

function editEventsData() {
    // Add the plaintext content to GET requests for individual posts

    register_rest_field(
        'event',
        'featured_image',
        array(
            'get_callback' => function($object, $field_name, $request) {
                return wp_prepare_attachment_for_js($object['featured_media']);
            }
        )
    );
    
}