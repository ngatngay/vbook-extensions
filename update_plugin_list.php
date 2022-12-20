<?php

// Thong tin tac gia kho plugin
$data = [
    'metadata' => [
        'author'      => 'ngatngay',
        'description' => 'ngatngay vbook extensions'
    ],

    // plugin list
    'data'     => []
];

// Lay danh sach plugin
$plugins = glob('*/plugin.json');

foreach ($plugins as $plugin) {
    $plugin_url = 'https://raw.githubusercontent.com/ngatngay/vbook-extensions/master';
    $plugin_dir = dirname($plugin);

    $plugin_icon = 'icon.png';
    $plugin_file = 'plugin.zip';

    // Thong tin plugin
    $plugin_detail = json_decode(file_get_contents($plugin), true);


    // Build plugin

    // Xoa plugin cu
    if (file_exists("$plugin_dir/$plugin_file")) {
        unlink("$plugin_dir/$plugin_file");
    }

    // Tao file zip
    $zip = new ZipArchive();
    $zip->open("$plugin_dir/$plugin_file", ZipArchive::CREATE | ZipArchive::OVERWRITE);

    $plugin_src_path = realpath($plugin_dir);

    // Create recursive directory iterator
    /** @var SplFileInfo[] $files */
    $files = new RecursiveIteratorIterator(
        new RecursiveDirectoryIterator($plugin_src_path),
        RecursiveIteratorIterator::LEAVES_ONLY
    );

    foreach ($files as $name => $file) {
        if (!$file->isDir()) {
            // Khong nen plugin file
            if ($file->getFilename() == $plugin_file) {
                continue;
            }

            // Get real and relative path for current file
            $filePath     = $file->getRealPath();
            $relativePath = substr($filePath, strlen($plugin_src_path) + 1);

            // Add current file to archive
            $zip->addFile($filePath, $relativePath);
        }
    }

    // Nen file
    $zip->close();

    // Thong tin plugin
    $data['data'][] = [
        'source'      => $plugin_detail['metadata']['source'],
        'name'        => $plugin_detail['metadata']['name'],
        'description' => $plugin_detail['metadata']['description'],

        'author'  => $plugin_detail['metadata']['author'],
        'version' => $plugin_detail['metadata']['version'],
        'type'    => $plugin_detail['metadata']['type'],
        'locale'  => $plugin_detail['metadata']['locale'],

        'icon' => "$plugin_url/$plugin_dir/$plugin_icon",
        'path' => "$plugin_url/$plugin_dir/$plugin_file"
    ];
}

file_put_contents('plugin.json', json_encode($data, JSON_PRETTY_PRINT));
