terraform {
  required_version = ">= 1.0.11"
}

provider "aws" {
  region = "eu-west-2"
}

resource "aws_kms_key" "frontenddx-state-bucket-key" {
 description             = "This key is used to encrypt bucket objects"
 deletion_window_in_days = 10
 enable_key_rotation     = true
}

resource "aws_kms_alias" "key-alias" {
 name          = "alias/frontenddx-state-bucket-key"
 target_key_id = aws_kms_key.frontenddx-state-bucket-key.key_id
}

resource "aws_s3_bucket" "frontenddx_state" {
  bucket = "frontenddx-state"

  versioning {
    enabled = true
  }

  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        kms_master_key_id = aws_kms_key.frontenddx-state-bucket-key.arn
        sse_algorithm     = "aws:kms"
      }
    }
  }
}

resource "aws_s3_bucket_public_access_block" "block" {
   bucket = aws_s3_bucket.frontenddx_state.id

   block_public_acls       = true
   block_public_policy     = true
   ignore_public_acls      = true
   restrict_public_buckets = true
}


resource "aws_dynamodb_table" "terraform_locks" {
  name         = "frontenddx-state-locks"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "LockID"

  attribute {
    name = "LockID"
    type = "S"
  }
}
