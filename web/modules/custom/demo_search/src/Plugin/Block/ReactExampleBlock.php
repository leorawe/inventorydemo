<?php
namespace Drupal\demo_search\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'ReactExampleBlock' block.
 *
 * @Block(
 *  id = "react_example_block",
 *  admin_label = @Translation("React example block"),
 * )
 */
class ReactExampleBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];
    $build['react_example_block'] = [
      '#markup' => '<div id="react-app"></div>',
      '#attached' => [
        'library' => 'demo_theme/react_app'
      ],
    ];
    return $build;
  }
}
