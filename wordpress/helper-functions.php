<?php
function mint_getNavStructure($id) {
    $w = new WPSE_Nav_Menu_Tree;
    $args = (object) [ 'items_wrap' => '', 'depth' => 0, 'walker' => $w ];
    $items = wp_get_nav_menu_items( 'Main Menu' );
    walk_nav_menu_tree( $items, $args->depth, $args );

    $tree = $w->branch;
    $flat = array();

    foreach ($tree as $key => $value) {
        array_push($flat, $value);
    }
    return  $flat;
}