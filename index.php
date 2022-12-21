<?php /**
 * =========================================
 *  MECHA · CONTENT MANAGEMENT SYSTEM (CMS)
 * =========================================
 * © 2014 – 2021 · Taufik Nurrohman
 * -----------------------------------------
 */define('VERSION','2.6.4');define('DS',DIRECTORY_SEPARATOR);define('PS',PATH_SEPARATOR);define('N',PHP_EOL);define('P',"\u{001A}");define('S',"\u{200C}");define('GROUND',rtrim(strtr($_SERVER['CONTEXT_DOCUMENT_ROOT']??$_SERVER['DOCUMENT_ROOT'],'/',DS),DS));define('ROOT',__DIR__);define('ENGINE',ROOT.DS.'engine');define('LOT',ROOT.DS.'lot');define('SESSION',null);define('DEBUG',false);require ENGINE.DS.'f.php';require ENGINE.DS.'fire.php';