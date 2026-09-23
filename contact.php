<?php
// ----------- SETTINGS (paste from your service-account JSON) -----------
$spreadsheetId = "1Ir5ht8DoGsC-LrfK4HUFCHWsLtNI8JPPSaKCoYkkvA8";
$sheetGid      = 0;

$clientEmail = "rise-school-contact-form@adroit-bonsai-509309-i1.iam.gserviceaccount.com";
$privateKey  =  "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDBWzkk/bJftXmz\nguzJzA+uKhWsP0x/mE4QVNK2BzDwxvib6io/ryCUxUYU2ExPQ0LMNbec/WwYP4Nl\nEj/gdOanSoz7+6rRJsg5oRYvWWI85Mn+yWzqXnGuukwKxGCbGUWpqst6GYRfxELn\nOecVfyIZqQsopkDfa1AcF/xdBFdBL0GQB/w9acwVJR83tvZ0yYnnXVmsbu11bA6t\nX8bBYx8iBMqMb9IlcCWseEDEY04HC2SIOZIq1G7bJnvhXJ5IwwsFmxS5ecXENTYF\nxNXqWRKdmflIMpFFsB0Nn1aQsrDLZyYwV8n/+Qr5T1bRAWRwJ2q4+sqRN0486W/p\nzKr4rQTJAgMBAAECggEABBvs7zcQAR4xb6nu38v9IlGlI8O1m7mQISM4ViN5fAhy\ndJfJnZBadCbsGhnNp1qR0xaqKAUvtKU25OE6J8o8M55vOBStWOQG2citWMTAxHQF\nQeuka6elqVWus4TgW7NyCkzFpbrgmAtq85CEs21/+0UfJlZAJy9X5LzywURMGWe+\n62d0hzaANLk4krcQg3GjBx5nKtC9VSRHZ6Qwa6t3wOjYHzEt87OfKG9+JBJurP0U\ngJehOpyC+3TSd4KDWHnZPFm/xC/Yq1qeiIy9dVB+ogXFpeBvsu2RY0APXU4t4RxU\n9StiXPw/fEUr+z3SH7UjzPv3K1a+vtRxn6+7TJHi3QKBgQD5jJetRphWkwj9/Cvt\nhyeNwZzgmOTVKAyIxvSPEIUkYfuud0BVgVVQRJ7ddvDC+wkW/rI1KfJona7IXtgJ\nPe/vn9aso2gvmMqkqc+fSwi6D6icxrkUj7MkrWU04XfPLrF2GjxR6Tw5gZAawlT0\n6IcUe19yth7RnQSmsLvfecYWtQKBgQDGWsVg5ou36fmz+EonfCYmGdElogIv2gMy\nSBiVgV98rgEbtV2YsZnq2tcHwPU7VZPV2IrXspT9vqzh0Ixrr/D7p2PLIAUFqKzO\nQsWPNU+HSOTgf84GgCzLYEhbDsG3mr2rxD/bdijzAnKth4S2MvrQuf8fjeleyazq\npvbJ4L8ORQKBgQDTzI7DYyJSgFLmdku2OrrIZqZGPZ4ih+4zfGD+t6+5FGxvRAlX\nSQDmsob/Qj7Pzg6F9L+9vY9fWU2KBG1pUqc9ArVKKxp3I0ACh5mPAjky6a1a+pMF\nL32FSKGYQzDTqDa4HUZK4yDZUezDuWIvxtc2/Asjqgz4LUNQUrnxz0Hf7QKBgEIC\nn0EaOFEiSnk8HeF6DXAMk2/EtJmcIggvug63GUHy3meMOfPA1wozffAUpQfz+Njn\n0Xzq725qcDpOHw0PZlE5aZqFs2YotimGSxzXjvnkplaX8cZ0DXQ5PJshFBK4Knrp\nOp8ceZA1tlhNizrfSF0CKQclQQ7MawFEQ0j3xF1JAoGBAOpxo3ZmhKxWN7iRToS6\nWGpSVIf7tKlvpRPLXs5G4BASoPELxsd5au30+SjY/GxmSymWuSa0infMJxSJY8Im\nQkBSs2CloRjOjQ9iitYiBSgFSU5nwe6dgJBBiNyDdNvCiS42qJItTK3Gf+Y70qgp\nQsoeE9PIGrD6DXB1TSCcL1WB\n-----END PRIVATE KEY-----\n"; // keep the \n characters exactly as in the JSON

$allowedOrigins = [
    'http://localhost:3000',
    'https://riseschool.in',
    'https://www.riseschool.in',
    'https://riseschool_new.in',
    'https://www.riseschool_new.in',
];

date_default_timezone_set('Asia/Kolkata');

// ----------- HEADERS / CORS -----------
header('Content-Type: application/json; charset=utf-8');

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin && in_array($origin, $allowedOrigins, true)) {
    header("Access-Control-Allow-Origin: $origin");
    header('Vary: Origin');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed."]);
    exit;
}

// ----------- INPUT -----------
$input = $_POST;
if (stripos($_SERVER['CONTENT_TYPE'] ?? '', 'application/json') !== false) {
    $decoded = json_decode(file_get_contents('php://input'), true);
    $input = is_array($decoded) ? $decoded : [];
}

$name    = trim(strip_tags($input['name']    ?? ''));
$email   = trim(strip_tags($input['email']   ?? ''));
$phone   = trim(strip_tags($input['phone']   ?? ''));
$message = trim(strip_tags($input['message'] ?? ''));
$consent = !empty($input['consent']) && $input['consent'] !== 'false';

// ----------- VALIDATION -----------
if ($name === '' || $email === '' || $phone === '' || $message === '') {
    http_response_code(422);
    echo json_encode(["success" => false, "message" => "Please fill in all required fields."]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(["success" => false, "message" => "Please enter a valid email address."]);
    exit;
}

if (!preg_match('/^[0-9+\-\s()]{7,20}$/', $phone)) {
    http_response_code(422);
    echo json_encode(["success" => false, "message" => "Please enter a valid phone number."]);
    exit;
}

if (!$consent) {
    http_response_code(422);
    echo json_encode(["success" => false, "message" => "Consent is required."]);
    exit;
}

// ----------- SMALL HELPERS -----------
function b64url($data) {
    return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
}

// $body: array => JSON (or form-encoded if $form = true), null => no body
function googleCall($method, $url, $body = null, $token = null, $form = false) {
    $ch = curl_init($url);
    $headers = [];
    if ($token) $headers[] = "Authorization: Bearer $token";

    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 20);

    if ($body !== null) {
        if ($form) {
            curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($body));
        } else {
            $headers[] = 'Content-Type: application/json';
            curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($body));
        }
    }
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    $raw  = curl_exec($ch);
    $code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $err  = curl_error($ch);
    curl_close($ch);

    if ($raw === false) throw new Exception("cURL error: $err");
    if ($code >= 400)   throw new Exception("Google error ($code): $raw");

    return json_decode($raw, true) ?: [];
}

// ----------- SAVE TO GOOGLE SHEET -----------
try {
    // 1) Access token (signed JWT)
    $now    = time();
    $header = b64url(json_encode(['alg' => 'RS256', 'typ' => 'JWT']));
    $claims = b64url(json_encode([
        'iss'   => $clientEmail,
        'scope' => 'https://www.googleapis.com/auth/spreadsheets',
        'aud'   => 'https://oauth2.googleapis.com/token',
        'iat'   => $now,
        'exp'   => $now + 3600
    ]));

    $signature = '';
    if (!openssl_sign("$header.$claims", $signature, $privateKey, 'sha256WithRSAEncryption')) {
        throw new Exception('Could not sign token. Check the private key.');
    }

    $auth = googleCall('POST', 'https://oauth2.googleapis.com/token', [
        'grant_type' => 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        'assertion'  => "$header.$claims." . b64url($signature)
    ], null, true);

    $token = $auth['access_token'] ?? '';
    if ($token === '') throw new Exception('No access token returned.');

    // 2) Find tab name from gid
    $meta = googleCall(
        'GET',
        "https://sheets.googleapis.com/v4/spreadsheets/$spreadsheetId?fields=sheets.properties(sheetId,title)",
        null,
        $token
    );

    $tab = null;
    foreach ($meta['sheets'] ?? [] as $s) {
        if (($s['properties']['sheetId'] ?? null) === $sheetGid) {
            $tab = $s['properties']['title'];
            break;
        }
    }
    if ($tab === null) throw new Exception("Sheet with gid $sheetGid not found.");

    // 3) Add header row if the sheet is empty
    $headerRange = rawurlencode("'$tab'!A1:F1");
    $check = googleCall(
        'GET',
        "https://sheets.googleapis.com/v4/spreadsheets/$spreadsheetId/values/$headerRange",
        null,
        $token
    );

    if (empty($check['values'][0][0])) {
        googleCall(
            'PUT',
            "https://sheets.googleapis.com/v4/spreadsheets/$spreadsheetId/values/$headerRange?valueInputOption=RAW",
            ['values' => [['Timestamp', 'Name', 'Email', 'Phone', 'Message', 'Consent']]],
            $token
        );
    }

    // 4) Append the new row
    $appendRange = rawurlencode("'$tab'!A:F");
    googleCall(
        'POST',
        "https://sheets.googleapis.com/v4/spreadsheets/$spreadsheetId/values/$appendRange:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS",
        ['values' => [[date("Y-m-d H:i:s"), $name, $email, $phone, $message, "Yes"]]],
        $token
    );
} catch (Exception $e) {
    error_log('[contact.php] ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Something went wrong. Please try again later."]);
    exit;
}

// ----------- RESPONSE -----------
echo json_encode(["success" => true, "message" => "Message sent successfully!"]);