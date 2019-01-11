<?php

class WPSE_Nav_Menu_Tree extends Walker_Nav_Menu
{
   public $branch = [];

   public function display_element($element, &$children, $max_depth, $depth = 0, $args, &$output )
   {
      $element->children = array();

      if( 0 == $depth )
         $this->branch[$element->ID] = $element;

      if ( isset($children[$element->ID] ) )
         $element->children = $children[$element->ID];

      parent::display_element($element, $children, $max_depth, $depth, $args, $output);
   }
}