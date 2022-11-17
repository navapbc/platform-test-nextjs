data "aws_caller_identity" "current" {}
data "aws_region" "current" {}

locals {
  # Choose the region where this infrastructure should be deployed.
  region = module.project_config.default_region

  # Set project tags that will be used to tag all resources. 
  tags = merge(module.project_config.default_tags, {
    description = "Backend resources required for terraform state management and GitHub authentication with AWS."
  })
}

terraform {

  required_version = "~>1.2.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~>4.20.1"
    }
  }

  # Terraform does not allow interpolation here, values must be hardcoded.

  backend "s3" {
    bucket         = "platform-nextjs-327446564135-us-east-1-tf-state"
    dynamodb_table = "platform-nextjs-tf-state-locks"
    key            = "infra/account.tfstate"
    region         = "us-east-1"
    encrypt        = "true"
  }
}

provider "aws" {
  region = local.region
  default_tags {
    tags = local.tags
  }
}

module "project_config" {
  source = "../../project-config"
}

module "bootstrap" {
  source       = "../../modules/terraform-backend-s3"
  project_name = module.project_config.project_name
}

module "auth_github_actions" {
  source                   = "../../modules/auth-github-actions"
  github_actions_role_name = module.project_config.github_actions_role_name
  github_repository        = module.project_config.code_repository
}
