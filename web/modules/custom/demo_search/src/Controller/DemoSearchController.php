<?php

namespace Drupal\demo_search\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Provides a route response for the demo_search module.
 */
class DemoSearchController extends ControllerBase {

  /**
   * Returns the search page.
   *
   * @return array
   *   A simple render array.
   */
  public function show() {
    $markup = '<div id="demo-search"></div>';
    return [
      '#markup' => $markup,
      '#attached' => [
        'library' => 'demo_search/demo_search'
      ],
    ];
  }

}