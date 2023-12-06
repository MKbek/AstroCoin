---
aside: false
---

# Scopes

This page describes the scopes that you can request for your OAuth 2.0 token.

## Overview

Scopes are used to limit an application's access to a user's account. An application can request one or more scopes, this information is then presented to the user in the consent screen, and the access token issued to the application will be limited to the scopes granted.

## Available scopes

| Scope              | Description                         | Cashier | Business Manager | Business Owner |
|--------------------|-------------------------------------|---------|------------------|----------------|
| `sales`            | Sales products                      | ✅       | ✅                | ✅              |
| `read-product`     | Read product information            | ✅       | ✅                | ✅              |
| `create-product`   | Create new product                  | ❌       | ✅                | ✅              |
| `update-product`   | Update product information          | ❌       | ✅                | ✅              |
| `delete-product`   | Delete products                     | ❌       | ❌                | ✅              |
| `status-product`   | Change product status               | ❌       | ✅                | ✅              |
| `read-folder`      | Read folders and products in folder | ✅       | ✅                | ✅              |
| `create-folder`    | Create new folder                   | ❌       | ✅                | ✅              |
| `update-folder`    | Update folder information           | ❌       | ✅                | ✅              |
| `delete-folder`    | Delete folders                      | ❌       | ❌                | ✅              |
| `status-folder`    | Change folder status                | ❌       | ✅                | ✅              |
| `read-user`        | Read user information               | ❌       | ✅                | ✅              |
| `update-user`      | Update user information             | ❌       | ✅                | ✅              |
| `block-user`       | Block user                          | ❌       | ✅                | ✅              |
| `delete-user`      | Delete user                         | ❌       | ❌                | ✅              |
| `read-company`     | Read company information            | ✅       | ✅                | ✅              |
| `create-company`   | Create new company                  | ❌       | ❌                | ❌              |
| `update-company`   | Update company information          | ❌       | ❌                | ❌              |
| `delete-company`   | Delete company                      | ❌       | ❌                | ❌              |
| `read-sales`       | Read sales information              | ❌       | ✅                | ✅              |
| `read-statistics`  | Read statistics from sales          | ❌       | ✅                | ✅              |
| `transfer-company` | Transfer company ownership          | ❌       | ❌                | ❌              |
