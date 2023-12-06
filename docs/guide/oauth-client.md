# OAuth Client

After registering for use, create a link with GET requests with the parameters specified below

| Param            | Description                            | Type    | Field length | Required |
|------------------|----------------------------------------|---------|--------------|----------|
| `client_id`      | OAuth Client ID                        | `strig` | 200          | required |
| `redirect_uri`   | URL for redirect auth user to your app | `strig` | 200          | required |
| `response_type`  | Type of response                       | `strig` | 200          | required |
| `scope`          | Scope of access                        | `strig` | 200          | required |
| `state`          | State of request                       | `strig` | 200          | required |

You can see which ones are intended for the `scope` of which is provided and supported by roles, on the [next page](/guide/scope)

### Example

::: code-group
```HTTP request [GET]
https://api.astorage.uz/oauth/authorize?client_id=99183010-4ca0-455e-b567-8530e7cb1470&redirect_uri=https%3A%2F%2Fmy.astorage.uz%2Fastorage%2Fcallback&response_type=code&scope=&state=Error%20Tets
```
```HTML
<a href="https://api.astorage.uz/oauth/authorize?client_id=99183010-4ca0-455e-b567-8530e7cb1470&redirect_uri=https%3A%2F%2Fmy.astorage.uz%2Fastorage%2Fcallback&response_type=code&scope=&state=Error%20Tets">
    Login with Alpha Storage
</a>
```
:::

## Response

After the user has successfully logged in, the user will be redirected to the URL specified in the `redirect_uri` parameter with the following parameters

| Param            | Description                            | Type    | Field length | Required |
|------------------|----------------------------------------|---------|--------------|----------|
| `code`           | Code for get access token              | `strig` | 200          | required |
| `state`          | State of request                       | `strig` | 200          | required |


### Example

::: code-group
``` HTTP request [GET]
https://my.astorage.uz/astorage/callback?code=def502009c2eed21b3898071086b01e384318530a8c0cc7865d15b099bf410d636c2ce271538be4981b1602352534cbee9525a8e19d53dc18dd495c1628f2f442c29a4782dc37039d8689f469acb8939dfffe92d72226783658d7a16966cda23065c27aac1a248c69c68619bc796c77948629dab3d3bdfbf47ce2a82443cbfaa01e97e6ed9b1cf00d90a9f5ebdde9ce91ffe350897ad45b5609ac1c372ce302444d79e021864193473cacbd946fabdf4f30528e14642ed7d48862ece55e96bb3e965aba18c061d694a2de0e7ec497e5fbc71399d841c06a1ce0b7144055f700a53e86402739ebc7956d930d2e960b13b43c5aeb71ed5da27edc9ee3c5ae0a5ea8ddfcf095e3131b378b64388c991aa406b23d935bab69fed96be756321263654e07088103a0ad656e77ead701f0e2f636404d827de4962b8ef34a0f0ac2e5c2f6b48c46d982c3a4538363636e9e20be450c7f9a9f4dae1aeb7a0896fbd4e076e503cd21c317b4ad3f761981b3b5947439bc246551e36b22f6642d2188537110b301b5de55f&state=Error%20Tets
```

```JSON
{
  "code": "def502009c2eed21b3898071086b01e384318530a8c0cc7865d15b099bf410d636c2ce271538be4981b1602352534cbee9525a8e19d53dc18dd495c1628f2f442c29a4782dc37039d8689f469acb8939dfffe92d72226783658d7a16966cda23065c27aac1a248c69c68619bc796c77948629dab3d3bdfbf47ce2a82443cbfaa01e97e6ed9b1cf00d90a9f5ebdde9ce91ffe350897ad45b5609ac1c372ce302444d79e021864193473cacbd946fabdf4f30528e14642ed7d48862ece55e96bb3e965aba18c061d694a2de0e7ec497e5fbc71399d841c06a1ce0b7144055f700a53e86402739ebc7956d930d2e960b13b43c5aeb71ed5da27edc9ee3c5ae0a5ea8ddfcf095e3131b378b64388c991aa406b23d935bab69fed96be756321263654e07088103a0ad656e77ead701f0e2f636404d827de4962b8ef34a0f0ac2e5c2f6b48c46d982c3a4538363636e9e20be450c7f9a9f4dae1aeb7a0896fbd4e076e503cd21c317b4ad3f761981b3b5947439bc246551e36b22f6642d2188537110b301b5de55f",
  "state": "Error Tets"
}
```
:::

## Get Access Token

To get access token, you need to send POST request to `https://api.astorage.uz/oauth/token` with the following parameters

| Param            | Description                            | Type    | Field length | Required |
|------------------|----------------------------------------|---------|--------------|----------|
| `grant_type`     | Type of grant                          | `strig` | 200          | required |
| `client_id`      | OAuth Client ID                        | `strig` | 200          | required |
| `client_secret`  | OAuth Client Secret                    | `strig` | 200          | required |
| `redirect_uri`   | URL for redirect auth user to your app | `strig` | 200          | required |
| `code`           | Code for get access token              | `strig` | 200          | required |

### Example

::: code-group
```JS [Request]
axios.post('https://api.astorage.uz/oauth/token', {
    "grant_type": "authorization_code",
    "client_id": "99188b51-9abe-4028-8893-4905d7df9438",
    "client_secret": "MfmUvvZlS20SDSV2VF8w32zUFrcuV7CI9A2SHhdj",
    "redirect_uri": "https://my.astorage.uz/astorage/callback",
    "code": "def502009c2eed21b3898071086b01e384318530a8c0cc7865d15b099bf410d636c2ce271538be4981b1602352534cbee9525a8e19d53dc18dd495c1628f2f442c29a4782dc37039d8689f469acb8939dfffe92d72226783658d7a16966cda23065c27aac1a248c69c68619bc796c77948629dab3d3bdfbf47ce2a82443cbfaa01e97e6ed9b1cf00d90a9f5ebdde9ce91ffe350897ad45b5609ac1c372ce302444d79e021864193473cacbd946fabdf4f30528e14642ed7d48862ece55e96bb3e965aba18c061d694a2de0e7ec497e5fbc71399d841c06a1ce0b7144055f700a53e86402739ebc7956d930d2e960b13b43c5aeb71ed5da27edc9ee3c5ae0a5ea8ddfcf095e3131b378b64388c991aa406b23d935bab69fed96be756321263654e07088103a0ad656e77ead701f0e2f636404d827de4962b8ef34a0f0ac2e5c2f6b48c46d982c3a4538363636e9e20be450c7f9a9f4dae1aeb7a0896fbd4e076e503cd21c317b4ad3f761981b3b5947439bc246551e36b22f6642d2188537110b301b5de55f"
})
    .then(response => {
        console.log(response.data);
    })
    .catch (response => {
        // List errors on response...
    });
```
```JSON [Respponse]
{
    "token_type": "Bearer",
    "expires_in": 1296000,
    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5OTE4OGI1MS05YWJlLTQwMjgtODg5My00OTA1ZDdkZjk0MzgiLCJqdGkiOiJhN2U4N2JhNmIxMWMzNmRjN2NjZTc0ZmI1NTRiZWVlMDJhZDJkMmFmMjJkZTgzNjI2YmMzZGE4YmM1NGNhNTI3MzlmZDNhY2M1NzkxYmU2NyIsImlhdCI6MTY4MzMxNTM5OC41MjEwMjcsIm5iZiI6MTY4MzMxNTM5OC41MjEwMzYsImV4cCI6MTY4NDYxMTM5OC40Nzg5Mywic3ViIjoiMSIsInNjb3BlcyI6W119.A9tNltGQGZBp0blOZvpHGjkccWiV6aT2waMPUBYGwjZjKwSH9SXLt_N08E2FH6xg4A1e716fOyiu2MBmLza25xx3t0WaiU0Ay62UrrU_MM0rSLkjbsiQUeHDXfnHZ9cntPE2333aqI5AJNm1h4f39lSoTOUbG8Wkud2G5XlMQ1Wtj-vr7_jJGQHMGDodPo2MeKWJiQJQeDg8J0HZAxDa5ZUAFNeuOrWB9dKe4LMWiZpfmFz715Id9cxeL47RUTY2H2vGtdxYC3-wJFvQBTUHAp-jX-arY6B-av7Mhmdt4OGtE2GF0n2ROUiaLLNsIsaHBSmu66P-FcbWQUP9zTGprvhlg7wJl8fJTrb7d_Vpb-AC4AOfiOo_BnbkRLQDhUy9PDVr7MhUyAdFNUxy_dGRGuAJ7jqfoKSOXMX7jxFtSJOvFsg7JU1kAvCzVXi7B88N-HATCsmZu0En-oTvOfJB0VN2JFkvlCxA2857Ae0HUDU372N87noqPphJ-D7eTtLesM9R2Nv1mcMIj52qEU8V-5jqWtwkBsgnohVQGehc4eJo4T9PuZVu5SlxEQ1LmRh__U7xAtV4w59rcrHrtUSw--b2Ip-BUqv0PRqg4mJ2q-y6J40k_-ZYBd2f5rPdDTvoorDD9xhD29csuMc5GIl_3kL-0jkSWtWJItt_KfTsOFg",
    "refresh_token": "def50200cbd6c6fd51f1f985a5e7626c5b4cf184b75dfcf057dc667208274569701060fbdd3a86b67db658d6ad1b0b9ad8043fb52863a623559234901089207e72403138e07e6d66a48ba5791ce0e3855a1c3f68c44485597f7761a65cf28089e8304daba64d5aac1f6c6096ce92139286c5e658ef309dfae5d879e3efd42c8c0bc80a841f9bd87f1e02111143ad83dcb98d1da51a38cad3541c2da26743167d7a6e033204bb8ff4ead1310d6fabdbdb4e28e2bb28889fd8e8a3c8355366d7c0219a01749b8ce7ac731bb8a70f48c7a3b822e68abde9909234ec35c03a2ef26dbacececd459c031b5ae465b8facfbc893fe6289f6ed162aafcf543613a210ac0724118d9abcad9cea364abcd0a9362d938269dcfb637cea6e1b7d97333881002f845257021f00310292b32be976830632f17da7f38734670c52341e47715d9515b67a9009d47af8c728beb81d887c819421f276b68f16bd43842eb5633a987b1c4bf428dc065c87172639237c1d699debb341dd937f9f28d29dac95a1817c80737da7e68"
}
```
:::

## Refresh Token

To refresh access token, you need to send POST request to `https://api.astorage.uz/oauth/token` with the following parameters

| Param           | Description                            | Type    | Field length | Required |
|-----------------|----------------------------------------|---------|--------------|----------|
| `grant_type`    | Type of grant                          | `strig` | 200          | required |
| `client_id`     | OAuth Client ID                        | `strig` | 200          | required |
| `client_secret` | OAuth Client Secret                    | `strig` | 200          | required |
| `refresh_token` | Refresh token                          | `strig` | 200          | required |
| `scope`         | Scope of access token                  | `strig` | 200          | required |


### Example
::: code-group
```JS [Request]
axios.post('https://api.astorage.uz/oauth/token', {
    "grant_type": "refresh_token",
    "client_id": "99188b51-9abe-4028-8893-4905d7df9438",
    "client_secret": "b2a0f1b0-9b7a-4b7a-8b7a-4b7a8b7a8b7a",
    "refresh_token": "def50200cbd6c6fd51f1f985a5e7626c5b4cf184b75dfcf057dc667208274569701060fbdd3a86b67db658d6ad1b0b9ad8043fb52863a623559234901089207e72403138e07e6d66a48ba5791ce0e3855a1c3f68c44485597f7761a65cf28089e8304daba64d5aac1f6c6096ce92139286c5e658ef309dfae5d879e3efd42c8c0bc80a841f9bd87f1e02111143ad83dcb98d1da51a38cad3541c2da26743167d7a6e033204bb8ff4ead1310d6fabdbdb4e28e2bb28889fd8e8a3c8355366d7c0219a01749b8ce7ac731bb8a70f48c7a3b822e68abde9909234ec35c03a2ef26dbacececd459c031b5ae465b8facfbc893fe6289f6ed162aafcf543613a210ac0724118d9abcad9cea364abcd0a9362d938269dcfb637cea6e1b7d97333881002f845257021f00310292b32be976830632f17da7f38734670c52341e47715d9515b67a9009d47af8c728beb81d887c819421f276b68f16bd43842eb5633a987b1c4bf428dc065c87172639237c1d699debb341dd937f9f28d29dac95a1817c80737da7e68",
    "scope": ""
})
    .then(response => {
        console.log(response.data);
    })
    .catch (response => {
        // List errors on response...
    });
```
```JSON [Response]
{
    "token_type": "Bearer",
    "expires_in": 1295999,
    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5OTE4OGI1MS05YWJlLTQwMjgtODg5My00OTA1ZDdkZjk0MzgiLCJqdGkiOiIxZTY0NGI0YjM3N2IxYWNhMDU5OTUyOGU5MWUzMDU0MDkwYzRkMmJmN2YwMGI1OTk3NTU5ZDU1NjAyMjA1ZDE2MDViMWIwYzRjMTFlOWM1MCIsImlhdCI6MTY4MzMxNzM1MS45MDc5NjIsIm5iZiI6MTY4MzMxNzM1MS45MDc5NzUsImV4cCI6MTY4NDYxMzM1MC41NjI0NDIsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.hMRliHnVx5eRWcKTOzVBYHFwAi4KqgYkwCUSEdczzjb5IqQc4lqTWT9mrPAZgNdTiXLdNqAE53YuNJZDs7UgvKPUWEsvf6MksG2DrdYUfiUiYd1zHRtwfLCGe1na5j_yPdoxFPGIf4zXBUEWB_63Oq_0F7BJV1LKi_0SkbEyQMt-ksVs5-3K2t5bj3lysJvP6uY5dz8uF3zDuKFC0cyFuNnApxv84dgwZluCUD14nhf1iXGF_PquYwNFg6lUI4NTzM5SNVWKfpN4ZWyH7tm48kB3Zt7n2y26VChUeImTg5kKxe6ilG47uTVEMW1D-Zt2JZTh0iEqpz4NK2uY7xthjcY9YslNlRhnhgZBR6Ja8Vz4QxIiLW8UwLg-3gDtJlL769aw6jx3iwDQYRNQobAzGcTK3e8fqGrv4nTNIXHOSu9LTQK44rI-AyHZNCyU8kcxyQgd7b2ger3asFvTUsIZQ34jK0--ZO5d0LF1oly_WG9m8P83gK-2gdw-Cy-LtksYY1nFuBSeyJpAbm01KY7QNnhyQbPeNU_xfJST_8pacp4aVjvNWeE8cBL9M4QiyJm1FI14aZkyKmEoeWzqy887j3csZPILP334BSMzOHevzkuWv9KSFsNeTkAJYLpFq3Obxwc1IPn4ByGMFFeFCg5U8WSq_1e1P4RZSc9qfa527xo",
    "refresh_token": "def5020022d9b2830095e354eef56557d357949b4243dfefc5b74715b23194a3655f4fd030b310d90b094bf9d55e448015009347b0c2d72ee4d162ed32ef6af2f5053b44dcbfbf692e4c9a378f079a87b6d4fe28a86bfa74c6359c99b787d132ab0438569d788cfa34a2116d22d8da6ab08c6f67e5ccc2d045eac8f46672c44dd64897edea2ba5db5e8d8e832701a4b97c36e288b83bda15a719858128073bc1929be3fe622c0c382ec918795f765aaa75e8e242959b0bdddc5a31992293358922337bc01fb5ab1ace256e299e2b5b55444a8891f62ccbdb5ac36e115feaac5e38315e92edeab90d1fd5a21d92571eb362e1ad91090a88c082cbc4a4b1dcea689893d786ecec9b623b1ca34c19d79387e7c3454afdb0c2c0cf57c60db5293ca23e88829ca689b621b1097f75108a907cd36b2543ac105c28de7570dbcf2bd5007b1baa14fb34976ddb723edac5fd033847839cde54507513e6d689ca804cba0bff238aff6b6ee24d6af6413322ea33de1efcc504dc4484616f03406ac7888a19313403b1"
}
```