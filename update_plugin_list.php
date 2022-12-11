<?php

$data = [
    'metadata' => [
        'author' => 'ngatngay',
        'description' => 'ngatngay vbook extensions'
    ],

    // plugin list
    'data' => []
];

$plugins = glob('*/plugin.json');
foreach ($plugins as $plugin) {
    $plugin_detail = json_decode(file_get_contents($plugin), true);

    $data['data'][] = [
        'source' => $plugin_detail['metadata']['source'],
        'name' => $plugin_detail['metadata']['name'],
        'description' => $plugin_detail['metadata']['description'],

        'author' => $plugin_detail['metadata']['author'],
        'version' => $plugin_detail['metadata']['version'],
        'type' => $plugin_detail['metadata']['type'],
        'locale' => $plugin_detail['metadata']['locale'],

        'icon' => $plugin_detail['metadata']['icon'],
        'path' => $plugin_detail['metadata']['path'],

    ];
}

file_put_contents('plugin.json', json_encode($data));