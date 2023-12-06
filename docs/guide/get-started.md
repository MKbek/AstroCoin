# Getting Started

::: warning
OAuth client registration temporarily suspended
:::

## Try It Online
You can try Alpha Storage directly in your browser on [Dashboard](https://my.astorage.uz)

## Information

Alpha Storage use OAuth 2.0 for authorization. You can get your client_id and client_secret from page for [Developers](https://develooper.astorage.uz)

To get started, you need to create an OAuth Client

## OAuth Client Registration

To do this, you need to log in to your account in the developer page and enter the necessary data to create an OAuth client

| Param          | Description                            | Type    | Field length | Required |
|----------------|----------------------------------------|---------|--------------|----------|
| `client_name`  | OAuth Client name                      | `strig` | 200          | required |
| `redirect_uri` | URL for redirect auth user to your app | `strig` | 200          | required |