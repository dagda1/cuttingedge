## OWASP Top 10 A1
### Mitigate SQL Injection Attacks
### Matches attempted SQLi patterns in the URI, QUERY_STRING, BODY, COOKIES
resource "aws_waf_sql_injection_match_set" "default" {
  name = "${lower(var.name)}-owasp-01-detect-sql-injection"

  sql_injection_match_tuples {
    text_transformation = "URL_DECODE"

    field_to_match {
      type = "URI"
    }
  }

  sql_injection_match_tuples {
    text_transformation = "HTML_ENTITY_DECODE"

    field_to_match {
      type = "URI"
    }
  }

  sql_injection_match_tuples {
    text_transformation = "URL_DECODE"

    field_to_match {
      type = "QUERY_STRING"
    }
  }

  sql_injection_match_tuples {
    text_transformation = "HTML_ENTITY_DECODE"

    field_to_match {
      type = "QUERY_STRING"
    }
  }

  sql_injection_match_tuples {
    text_transformation = "URL_DECODE"

    field_to_match {
      type = "BODY"
    }
  }

  sql_injection_match_tuples {
    text_transformation = "HTML_ENTITY_DECODE"

    field_to_match {
      type = "BODY"
    }
  }

  sql_injection_match_tuples {
    text_transformation = "URL_DECODE"

    field_to_match {
      type = "HEADER"
      data = "Authorization"
    }
  }

  sql_injection_match_tuples {
    text_transformation = "HTML_ENTITY_DECODE"

    field_to_match {
      type = "HEADER"
      data = "Authorization"
    }
  }
}

resource "aws_waf_rule" "owasp_01_sql_injection_rule" {
  depends_on = [aws_waf_sql_injection_match_set.default]


  name        = "${lower(var.name)}-owasp-01-mitigate-sql-injection"
  metric_name = "${lower(var.name)}OWASP01MitigateSQLInjection"

  predicates {
    data_id = aws_waf_sql_injection_match_set.default.id
    negated = "false"
    type    = "SqlInjectionMatch"
  }
}

## OWASP Top 10 A2
### Blacklist bad/hijacked JWT tokens or session IDs
### Matches the specific values in the cookie or Authorization header for JWT it is sufficient to check the signature
resource "aws_waf_byte_match_set" "owasp_02_auth_token_string_set" {

  name = "${lower(var.name)}-owasp-02-match-auth-token"

  byte_match_tuples {
    text_transformation   = "URL_DECODE"
    target_string         = "example-session-id"
    positional_constraint = "CONTAINS"

    field_to_match {
      type = "HEADER"
      data = "cookie"
    }
  }

  byte_match_tuples {
    text_transformation   = "URL_DECODE"
    target_string         = ".TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"
    positional_constraint = "ENDS_WITH"

    field_to_match {
      type = "HEADER"
      data = "authorization"
    }
  }
}

resource "aws_waf_rule" "owasp_02_auth_token_rule" {
  depends_on = [aws_waf_byte_match_set.owasp_02_auth_token_string_set]


  name        = "${lower(var.name)}-owasp-02-detect-bad-auth-token"
  metric_name = "${lower(var.name)}OWASP02BadAuthToken"

  predicates {
    data_id = aws_waf_byte_match_set.owasp_02_auth_token_string_set.id
    negated = "false"
    type    = "ByteMatch"
  }
}

## OWASP Top 10 A3
### Mitigate Cross Site Scripting Attacks
### Matches attempted XSS patterns in the URI, QUERY_STRING, BODY, COOKIES
resource "aws_waf_xss_match_set" "owasp_03_xss_set" {

  name = "${lower(var.name)}-owasp-03-detect-xss"

  xss_match_tuples {
    text_transformation = "URL_DECODE"

    field_to_match {
      type = "URI"
    }
  }

  xss_match_tuples {
    text_transformation = "HTML_ENTITY_DECODE"

    field_to_match {
      type = "URI"
    }
  }

  xss_match_tuples {
    text_transformation = "URL_DECODE"

    field_to_match {
      type = "QUERY_STRING"
    }
  }

  xss_match_tuples {
    text_transformation = "HTML_ENTITY_DECODE"

    field_to_match {
      type = "QUERY_STRING"
    }
  }

  xss_match_tuples {
    text_transformation = "URL_DECODE"

    field_to_match {
      type = "BODY"
    }
  }

  xss_match_tuples {
    text_transformation = "HTML_ENTITY_DECODE"

    field_to_match {
      type = "BODY"
    }
  }

  xss_match_tuples {
    text_transformation = "URL_DECODE"

    field_to_match {
      type = "HEADER"
      data = "cookie"
    }
  }

  xss_match_tuples {
    text_transformation = "HTML_ENTITY_DECODE"

    field_to_match {
      type = "HEADER"
      data = "cookie"
    }
  }
}

resource "aws_waf_rule" "owasp_03_xss_rule" {
  depends_on = [aws_waf_xss_match_set.owasp_03_xss_set]


  name        = "${lower(var.name)}-owasp-03-mitigate-xss"
  metric_name = "${lower(var.name)}OWASP03MitigateXSS"

  predicates {
    data_id = aws_waf_xss_match_set.owasp_03_xss_set.id
    negated = "false"
    type    = "XssMatch"
  }
}

## OWASP Top 10 A4
### Path Traversal, LFI, RFI
### Matches request patterns designed to traverse filesystem paths, and include local or remote files
resource "aws_waf_byte_match_set" "owasp_04_paths_string_set" {

  name = "${lower(var.name)}-owasp-04-match-rfi-lfi-traversal"

  byte_match_tuples {
    text_transformation   = "URL_DECODE"
    target_string         = "../"
    positional_constraint = "CONTAINS"

    field_to_match {
      type = "URI"
    }
  }

  byte_match_tuples {
    text_transformation   = "HTML_ENTITY_DECODE"
    target_string         = "../"
    positional_constraint = "CONTAINS"

    field_to_match {
      type = "URI"
    }
  }

  byte_match_tuples {
    text_transformation   = "URL_DECODE"
    target_string         = "../"
    positional_constraint = "CONTAINS"

    field_to_match {
      type = "QUERY_STRING"
    }
  }

  byte_match_tuples {
    text_transformation   = "HTML_ENTITY_DECODE"
    target_string         = "../"
    positional_constraint = "CONTAINS"

    field_to_match {
      type = "QUERY_STRING"
    }
  }

  byte_match_tuples {
    text_transformation   = "URL_DECODE"
    target_string         = "://"
    positional_constraint = "CONTAINS"

    field_to_match {
      type = "URI"
    }
  }

  byte_match_tuples {
    text_transformation   = "HTML_ENTITY_DECODE"
    target_string         = "://"
    positional_constraint = "CONTAINS"

    field_to_match {
      type = "URI"
    }
  }

  byte_match_tuples {
    text_transformation   = "URL_DECODE"
    target_string         = "://"
    positional_constraint = "CONTAINS"

    field_to_match {
      type = "QUERY_STRING"
    }
  }

  byte_match_tuples {
    text_transformation   = "HTML_ENTITY_DECODE"
    target_string         = "://"
    positional_constraint = "CONTAINS"

    field_to_match {
      type = "QUERY_STRING"
    }
  }
}

resource "aws_waf_rule" "owasp_04_paths_rule" {
  depends_on = [aws_waf_byte_match_set.owasp_04_paths_string_set]


  name        = "${lower(var.name)}-owasp-04-detect-rfi-lfi-traversal"
  metric_name = "${lower(var.name)}OWASP04DetectRFILFITraversal"

  predicates {
    data_id = aws_waf_byte_match_set.owasp_04_paths_string_set.id
    negated = "false"
    type    = "ByteMatch"
  }
}

## OWASP Top 10 A4
## Privileged Module Access Restrictions
## Restrict access to the admin interface to known source IPs only
## Matches the URI prefix, when the remote IP isn't in the whitelist
## CURRENTLY NOT APPLICABLE

## OWASP Top 10 A5
## PHP Specific Security Misconfigurations
## Matches request patterns designed to exploit insecure PHP/CGI configuration
resource "aws_waf_byte_match_set" "owasp_06_php_insecure_qs_string_set" {

  name = "${lower(var.name)}-owasp-06-match-php-insecure-var-refs"

  byte_match_tuples {
    text_transformation   = "URL_DECODE"
    target_string         = "_SERVER["
    positional_constraint = "CONTAINS"

    field_to_match {
      type = "QUERY_STRING"
    }
  }

  byte_match_tuples {
    text_transformation   = "URL_DECODE"
    target_string         = "_ENV["
    positional_constraint = "CONTAINS"

    field_to_match {
      type = "QUERY_STRING"
    }
  }

  byte_match_tuples {
    text_transformation   = "URL_DECODE"
    target_string         = "auto_prepend_file="
    positional_constraint = "CONTAINS"

    field_to_match {
      type = "QUERY_STRING"
    }
  }

  byte_match_tuples {
    text_transformation   = "URL_DECODE"
    target_string         = "auto_append_file="
    positional_constraint = "CONTAINS"

    field_to_match {
      type = "QUERY_STRING"
    }
  }

  byte_match_tuples {
    text_transformation   = "URL_DECODE"
    target_string         = "allow_url_include="
    positional_constraint = "CONTAINS"

    field_to_match {
      type = "QUERY_STRING"
    }
  }

  byte_match_tuples {
    text_transformation   = "URL_DECODE"
    target_string         = "disable_functions="
    positional_constraint = "CONTAINS"

    field_to_match {
      type = "QUERY_STRING"
    }
  }

  byte_match_tuples {
    text_transformation   = "URL_DECODE"
    target_string         = "open_basedir="
    positional_constraint = "CONTAINS"

    field_to_match {
      type = "QUERY_STRING"
    }
  }

  byte_match_tuples {
    text_transformation   = "URL_DECODE"
    target_string         = "safe_mode="
    positional_constraint = "CONTAINS"

    field_to_match {
      type = "QUERY_STRING"
    }
  }
}

resource "aws_waf_byte_match_set" "owasp_06_php_insecure_uri_string_set" {

  name = "${lower(var.name)}-owasp-06-match-php-insecure-uri"

  byte_match_tuples {
    text_transformation   = "URL_DECODE"
    target_string         = "php"
    positional_constraint = "ENDS_WITH"

    field_to_match {
      type = "URI"
    }
  }

  byte_match_tuples {
    text_transformation   = "URL_DECODE"
    target_string         = "/"
    positional_constraint = "ENDS_WITH"

    field_to_match {
      type = "URI"
    }
  }
}

resource "aws_waf_rule" "owasp_06_php_insecure_rule" {
  depends_on = [
    aws_waf_byte_match_set.owasp_06_php_insecure_qs_string_set,
    aws_waf_byte_match_set.owasp_06_php_insecure_uri_string_set,
  ]


  name        = "${lower(var.name)}-owasp-06-detect-php-insecure"
  metric_name = "${lower(var.name)}OWASP06DetectPHPInsecure"

  predicates {
    data_id = aws_waf_byte_match_set.owasp_06_php_insecure_qs_string_set.id
    negated = "false"
    type    = "ByteMatch"
  }

  predicates {
    data_id = aws_waf_byte_match_set.owasp_06_php_insecure_uri_string_set.id
    negated = "false"
    type    = "ByteMatch"
  }
}

## OWASP Top 10 A7
### Mitigate abnormal requests via size restrictions
### Enforce consistent request hygene, limit size of key elements
resource "aws_waf_size_constraint_set" "owasp_07_size_restriction_set" {

  name = "${lower(var.name)}-owasp-07-size-restrictions"

  size_constraints {
    text_transformation = "NONE"
    comparison_operator = "GT"
    size                = var.max_expected_uri_size

    field_to_match {
      type = "URI"
    }
  }

  size_constraints {
    text_transformation = "NONE"
    comparison_operator = "GT"
    size                = var.max_expected_query_string_size

    field_to_match {
      type = "QUERY_STRING"
    }
  }

  size_constraints {
    text_transformation = "NONE"
    comparison_operator = "GT"
    size                = var.max_expected_body_size

    field_to_match {
      type = "BODY"
    }
  }

  size_constraints {
    text_transformation = "NONE"
    comparison_operator = "GT"
    size                = var.max_expected_cookie_size

    field_to_match {
      type = "HEADER"
      data = "cookie"
    }
  }
}

resource "aws_waf_rule" "owasp_07_size_restriction_rule" {
  depends_on = [aws_waf_size_constraint_set.owasp_07_size_restriction_set]


  name        = "${lower(var.name)}-owasp-07-restrict-sizes"
  metric_name = "${lower(var.name)}OWASP07RestrictSizes"

  predicates {
    data_id = aws_waf_size_constraint_set.owasp_07_size_restriction_set.id
    negated = "false"
    type    = "SizeConstraint"
  }
}

## OWASP Top 10 A8
### CSRF token enforcement example
### Enforce the presence of CSRF token in request header
resource "aws_waf_byte_match_set" "owasp_08_csrf_method_string_set" {

  name = "${lower(var.name)}-owasp-08-match-csrf-method"

  byte_match_tuples {
    text_transformation   = "LOWERCASE"
    target_string         = "post"
    positional_constraint = "EXACTLY"

    field_to_match {
      type = "METHOD"
    }
  }
}

resource "aws_waf_size_constraint_set" "owasp_08_csrf_token_size_constrain_set" {
  name = "${lower(var.name)}-owasp-08-csrf-token-size"

  size_constraints {
    text_transformation = "NONE"
    comparison_operator = "EQ"
    size                = var.csrf_expected_size

    field_to_match {
      type = "HEADER"
      data = var.csrf_expected_header
    }
  }
}

resource "aws_waf_rule" "owasp_08_csrf_rule" {
  depends_on = [
    aws_waf_byte_match_set.owasp_08_csrf_method_string_set,
    aws_waf_size_constraint_set.owasp_08_csrf_token_size_constrain_set,
  ]

  name        = "${lower(var.name)}-owasp-08-enforce-csrf"
  metric_name = "${lower(var.name)}OWASP08EnforceCSRF"

  predicates {
    data_id = aws_waf_byte_match_set.owasp_08_csrf_method_string_set.id
    negated = "false"
    type    = "ByteMatch"
  }

  predicates {
    data_id = aws_waf_size_constraint_set.owasp_08_csrf_token_size_constrain_set.id
    negated = "false"
    type    = "SizeConstraint"
  }
}

## OWASP Top 10 A9
### Server-side includes & libraries in webroot
### Matches request patterns for webroot objects that shouldn't be directly accessible
resource "aws_waf_byte_match_set" "owasp_09_server_side_include_string_set" {
  name = "${lower(var.name)}-owasp-09-match-ssi"

  byte_match_tuples {
    text_transformation   = "LOWERCASE"
    target_string         = ".cfg"
    positional_constraint = "ENDS_WITH"

    field_to_match {
      type = "URI"
    }
  }

  byte_match_tuples {
    text_transformation   = "LOWERCASE"
    target_string         = ".conf"
    positional_constraint = "ENDS_WITH"

    field_to_match {
      type = "URI"
    }
  }

  byte_match_tuples {
    text_transformation   = "LOWERCASE"
    target_string         = ".config"
    positional_constraint = "ENDS_WITH"

    field_to_match {
      type = "URI"
    }
  }

  byte_match_tuples {
    text_transformation   = "LOWERCASE"
    target_string         = ".ini"
    positional_constraint = "ENDS_WITH"

    field_to_match {
      type = "URI"
    }
  }

  byte_match_tuples {
    text_transformation   = "LOWERCASE"
    target_string         = ".log"
    positional_constraint = "ENDS_WITH"

    field_to_match {
      type = "URI"
    }
  }

  byte_match_tuples {
    text_transformation   = "LOWERCASE"
    target_string         = ".bak"
    positional_constraint = "ENDS_WITH"

    field_to_match {
      type = "URI"
    }
  }

  byte_match_tuples {
    text_transformation   = "LOWERCASE"
    target_string         = ".backup"
    positional_constraint = "ENDS_WITH"

    field_to_match {
      type = "URI"
    }
  }
}

resource "aws_waf_rule" "owasp_09_server_side_include_rule" {
  depends_on = [aws_waf_byte_match_set.owasp_09_server_side_include_string_set]

  name        = "${lower(var.name)}-owasp-09-detect-ssi"
  metric_name = "${lower(var.name)}OWASP09DetectSSI"

  predicates {
    data_id = aws_waf_byte_match_set.owasp_09_server_side_include_string_set.id
    negated = "false"
    type    = "ByteMatch"
  }
}

resource "aws_waf_web_acl" "default" {
  depends_on = [
    aws_waf_rule.owasp_01_sql_injection_rule,
    aws_waf_rule.owasp_02_auth_token_rule,
    aws_waf_rule.owasp_03_xss_rule,
    aws_waf_rule.owasp_04_paths_rule,
    aws_waf_rule.owasp_06_php_insecure_rule,
    aws_waf_rule.owasp_07_size_restriction_rule,
    aws_waf_rule.owasp_08_csrf_rule,
    aws_waf_rule.owasp_09_server_side_include_rule
  ]
  
  name = var.name

  metric_name = "cuttingWebACL${var.name}"

  default_action {
    type = "ALLOW"
  }

  rules {
    priority = "0"
    rule_id  = aws_waf_rule.owasp_01_sql_injection_rule.id
    type     = "REGULAR"

    action {
      type = "BLOCK"
    }
  }

  rules {
    priority = "1"
    rule_id  = aws_waf_rule.owasp_02_auth_token_rule.id
    type     = "REGULAR"

    action {
      type = "BLOCK"
    }
  }

  rules {
    priority = "2"
    rule_id  = aws_waf_rule.owasp_03_xss_rule.id
    type     = "REGULAR"

    action {
      type = "BLOCK"
    }
  }

  rules {
    priority = "3"
    rule_id  = aws_waf_rule.owasp_04_paths_rule.id
    type     = "REGULAR"

    action {
      type = "BLOCK"
    }
  }

  rules {
    priority = "4"
    rule_id  = aws_waf_rule.owasp_06_php_insecure_rule.id
    type     = "REGULAR"

    action {
      type = "BLOCK"
    }
  }

  rules {
    priority = "5"
    rule_id  = aws_waf_rule.owasp_07_size_restriction_rule.id
    type     = "REGULAR"

    action {
      type = "BLOCK"
    }
  }

  rules {
    priority = "6"
    rule_id  = aws_waf_rule.owasp_08_csrf_rule.id
    type     = "REGULAR"

    action {
      type = "BLOCK"
    }
  }

  rules {
    priority = "7"
    rule_id  = aws_waf_rule.owasp_09_server_side_include_rule.id
    type     = "REGULAR"

    action {
      type = "BLOCK"
    }
  }
}